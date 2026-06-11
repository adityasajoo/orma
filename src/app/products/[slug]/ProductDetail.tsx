'use client';

import Navbar from '@/components/Navbar';
import { urlFor } from '@/lib/image';
import { SanityProduct } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

const DEFAULT_DETAIL = {
  description:
    'From the Residue 2026 collection. Crafted with precision and intent.',
  composition: 'Dry clean only. Made in India.',
};

export default function ProductDetail({ product }: { product: SanityProduct }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const description = product.description ?? DEFAULT_DETAIL.description
  const composition = product.composition ?? DEFAULT_DETAIL.composition;

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
        className='flex flex-col md:flex-row'
        style={{ paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
        {/* Gallery */}
        <div className='w-full md:w-[58%] md:shrink-0'>
          {/* Mobile: swipeable carousel */}
          <div className='md:hidden'>
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className='flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide'>
              {product.gallery.map((src, i) => (
                <div
                  key={src.asset._ref}
                  className='snap-center shrink-0 w-full relative h-[90vw]'>
                  <Image
                    src={urlFor(src)}
                    alt={`${product.name} — view ${i + 1}`}
                    fill
                    className='object-contain'
                    sizes='100vw'
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            {product.gallery.length > 1 && (
              <div className='flex justify-center gap-1.5 py-4'>
                {product.gallery.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => {
                      carouselRef.current?.scrollTo({
                        left: i * carouselRef.current.clientWidth,
                        behavior: 'smooth',
                      });
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      activeSlide === i
                        ? 'w-4 h-1.5 bg-black'
                        : 'w-1.5 h-1.5 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Desktop: vertical stack */}
          <div className='hidden md:block'>
            {product.gallery.map((src, i) => (
              <div
                key={src.asset._ref}
                className={`w-full p-6 ${i < product.gallery.length - 1 ? 'mb-2' : ''}`}>
                <div className='relative w-full h-[80vh]'>
                  <Image
                    src={urlFor(src)}
                    alt={`${product.name} — view ${i + 1}`}
                    fill
                    className='object-contain'
                    sizes='58vw'
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className='w-full md:flex-1 md:min-w-0'>
          <div
            className='px-6 py-8 md:px-12 md:py-12 md:sticky md:top-[68px]'
            style={{
              maxHeight: 'calc(100vh - 68px)',
              overflowY: 'auto',
            }}>
            {/* Back link */}
            <Link
              href='/ready-to-wear'
              style={{
                display: 'inline-block',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#9ca3af',
                textDecoration: 'none',
                marginBottom: '32px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#000')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
              ← READY TO WEAR
            </Link>

            {/* Collection tag */}
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.35em',
                color: '#9ca3af',
                marginBottom: '12px',
              }}>
              RESIDUE // 2026
            </p>

            {/* Product name */}
            <h1
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#000',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}>
              {product.name.toUpperCase()}
            </h1>

            {/* Price */}
            <p
              style={{
                fontSize: '13px',
                color: '#6b7280',
                marginBottom: '32px',
              }}>
              {product.price}
            </p>

            <hr style={{ borderColor: '#e5e7eb', marginBottom: '32px' }} />

            {/* Size */}
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#000',
                marginBottom: '16px',
              }}>
              SIZE
            </p>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '32px',
                flexWrap: 'wrap',
              }}>
              {SIZES.map(size => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(size === selectedSize ? null : size)
                  }
                  style={{
                    width: '44px',
                    height: '44px',
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                    border: `1px solid ${selectedSize === size ? '#000' : '#d1d5db'}`,
                    background: selectedSize === size ? '#000' : 'transparent',
                    color: selectedSize === size ? '#fff' : '#000',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                  {size}
                </button>
              ))}
            </div>

            {/* CTA buttons */}
            <button
              style={{
                display: 'block',
                width: '100%',
                background: '#000',
                color: '#fff',
                fontSize: '11px',
                letterSpacing: '0.3em',
                padding: '16px',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '12px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#374151')}
              onMouseLeave={e => (e.currentTarget.style.background = '#000')}>
              ADD TO BAG
            </button>
            <button
              style={{
                display: 'block',
                width: '100%',
                background: 'transparent',
                color: '#000',
                fontSize: '11px',
                letterSpacing: '0.3em',
                padding: '16px',
                border: '1px solid #000',
                cursor: 'pointer',
                marginBottom: '40px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#000';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#000';
              }}>
              BOOK AN APPOINTMENT
            </button>

            <hr style={{ borderColor: '#e5e7eb', marginBottom: '32px' }} />

            {/* Details */}
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#000',
                marginBottom: '20px',
              }}>
              DETAILS
            </p>
            <p
              style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: 1.9,
                marginBottom: '20px',
              }}>
              {description}
            </p>
            <p
              style={{
                fontSize: '11px',
                color: '#9ca3af',
                lineHeight: 1.9,
              }}>
              {composition}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
