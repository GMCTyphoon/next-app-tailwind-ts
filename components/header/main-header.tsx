import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImg from '@/assets/logo.png';
import authImg from '@/assets/authImg.png';
import { NavLink } from './nav-link';

export const MainHeader: FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link
        href="/"
        className="flex items-center justify-center gap-4 no-underline hover:[text-shadow:_0_0_18px_rgba(32_12_141_/_0.8)] bg-clip-text"
      >
        <Image src={logoImg} alt="Logo" />
        STEMPS
      </Link>
      <nav>
        <ul className="flex list-none m-0 p-0 gap-6">
          <li>
            <NavLink href="/about">О школе</NavLink>
          </li>
          <li>
            <NavLink href="/courses">Курсы</NavLink>
          </li>
          <li>
            <NavLink href="/library">Библиотека</NavLink>
          </li>
        </ul>
      </nav>
      <Link
        href="/"
        className="flex items-center justify-center gap-4 no-underline hover:[text-shadow:_0_0_18px_rgba(32_12_141_/_0.8)] bg-clip-text"
      >
        Вход
        <Image src={authImg} alt="auth" />
      </Link>
    </header>
  );
};
