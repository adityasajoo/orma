"use client";

import Image from 'next/image';

const columns = [
  {
    heading: 'Customer Services',
    links: [
      'FAQs',
      'Product Aftercare',
      'Track my order',
      'Register Return',
      'Store Locator',
      'Request an appointment',
    ],
  },
  {
    heading: 'The company',
    links: [
      'Legal Area',
      'Privacy Policy & Cookies',
      'Cookie Policy',
      'Cookies Settings and Do Not Sell or Share',
      'Careers',
      'OR•MA Studio',
    ],
  },
  {
    heading: 'Follow',
    links: ['Facebook', 'Instagram', 'X', 'YouTube', 'TikTok'],
  },
];

export default function Footer() {
  return (
    <footer className='bg-[#0d0d0d] text-white' style={{ fontFamily: 'var(--font-body)' }}>
      {/* Main grid — 2 cols on mobile, 4 on desktop */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 px-6 md:px-12 pt-12 md:pt-16 pb-10 md:pb-12 border-b border-[#2a2a2a]'>
        {columns.map(col => (
          <div key={col.heading}>
            <p className='text-[13px] font-medium text-white mb-5 md:mb-6'>
              {col.heading}
            </p>
            <ul className='flex flex-col gap-3 md:gap-[14px] list-none p-0 m-0'>
              {col.links.map(link => (
                <li key={link}>
                  <button
                    onClick={e => e.preventDefault()}
                    className='bg-transparent border-none p-0 cursor-pointer text-[12px] text-[#9a9a9a] text-left transition-colors duration-200 hover:text-white'>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscribe + Shipping column */}
        <div className='col-span-2 md:col-span-1'>
          <button
            onClick={e => e.preventDefault()}
            className='bg-transparent border-none p-0 cursor-pointer flex items-center gap-2.5 text-[13px] font-medium text-white mb-8 transition-opacity duration-200 hover:opacity-60'>
            Subscribe to the Newsletter
            <span className='text-base'>→</span>
          </button>

          <p className='text-[12px] text-[#9a9a9a] mb-2'>Shipping to:</p>
          <p className='text-[12px] text-white'>India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='flex items-center justify-between px-6 md:px-12 py-6'>
        <Image
          src='/images/latest/logo.png'
          alt='OR•MA Studio'
          width={80}
          height={40}
          className='invert'
        />
        <p className='text-[11px] text-[#5a5a5a] text-center'>
          © 2026 OR•MA Studio. All rights reserved.
        </p>
        <div className='w-[80px]' />
      </div>
    </footer>
  );
}
