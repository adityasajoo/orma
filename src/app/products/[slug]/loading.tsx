export default function Loading() {
  return (
    <div className='flex flex-col md:flex-row' style={{ paddingTop: '68px' }}>
      {/* Gallery skeleton */}
      <div className='w-full md:w-[58%] md:shrink-0'>
        <div className='md:hidden relative w-full h-[90vw] bg-gray-100 animate-pulse' />
        <div className='hidden md:block'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='w-full p-6 mb-2'>
              <div className='relative w-full h-[80vh] bg-gray-100 animate-pulse' />
            </div>
          ))}
        </div>
      </div>

      {/* Info panel skeleton */}
      <div className='w-full md:flex-1 md:min-w-0'>
        <div className='px-6 py-8 md:px-12 md:py-12'>
          <div className='h-3 w-24 bg-gray-100 animate-pulse mb-8' />
          <div className='h-2 w-32 bg-gray-100 animate-pulse mb-3' />
          <div className='h-6 w-3/4 bg-gray-100 animate-pulse mb-3' />
          <div className='h-3 w-20 bg-gray-100 animate-pulse mb-8' />

          <hr className='border-gray-200 mb-8' />

          <div className='h-2 w-12 bg-gray-100 animate-pulse mb-4' />
          <div className='flex gap-2 mb-8'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className='w-11 h-11 bg-gray-100 animate-pulse' />
            ))}
          </div>

          <div className='h-12 w-full bg-gray-200 animate-pulse mb-3' />
          <div className='h-12 w-full bg-gray-100 animate-pulse mb-10' />

          <hr className='border-gray-200 mb-8' />

          <div className='h-2 w-16 bg-gray-100 animate-pulse mb-5' />
          <div className='h-2 w-full bg-gray-100 animate-pulse mb-2' />
          <div className='h-2 w-full bg-gray-100 animate-pulse mb-2' />
          <div className='h-2 w-2/3 bg-gray-100 animate-pulse' />
        </div>
      </div>
    </div>
  );
}
