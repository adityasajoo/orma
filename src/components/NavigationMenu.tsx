'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, ShoppingBag, Search, X } from 'lucide-react';

interface SubLink {
  label: string;
  href: string;
}

interface SubMenu {
  heading: string;
  links: SubLink[];
}

interface NavItem {
  label: string;
  href: string;
  image: string;
  subMenu: SubMenu | null;
}

const navItems: NavItem[] = [
  {
    label: 'WOMEN',
    href: '/ready-to-wear',
    image:
      '/images/new-scaled/0a47c57d-3c01-4b8d-923a-203df4bcc94f_2026-06-02_12_46_17.240638.webp',
    subMenu: {
      heading: 'READY TO WEAR',
      links: [
        { label: 'TOPS', href: '/ready-to-wear/tops' },
        { label: 'SKIRTS', href: '/ready-to-wear/skirts' },
        { label: 'PANTS', href: '/ready-to-wear/pants' },
        { label: 'JACKETS', href: '/ready-to-wear/jackets' },
      ],
    },
  },
  {
    label: 'COLLECTIONS',
    href: '/collections',
    image:
      '/images/new-scaled/jacket2.webp',
    subMenu: {
      heading: 'RESIDUE // 2026',
      links: [],
    },
  },
  {
    label: 'INSIDE ORMA',
    href: '/inside-orma',
    image:
      '/images/new-scaled/0d046df7-d859-48fb-8da4-3e46ed6a015f_2026-06-02_12_46_18.777011.webp',
    subMenu: null,
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: Props) {
  const [activeItem, setActiveItem] = useState<NavItem>(navItems[0]);

  // Prevent background scroll and scrollbar reflow when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 flex transition-opacity duration-500 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}>
      {/* Close — same position as the hamburger */}
      <button
        aria-label='Close menu'
        onClick={onClose}
        className='absolute top-5 left-8 z-10 text-white hover:opacity-50 transition-opacity'>
        <X size={22} strokeWidth={1.2} />
      </button>

      {/* Left: editorial image */}
      <div className='relative w-[44%] h-full overflow-hidden bg-neutral-900'>
        {navItems.map(item => (
          <Image
            key={item.label}
            src={item.image}
            alt={item.label}
            fill
            className={`object-cover object-center transition-opacity duration-500 ${
              activeItem.label === item.label ? 'opacity-100' : 'opacity-0'
            }`}
            sizes='44vw'
          />
        ))}
      </div>

      {/* Right: menu panel */}
      <div
        className='w-[56%] h-full bg-white flex flex-col'
        style={{ fontFamily: 'var(--font-body)' }}>
        {/* Top bar */}
        <div className='flex items-center justify-between px-12 py-[22px] border-b border-gray-100'>
          <span className='text-[11px] tracking-[0.06em] text-gray-500'>
            Shipping to : <span className='font-bold text-black'>India</span>
            <span className='mx-2 text-gray-300'>·</span>EN
          </span>
          <div className='flex items-center gap-5 text-gray-800'>
            <button
              aria-label='Account'
              className='hover:opacity-50 transition-opacity'>
              <User size={18} strokeWidth={1.2} />
            </button>
            <button
              aria-label='Cart'
              className='hover:opacity-50 transition-opacity'>
              <ShoppingBag size={18} strokeWidth={1.2} />
            </button>
            <button
              aria-label='Search'
              className='hover:opacity-50 transition-opacity'>
              <Search size={18} strokeWidth={1.2} />
            </button>
          </div>
        </div>

        {/* Nav — vertically centered */}
        <div className='flex-1 flex items-center px-14'>
          <div className='flex gap-20 items-start'>
            {/* Column 1: primary nav */}
            <nav className='flex flex-col gap-2'>
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={onClose}
                  className={`block text-[1.65rem] font-bold tracking-[0.06em] leading-tight transition-opacity duration-150 ${
                    activeItem.label === item.label
                      ? 'opacity-100 text-black'
                      : 'opacity-25 text-black hover:opacity-50'
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Column 2: sub-menu — fixed min-height prevents layout shift when switching items */}
            <div className='flex flex-col gap-2 min-w-[180px] min-h-[12rem]'>
              {activeItem.subMenu && (
                <>
                  <span className='block text-[1.65rem] font-bold tracking-[0.06em] leading-tight text-black'>
                    {activeItem.subMenu.heading}
                  </span>
                  {activeItem.subMenu.links.map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={onClose}
                      className='block text-[1.35rem] font-bold tracking-[0.04em] leading-tight text-black/30 hover:text-black/70 transition-colors duration-150'>
                      {link.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex justify-between px-14 py-6 border-t border-gray-100'>
          <Link
            href='/support'
            onClick={onClose}
            className='text-[11px] tracking-[0.06em] text-gray-400 hover:text-black transition-colors'>
            Customer support
          </Link>
          <Link
            href='/appointment'
            onClick={onClose}
            className='text-[11px] tracking-[0.06em] text-gray-400 hover:text-black transition-colors'>
            Book an appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
