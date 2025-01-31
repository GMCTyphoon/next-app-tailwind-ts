'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();
  let linkClasses =
    'no-underline px-4 py-2 hover:[text-shadow:_0_0_18px_rgba(32_12_141_/_0.8)] bg-clip-text';
  if (path.startsWith(href)) {
    linkClasses += ' [text-shadow:_0_0_8px_rgba(32_12_141_/_0.8)]';
  }
  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};
