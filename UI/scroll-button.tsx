import { FC, ReactNode } from 'react';

interface ScrollButtonProps {
  direction: string;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ScrollButton: FC<ScrollButtonProps> = ({
  direction,
  children,
  ...props
}) => {
  return (
    <>
      <div
        className={`relative z-[1] flex w-0 items-center justify-center border-0 bg-none p-0 text-center hover:scale-110 active:scale-125 transition-all ${direction}-5`}
      >
        <button {...props}>
          <span>{children}</span>
        </button>
      </div>
    </>
  );
};
