'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, ShoppingBag, Search, X, ChevronDown } from 'lucide-react';

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
      '/images-final/menu/0a47c57d-3c01-4b8d-923a-203df4bcc94f Firefly Upscaler 4x scale.jpg',
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
      '/images-final/menu/991cb148-9f70-4c6c-b0a8-2fa966b6aeec (1) Firefly Upscaler 4x scale.jpg',
    subMenu: {
      heading: 'RESIDUE // 2026',
      links: [],
    },
  },
  {
    label: 'INSIDE ORMA',
    href: '/inside-orma',
    image:
      '/images-final/menu/13122235-76d4-4597-971c-53083b7cf8c1 Firefly Upscaler 4x scale.jpg',
    subMenu: null,
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: Props) {
  const [activeItem, setActiveItem] = useState<NavItem>(navItems[0]);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
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

      {/* Left: editorial image — desktop only */}
      <div className='hidden md:block relative w-[44%] h-full overflow-hidden bg-neutral-900'>
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
        className='w-full md:w-[56%] h-full bg-white flex flex-col'
        style={{ fontFamily: 'var(--font-body)' }}>
        {/* Top bar */}
        <div className='flex items-center justify-between px-8 md:px-12 py-[22px] border-b border-gray-100'>
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

        {/* Nav — desktop: two-column hover layout / mobile: accordion */}
        <div className='flex-1 overflow-y-auto px-8 md:px-14 py-8 md:py-0 md:flex md:items-center'>
          {/* ── Desktop layout ── */}
          <div className='hidden md:flex gap-20 items-start'>
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

            {/* Column 2: sub-menu */}
            <div className='flex flex-col gap-2 min-w-[180px] min-h-[12rem]'>
              {activeItem.subMenu && (
                <>
                  <Link
                    href={activeItem.href}
                    onClick={onClose}
                    className='block text-[1.65rem] font-bold tracking-[0.06em] leading-tight text-black hover:opacity-70 transition-opacity duration-150'>
                    {activeItem.subMenu.heading}
                  </Link>
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

          {/* ── Mobile layout: accordion ── */}
          <nav className='md:hidden flex flex-col w-full'>
            {navItems.map(item => {
              const isExpanded = expandedMobile === item.label;
              const hasSubMenu =
                item.subMenu &&
                (item.subMenu.links.length > 0 || item.subMenu.heading);

              return (
                <div key={item.label} className='border-b border-gray-100'>
                  <div className='flex items-center justify-between py-4'>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className='text-[1.5rem] font-bold tracking-[0.06em] text-black'>
                      {item.label}
                    </Link>
                    {hasSubMenu && (
                      <button
                        aria-label={`Toggle ${item.label} sub-menu`}
                        onClick={() =>
                          setExpandedMobile(isExpanded ? null : item.label)
                        }
                        className='p-2 text-black transition-transform duration-200'
                        style={{
                          transform: isExpanded
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                        }}>
                        <ChevronDown size={18} strokeWidth={1.5} />
                      </button>
                    )}
                  </div>

                  {hasSubMenu && isExpanded && item.subMenu && (
                    <div className='pb-4 pl-4 flex flex-col gap-3'>
                      {item.subMenu.heading && (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className='text-[1.1rem] font-bold tracking-[0.05em] text-black/60'>
                          {item.subMenu.heading}
                        </Link>
                      )}
                      {item.subMenu.links.map(link => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={onClose}
                          className='text-[1rem] font-bold tracking-[0.04em] text-black/40'>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className='flex justify-between px-8 md:px-14 py-6 border-t border-gray-100'>
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
