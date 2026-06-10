import type { ReactNode } from 'react';

/**
 * Icon — registro de íconos SVG inline (equivalentes a Lucide, stroke 1.5,
 * currentColor) tal cual el diseño. El grosor de trazo y color se controlan
 * por CSS según el contexto donde se use.
 */
export type IconName =
  | 'menu'
  | 'mineria'
  | 'petroleo'
  | 'gas'
  | 'shield-check'
  | 'file-text'
  | 'trending-up'
  | 'users'
  | 'building'
  | 'scale'
  | 'check'
  | 'chip'
  | 'eye'
  | 'map-pin'
  | 'phone'
  | 'mail';

const PATHS: Record<IconName, ReactNode> = {
  menu: (
    <>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </>
  ),
  mineria: (
    <>
      <path d="M6 3h12l3 6-9 12L3 9z" />
      <path d="M3 9h18" />
      <path d="M12 3 9 9l3 12 3-12-3-6z" />
    </>
  ),
  petroleo: <path d="M12 3c3.5 4 6 7.2 6 10.5A6 6 0 0 1 6 13.5C6 10.2 8.5 7 12 3z" />,
  gas: (
    <>
      <path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-1.5.6-2.8 1.4-3.8C9.3 8 10 9 10 9s-.5-3 2-7z" />
      <path d="M12 22a3 3 0 0 0 3-3c0-2-3-4-3-4s-3 2-3 4a3 3 0 0 0 3 3z" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 2l8 3v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V5z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  'file-text': (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
  'trending-up': (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 3 3 5-7" />
      <circle cx="10" cy="10" r="0.6" fill="currentColor" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M16 4a3 3 0 0 1 0 6" />
      <path d="M18.5 15c2 .6 3.5 2.2 3.5 4" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7 2 14h6z" />
      <path d="M19 7l-3 7h6z" />
      <path d="M8 21h8" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
