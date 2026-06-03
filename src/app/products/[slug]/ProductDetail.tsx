"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Product } from "@/data/products";

const SIZES = ["XS", "S", "M", "L", "XL"];

const PRODUCT_DETAILS: Record<string, { description: string; composition: string }> = {
  "double-collar-top": {
    description:
      "Double collar top designed with two layered collars: one high collar and one convertible collar. The piece features a screwable front closure and subtle pattern detailing placed only along the seams, creating a clean, structured surface with quiet tension.",
    composition: "70% Polyester, 30% Wool. Dry clean only. Made in India.",
  },
  "flared-pant": {
    description:
      "Layered flared pants featuring two waistbands, one high and one regular, to create a strong sculpted waist. Finished with handmade buttons and hand-painted splashed lining beneath the layers, the piece combines structure with movement.",
    composition: "80% Polyester, 20% Wool. Dry clean only. Made in India.",
  },
  "rift-skirt": {
    description:
      "Multilayered asymmetrical skirt with a structured yet fluid silhouette. The hand-painted lining sits beneath the layers, adding depth and movement while keeping the piece sharp, textured, and quietly dramatic.",
    composition: "70% Polyester, 30% Wool. Dry clean only. Made in India.",
  },
  "rorschach-cropped-jacket": {
    description:
      "Cropped structured jacket with a layered silhouette and digital Rorschach print across the surface. The piece is sharply constructed, holding its form while creating a sense of distortion, depth, and controlled chaos.",
    composition: "100% Cotton. Dry clean only. Made in India.",
  },
  "fragment-corset": {
    description:
      "Sculpted 20-panel corset with intricate beadwork and delicate stocking-based detailing. The piece is highly crafted and intimate, balancing rigid construction with fragile surface work and hand-finished texture.",
    composition: "70% Polyester, 30% Wool. Dry clean only. Made in India.",
  },
};

const DEFAULT_DETAIL = {
  description: "From the Residue 2026 collection. Crafted with precision and intent.",
  composition: "Dry clean only. Made in India.",
};

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const detail = PRODUCT_DETAILS[product.slug] ?? DEFAULT_DETAIL;

  function handleCarouselScroll() {
    const el = carouselRef.current;
    if (!el) return;
    setActiveSlide(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <>
      <Navbar dark />

      {/* Mobile: stacked. Desktop: side-by-side */}
      <div
        className="flex flex-col md:flex-row"
        style={{ paddingTop: "68px", fontFamily: "var(--font-body)" }}
      >
        {/* Gallery */}
        <div className="w-full md:w-[58%] md:shrink-0">

          {/* Mobile: swipeable carousel */}
          <div className="md:hidden">
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
            >
              {product.gallery.map((src, i) => (
                <div
                  key={src}
                  className="snap-center shrink-0 w-full relative h-[90vw]"
                >
                  <Image
                    src={src}
                    alt={`${product.name} — view ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            {product.gallery.length > 1 && (
              <div className="flex justify-center gap-1.5 py-4">
                {product.gallery.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => {
                      carouselRef.current?.scrollTo({
                        left: i * (carouselRef.current.clientWidth),
                        behavior: "smooth",
                      });
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      activeSlide === i
                        ? "w-4 h-1.5 bg-black"
                        : "w-1.5 h-1.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Desktop: vertical stack */}
          <div className="hidden md:block">
            {product.gallery.map((src, i) => (
              <div
                key={src}
                className={`w-full p-6 ${i < product.gallery.length - 1 ? "mb-2" : ""}`}
              >
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={src}
                    alt={`${product.name} — view ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="58vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="w-full md:flex-1 md:min-w-0">
          <div
            className="px-6 py-8 md:px-12 md:py-12 md:sticky md:top-[68px]"
            style={{
              maxHeight: "calc(100vh - 68px)",
              overflowY: "auto",
            }}
          >
            {/* Back link */}
            <Link
              href="/ready-to-wear"
              style={{
                display: "inline-block",
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: "32px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              ← READY TO WEAR
            </Link>

            {/* Collection tag */}
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.35em",
                color: "#9ca3af",
                marginBottom: "12px",
              }}
            >
              RESIDUE // 2026
            </p>

            {/* Product name */}
            <h1
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#000",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              {product.name.toUpperCase()}
            </h1>

            {/* Price */}
            <p
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "32px",
              }}
            >
              {product.price}
            </p>

            <hr style={{ borderColor: "#e5e7eb", marginBottom: "32px" }} />

            {/* Size */}
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "#000",
                marginBottom: "16px",
              }}
            >
              SIZE
            </p>
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "32px",
                flexWrap: "wrap",
              }}
            >
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                  style={{
                    width: "44px",
                    height: "44px",
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                    border: `1px solid ${selectedSize === size ? "#000" : "#d1d5db"}`,
                    background: selectedSize === size ? "#000" : "transparent",
                    color: selectedSize === size ? "#fff" : "#000",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* CTA buttons */}
            <button
              style={{
                display: "block",
                width: "100%",
                background: "#000",
                color: "#fff",
                fontSize: "11px",
                letterSpacing: "0.3em",
                padding: "16px",
                border: "none",
                cursor: "pointer",
                marginBottom: "12px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#374151")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#000")}
            >
              ADD TO BAG
            </button>
            <button
              style={{
                display: "block",
                width: "100%",
                background: "transparent",
                color: "#000",
                fontSize: "11px",
                letterSpacing: "0.3em",
                padding: "16px",
                border: "1px solid #000",
                cursor: "pointer",
                marginBottom: "40px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#000";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#000";
              }}
            >
              BOOK AN APPOINTMENT
            </button>

            <hr style={{ borderColor: "#e5e7eb", marginBottom: "32px" }} />

            {/* Details */}
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "#000",
                marginBottom: "20px",
              }}
            >
              DETAILS
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#6b7280",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              {detail.description}
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "#9ca3af",
                lineHeight: 1.9,
              }}
            >
              {detail.composition}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
