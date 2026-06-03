import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      <Image
        src='/images-final/landing.jpg'
        alt='OR•MA Studio — Collection 01: Residue 2026'
        fill
        className='object-cover object-center'
        priority
        sizes='100vw'
      />

      <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none' />

      <div className='absolute bottom-14 left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap'>
        <p
          className='text-[10px] tracking-[0.4em] font-light mb-3 opacity-90'
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 100,
          }}>
          COLLECTION 01
        </p>
        <h1
          className='text-[2.4rem] tracking-[0.18em] mb-4 leading-none'
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 100,
          }}>
          RESIDUE // 2026
        </h1>
        <Link
          href='/ready-to-wear'
          className='text-[10px] tracking-[0.35em] opacity-90 border-b border-white/60 pb-0.5 hover:opacity-60 transition-opacity'
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 100,
          }}>
          Discover
        </Link>
      </div>
    </section>
  );
}
