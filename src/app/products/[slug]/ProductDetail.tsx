"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Product } from "@/data/products";

const SIZES = ["XS", "S", "M", "L", "XL"];

const PRODUCT_DETAILS: Record<string, { description: string; composition: string }> = {
  "double-collar-top": {
    description:
      "A structured double-collar top from the Residue 2026 collection. Cut close to the body with architectural seaming that references geological stratification.",
    composition: "80% Virgin Wool, 16% Silk, 4% Elastane. Dry clean only. Made in India.",
  },
  "flared-pant": {
    description:
      "Wide-leg trousers with a dramatic flared silhouette. The structured waistband contrasts with the fluid drape of the hem, creating a sense of suspended motion.",
    composition: "72% Viscose, 24% Linen, 4% Elastane. Dry clean only. Made in India.",
  },
  "rift-skirt": {
    description:
      "An asymmetric layered skirt with cascading panels that form a fractured hemline. Each panel is precision-cut to create a controlled sense of dissolution.",
    composition: "68% Cotton, 28% Polyamide, 4% Elastane. Dry clean only. Made in India.",
  },
  "rorschach-cropped-jacket": {
    description:
      "A cropped jacket with deliberately mirrored seaming inspired by Rorschach inkblot patterns. The structured shoulder and raw-edge finish create tension between order and entropy.",
    composition: "85% Wool, 12% Silk, 3% Elastane. Dry clean only. Made in India.",
  },
  "fragment-corset": {
    description:
      "A boned corset with fragmented patchwork panels that reference shattered material. Each panel is individually seamed, making every piece unique.",
    composition: "60% Leather, 30% Cotton, 10% Nylon lining. Professional clean only. Made in India.",
  },
};

const DEFAULT_DETAIL = {
  description: "From the Residue 2026 collection. Crafted with precision and intent.",
  composition: "Dry clean only. Made in India.",
};

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const detail = PRODUCT_DETAILS[product.slug] ?? DEFAULT_DETAIL;

  return (
    <>
      <Navbar dark />

      <div
        className="flex"
        style={{ paddingTop: "68px", fontFamily: "var(--font-body)" }}
      >
        {/* Left: stacked gallery images, scroll to reveal */}
        <div style={{ width: "58%", flexShrink: 0 }}>
          {product.gallery.map((src, i) => (
            <div
              key={src}
              style={{
                width: "100%",
                height: "80vh",
                padding: "24px",
                marginBottom: i < product.gallery.length - 1 ? "8px" : 0,
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
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

        {/* Right: sticky info panel */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              position: "sticky",
              top: "68px",
              height: "calc(100vh - 68px)",
              overflowY: "auto",
              padding: "48px",
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
                marginBottom: "40px",
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
                fontSize: "1.6rem",
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
