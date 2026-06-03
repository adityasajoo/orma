import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function CollectionsPage() {
  return (
    <>
      <Navbar dark />

      <main className='bg-white'>
        {/* Hero: stacked on mobile, side-by-side on desktop */}
        <section className='flex flex-col md:flex-row min-h-[auto] md:min-h-[680px] pt-20 px-6 md:px-32'>
          {/* Left — text */}
          <div className='w-full md:w-[35%] flex flex-col justify-center md:pr-10 pb-8 md:pb-0'>
            <h1
              className='text-[1.35rem] font-bold tracking-[0.06em] mb-2'
              style={{ fontFamily: 'var(--font-body)' }}>
              RESIDUE // 2026
            </h1>
            <p
              className='text-[15px] leading-[1.65] text-black/50 mb-5'
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              Residue explores what remains after emotion, memory, and conflict
              have passed through the body. <br></br> The collection studies the
              quiet traces left behind by guilt, tension, and self-reflection,
              turning them into structured silhouettes, layered surfaces, and
              distorted prints.
            </p>
            <br></br>
            <p
              className='text-[15px] leading-[1.65] text-black/50'
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              Through sharp tailoring, shadowed textures, and restrained
              details, each piece carries a sense of something unresolved.
              Residue is not about the moment itself, but what it leaves behind.
            </p>
          </div>

          {/* Right — collage image */}
          <div
            className='w-full md:w-[65%] relative h-[60vw] md:h-auto'
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
            }}>
            <Image
              src='/images-final/collection/Untitled-20.png'
              alt='Residue 2026 — collection collage'
              fill
              className='object-contain object-center'
              sizes='(max-width: 768px) 100vw, 70vw'
              priority
            />
          </div>
        </section>

        {/* Full-width editorial photo */}
        <section className='px-4 md:px-12 pb-0'>
          <div className='relative w-full h-[55vw] md:h-[580px] overflow-hidden'>
            <Image
              src='/images-final/collection/bba4214b-e6bd-4013-9d30-ac7e8545f2ed.png'
              alt='Residue 2026 — editorial'
              fill
              className='object-cover object-top'
              sizes='100vw'
            />
          </div>
        </section>

        {/* Bottom tag strip */}
        <section
          className='flex items-center justify-between px-4 md:px-8 py-5 border-t border-gray-100'
          style={{ fontFamily: 'var(--font-body)' }}>
          <span className='text-[12px] md:text-[16px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-black'>
            TAILORED
          </span>
          <span className='text-black text-lg leading-none'>•</span>
          <span className='text-[12px] md:text-[16px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-black'>
            DISTORTED
          </span>
          <span className='text-black text-lg leading-none'>•</span>
          <span className='text-[12px] md:text-[16px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-black'>
            LAYERED
          </span>
        </section>
      </main>
    </>
  );
}
