'use client';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface ScrollButtonProps {
  direction: string;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ScrollButton: FC<PropsWithChildren<ScrollButtonProps>> = ({
  direction,
  children,
  ...props
}) => {
  let buttonClasses =
    'relative z-[1] flex w-0 items-center justify-center border-0 bg-none p-0 text-center hover:scale-125 active:scale-110';
  if (direction === 'right') {
    buttonClasses += ' right-5';
  } else {
    buttonClasses += ' left-5';
  }

  return (
    <button {...props} className={buttonClasses}>
      <span>{children}</span>
    </button>
  );
};
