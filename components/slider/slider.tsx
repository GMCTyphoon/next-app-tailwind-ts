'use client';

import { FC, useState } from 'react';

import { Pangination } from './pangination';
import { ScrollButton } from '../../UI/scroll-button';
import useWindowSize from '@/hooks/useWindowSize';
import { cards, SliderCardsList } from './slider-cards-list';

export const Slider: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = cards.length;
  const { windowWidth } = useWindowSize();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleScroll = (direction: string) => {
    if (windowWidth >= 768) {
      const sliderEl = document.getElementById('slider');
      const cardEl = document.getElementById(`card-1`);
      const elWidth = cardEl!.getBoundingClientRect().width;

      sliderEl!.scrollBy({
        top: 0,
        left: direction === 'right' ? +elWidth : -elWidth,
        behavior: 'smooth',
      });
    } else {
      if (direction === 'right') {
        setCurrentPage((prev) => {
          if (prev < totalPages) {
            return prev + 1;
          } else {
            return 1;
          }
        });
      } else {
        setCurrentPage((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            return totalPages;
          }
        });
      }
    }
  };

  return (
    <>
      <Pangination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className="flex p-4 justify-center md:justify-start w-auto">
        <ScrollButton
          direction="left"
          onClick={() => {
            handleScroll('left');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </ScrollButton>
        <div
          className="flex md:overflow-x-auto overflow-hidden snap-x no-scrollbar w-[358px] md:w-auto"
          id="slider"
        >
          <SliderCardsList currentPage={currentPage} />
        </div>
        <ScrollButton direction="right" onClick={() => handleScroll('right')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </ScrollButton>
      </div>
    </>
  );
};
