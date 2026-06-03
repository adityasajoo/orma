'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section className='relative w-full h-[85vh] bg-black overflow-hidden'>
      <video
        ref={videoRef}
        src='/video/video.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
        suppressHydrationWarning
      />

      {/* dark overlay */}
      <div className='absolute inset-0 bg-black/20 pointer-events-none' />

      {/* collection overlay */}
      <div className='absolute bottom-14 left-1/2 -translate-x-1/2 text-center text-white px-6 z-10'>
        <p
          className='text-[10px] tracking-[0.4em] mb-3 opacity-90'
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 100,
          }}>
          COLLECTION 01
        </p>
        <h2
          className='text-[1.8rem] md:text-[2.4rem] tracking-[0.18em] mb-4 leading-none whitespace-nowrap'
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 100,
          }}>
          RESIDUE // 2026
        </h2>
        <Link
          href='/collection'
          className='text-[10px] tracking-[0.35em] opacity-90 border-b border-white/60 pb-0.5 hover:opacity-60 transition-opacity'
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 100,
          }}>
          Discover
        </Link>
      </div>

      {/* video controls — bottom right */}
      <div className='absolute bottom-14 right-8 flex items-center gap-3 z-10'>
        {/* mute / unmute */}
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className='w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-black/70 transition-colors'>
          {muted ? (
            /* speaker muted */
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
              <line x1='23' y1='9' x2='17' y2='15' />
              <line x1='17' y1='9' x2='23' y2='15' />
            </svg>
          ) : (
            /* speaker with waves */
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
              <path d='M15.54 8.46a5 5 0 0 1 0 7.07' />
              <path d='M19.07 4.93a10 10 0 0 1 0 14.14' />
            </svg>
          )}
        </button>

        {/* play / pause */}
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
          className='w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-black/70 transition-colors'>
          {playing ? (
            /* pause icon */
            <svg width='16' height='16' viewBox='0 0 24 24' fill='white'>
              <rect x='6' y='4' width='4' height='16' rx='1' />
              <rect x='14' y='4' width='4' height='16' rx='1' />
            </svg>
          ) : (
            /* play icon */
            <svg width='16' height='16' viewBox='0 0 24 24' fill='white'>
              <polygon points='5 3 19 12 5 21 5 3' />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
