export default function Loading() {
  return (
    <main className='pt-[68px] pb-20'>
      {/* Banner skeleton */}
      <div className='px-8 mb-10'>
        <div className='relative w-full h-52 bg-gray-100 animate-pulse' />
      </div>

      {/* Heading skeleton */}
      <div className='flex justify-center mb-10'>
        <div className='h-4 w-48 bg-gray-100 animate-pulse' />
      </div>

      {/* Grid skeleton */}
      <div className='px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-8 md:gap-y-12'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='aspect-3/4 bg-gray-100 animate-pulse' />
        ))}
      </div>
    </main>
  );
}
