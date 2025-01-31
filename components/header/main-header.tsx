'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import logoImg from '@/assets/logo.png';
import authImg from '@/assets/authImg.png';
import { NavLink } from './nav-link';
import useWindowSize from '@/app/hooks/useWindowSize';

export const MainHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { windowWidth } = useWindowSize();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="flex justify-between items-center p-4 border-b border-[#E1E1E1]">
      <Link
        href="/"
        className="flex items-center justify-center gap-4 no-underline hover:[text-shadow:_0_0_18px_rgba(32_12_141_/_0.8)] bg-clip-text"
      >
        <Image src={logoImg} alt="Logo" />
        {!(windowWidth < 768) ? 'STEMPS' : ''}
      </Link>
      <nav>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none  text-[#F3F3F3] px-2 py-1 rounded bg-[#121212]"
        >
          Меню
        </button>
        <ul
          className={`${
            isMenuOpen ? 'w-32 h-28 overflow-clip' : 'w-32 h-0 overflow-hidden'
          } md:flex list-none m-0 p-0 gap-2 flex-col md:flex-row absolute md:relative transition-all duration-1000 md:w-auto md:h-auto justify-items-end bg-white right-[6px] rounded-lg`}
        >
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
        className="md:flex items-center justify-center gap-4 no-underline hover:[text-shadow:_0_0_18px_rgba(32_12_141_/_0.8)] bg-clip-text hidden"
      >
        Вход
        <Image src={authImg} alt="auth" />
      </Link>
    </header>
  );
};
