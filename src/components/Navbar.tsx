'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, User, ShoppingBag, Search } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import SearchOverlay from './SearchOverlay';

interface NavbarProps {
  dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const iconColor = dark ? 'text-black' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-10 pt-8 px-8 py-5 transition-opacity duration-300 ${
          isMenuOpen || isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
        <button
          aria-label='Open menu'
          onClick={() => setIsMenuOpen(true)}
          className={`${iconColor} hover:opacity-50 transition-opacity`}>
          <Menu size={22} strokeWidth={1.2} />
        </button>

        <Link href='/' className='absolute left-1/2 -translate-x-1/2 '>
          <Image
            src='/images/latest/logo.png'
            alt='OR•MA Studio'
            width={90}
            height={45}
            className='mix-blend-multiply'
            priority
          />
        </Link>

        <div className={`flex items-center gap-5 ${iconColor}`}>
          <button
            aria-label='Account'
            className='hover:opacity-50 transition-opacity'>
            <User size={20} strokeWidth={1.2} />
          </button>
          <button
            aria-label='Cart'
            className='hover:opacity-50 transition-opacity'>
            <ShoppingBag size={20} strokeWidth={1.2} />
          </button>
          <button
            aria-label='Search'
            onClick={() => setIsSearchOpen(true)}
            className='hover:opacity-50 transition-opacity'>
            <Search size={20} strokeWidth={1.2} />
          </button>
        </div>
      </nav>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
