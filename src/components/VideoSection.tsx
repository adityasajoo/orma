import Link from "next/link";

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Placeholder — drop a <video> or embed here when ready */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-white text-[clamp(4rem,12vw,10rem)] tracking-[0.25em]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          VIDEO
        </span>
      </div>

      {/* Collection overlay — same as hero */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap">
        <p
          className="text-[10px] tracking-[0.4em] mb-3 opacity-90"
          style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 100 }}
        >
          COLLECTION 01
        </p>
        <h2
          className="text-[2.4rem] tracking-[0.18em] mb-4 leading-none"
          style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 100 }}
        >
          RESIDUE // 2026
        </h2>
        <Link
          href="/collection"
          className="text-[10px] tracking-[0.35em] opacity-90 border-b border-white/60 pb-0.5 hover:opacity-60 transition-opacity"
          style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 100 }}
        >
          Discover
        </Link>
      </div>
    </section>
  );
}
