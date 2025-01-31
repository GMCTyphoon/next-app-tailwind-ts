import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

export type CardItemProps = {
  title: string;
  imageName: StaticImageData;
  summary: string;
  id: number;
};

export const CardItem: FC<CardItemProps> = ({
  title,
  imageName,
  summary,
  id,
}) => {
  return (
    <>
      <div
        id={`card-${id}`}
        className="md:grid grid p-6 m-0 min-w-[358px] min-h-[212px] bg-[#F0F0F0] border-gray-200 rounded-lg shadow-sm light:bg-gray-800 light:border-gray-700 md:min-w-[412px] md:min-h-64"
      >
        <div className="flex md:grid">
          <div className="md:max-w-20 md:max-h-20 max-w-[60px] max-h-[60px]">
            <Image src={imageName} alt={summary} />
          </div>
          <div className="ml-6 md:m-0 md:self-end p-0">
            <h5 className="p-0 m-0 md:text-[32px] text-2xl text-[#151515] tracking-tight ligth:text-white leading-[30px]">
              {title}
            </h5>
          </div>
        </div>
        <p className="md:hidden text-sm self-end">{summary}</p>
      </div>
    </>
  );
};
