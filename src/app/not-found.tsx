import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-8">
      <Link
        href="/"
        className="absolute top-8 left-1/2 -translate-x-1/2 text-center leading-none select-none text-black"
        style={{ fontFamily: 'var(--font-body)' }}>
        <div className="text-xl font-bold tracking-[0.28em]">OR&bull;MA</div>
        <div className="text-[9px] tracking-[0.5em] font-normal mt-0.5">STUDIO</div>
      </Link>

      <div className="text-center max-w-md">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-neutral-400 mb-8"
          style={{ fontFamily: 'var(--font-body)' }}>
          Collection 01 — Residue
        </p>

        <h1
          className="text-4xl font-extralight tracking-[0.3em] uppercase text-black mb-6"
          style={{ fontFamily: 'var(--font-body)' }}>
          Coming Soon
        </h1>

        <div className="w-8 h-px bg-neutral-300 mx-auto mb-8" />

        <p
          className="text-[11px] tracking-[0.35em] uppercase text-neutral-400 mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}>
          This page is not yet available.<br />
          Stay tuned.
        </p>

        <Link
          href="/"
          className="text-[10px] tracking-[0.45em] uppercase text-black border-b border-black pb-0.5 hover:opacity-40 transition-opacity"
          style={{ fontFamily: 'var(--font-body)' }}>
          Return Home
        </Link>
      </div>
    </main>
  );
}
