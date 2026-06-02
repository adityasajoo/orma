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
    <footer
      style={{
        background: '#0d0d0d',
        color: '#fff',
        fontFamily: 'var(--font-body)',
      }}>
      {/* Main grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '40px',
          padding: '60px 48px 48px',
          borderBottom: '1px solid #2a2a2a',
        }}>
        {columns.map(col => (
          <div key={col.heading}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '24px',
                color: '#fff',
              }}>
              {col.heading}
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}>
              {col.links.map(link => (
                <li key={link}>
                  <button
                    onClick={e => e.preventDefault()}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      fontSize: '12px',
                      color: '#9a9a9a',
                      textAlign: 'left',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = '#9a9a9a')
                    }>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscribe + Shipping column */}
        <div>
          <button
            onClick={e => e.preventDefault()}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#fff',
              marginBottom: '32px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Subscribe to the Newsletter
            <span style={{ fontSize: '16px' }}>→</span>
          </button>

          <p
            style={{ fontSize: '12px', color: '#9a9a9a', marginBottom: '8px' }}>
            Shipping to:
          </p>
          <p style={{ fontSize: '12px', color: '#fff' }}>India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 48px',
        }}>
        <Image
          src='/images/latest/logo.png'
          alt='OR•MA Studio'
          width={80}
          height={40}
          style={{ objectFit: 'contain' }}
          className='invert'
        />
        <p style={{ fontSize: '11px', color: '#5a5a5a' }}>
          © 2026 OR•MA Studio. All rights reserved.
        </p>
        <div style={{ width: '80px' }} />
      </div>
    </footer>
  );
}
