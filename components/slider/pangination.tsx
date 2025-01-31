import { FC } from 'react';

interface PanginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pangination: FC<PanginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center p-4 space-x-2 md:hidden">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-2 rounded-full flex items-center justify-center text-transparent transition-all bg-[#CCCCCC] ${
            currentPage === page
              ? ` w-10 relative  rounded-full before:content-[''] before:absolute before:w-5 before:h-2 before:bg-[#1C1C1C] before:rounded-full before:left-0`
              : 'w-2'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
