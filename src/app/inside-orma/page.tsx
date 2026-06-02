import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function InsideOrmaPage() {
  return (
    <>
      <Navbar dark />

      <main className='bg-white' style={{ fontFamily: 'var(--font-body)' }}>
        {/* Centered brand statement */}
        <section className='flex flex-col items-center justify-center px-8 pt-40 pb-24 text-center'>
          <p
            className='text-[13.5px] leading-[1.75] text-black/50 max-w-[340px] mb-7'
            style={{ fontWeight: 400 }}>
            OR-MA is a creative house shaped by memory, curiosity, and change.
            It is built on the idea that design does not have to stay fixed to
            one look, medium, or identity. Instead, it can move, collect, shift,
            and grow through lived experiences, emotions, people, places, and
            time.
          </p>
          <br></br>
          <p
            className='text-[13.5px] leading-[1.75] text-black/50 max-w-[340px]'
            style={{ fontWeight: 400 }}>
            At its core, OR-MA is about observing life closely and turning those
            traces into clothing, objects, stories, and visual worlds. It is
            thoughtful, evolving, and emotionally textured, but never forced.
            The brand exists as a space for experimentation, collaboration, and
            becoming.
          </p>
        </section>

        {/* Behind the Scenes */}
        <section className='px-16 pb-20'>
          <div className='flex flex-col justify-start pt-1 min-w-[80px] '>
            <span className='text-[14px] tracking-[0.35em] font-medium text-black leading-[1.5] pb-6'>
              BEHIND
              <br />
              THE
              <br />
              SCENES
            </span>
          </div>
          {/* Label */}

          {/* Three images */}
          <div className='flex gap-18 flex-1'>
            <div className='relative flex-1 h-[500px] overflow-hidden'>
              <Image
                src='/images/latest/WhatsApp Image 2026-06-02 at 18.21.43.jpeg'
                alt='Behind the scenes — studio'
                fill
                className='object-cover object-center grayscale'
                sizes='30vw'
              />
            </div>
            <div className='relative flex-1 h-[500px] overflow-hidden'>
              <Image
                src='/images/latest/WhatsApp Image 2026-06-02 at 18.22.10.jpeg'
                alt='Behind the scenes — garment detail'
                fill
                className='object-cover object-center grayscale'
                sizes='30vw'
              />
            </div>
            <div className='relative flex-1 h-[500px] overflow-hidden'>
              <Image
                src='/images/latest/WhatsApp Image 2026-06-02 at 18.22.33.jpeg'
                alt='Behind the scenes — sculptural piece'
                fill
                className='object-cover object-center grayscale'
                sizes='30vw'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
