"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export type { Product };

export default function ProductCard({ product }: { product: Product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <Link href={`/products/${product.slug}`}>
        {/* Flip container */}
        <div className="relative aspect-[3/4]" style={{ perspective: "1000px" }}>
          {/* Rotating inner */}
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.55s ease",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front — flat product shot */}
            <div
              className="absolute inset-0 bg-[#efefef] overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg leading-none select-none">
                ›
              </span>
            </div>

            {/* Back — editorial model shot */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src={product.hoverImage}
                alt={product.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg leading-none select-none">
                ›
              </span>
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-3" style={{ fontFamily: "var(--font-body)" }}>
          {/* Animated half-border: slides left→right as card flips */}
          <div className="relative h-px bg-gray-100 mb-2 overflow-hidden">
            <div
              className="absolute top-0 h-full w-1/2 bg-gray-400"
              style={{
                left: flipped ? "50%" : "0%",
                transition: "left 0.55s ease",
              }}
            />
          </div>
          <p className="text-[13px] font-normal text-black tracking-wide">
            {product.name}
          </p>
          <p className="text-[12px] text-gray-500 mt-0.5 font-normal">
            {product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
