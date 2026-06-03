'use client';

import { X, Search } from 'lucide-react';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>

      {/* Top bar */}
      <div className='flex items-center justify-between px-8 py-[22px] border-b border-gray-100'>
        <button
          aria-label='Close search'
          onClick={onClose}
          className='flex items-center gap-2 text-[11px] tracking-[0.06em] text-black hover:opacity-50 transition-opacity'
          style={{ fontFamily: 'var(--font-body)' }}>
          <X size={16} strokeWidth={1.2} />
          <span>Close</span>
        </button>
        <Search size={18} strokeWidth={1.2} className='text-black' />
      </div>

      {/* Search input */}
      <div className='px-8 py-5 border-b border-gray-100'>
        <div className='flex items-center gap-3'>
          <Search size={15} strokeWidth={1.2} className='text-gray-400 flex-shrink-0' />
          <input
            type='text'
            placeholder='What are you looking for ?'
            readOnly
            className='flex-1 text-[13px] tracking-[0.02em] text-gray-400 outline-none bg-transparent placeholder:text-gray-400 cursor-default'
            style={{ fontFamily: 'var(--font-body)' }}
          />
        </div>
      </div>

      {/* Editorial image */}
      <div className='relative flex-1 overflow-hidden'>
        <Image
          src='/images-final/search bar/e10292f5-3482-4896-ae56-8bc847a383ad Firefly Upscaler 2x scale.jpg'
          alt='Search editorial'
          fill
          className='object-cover object-top'
          sizes='100vw'
        />
      </div>
    </div>
  );
}
