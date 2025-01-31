import { FC } from 'react';

import { CardItem } from './slider-card';
import imageOne from '@/assets/1.png';
import imageTwo from '@/assets/2.png';
import imageThree from '@/assets/3.png';
import imageFour from '@/assets/4.png';
import imageFive from '@/assets/5.png';
import imageSix from '@/assets/6.png';
import useWindowSize from '@/app/hooks/useWindowSize';

export const CARDS = [
  {
    id: 1,
    title: 'Анализ текущего состояния карьеры',
    summary:
      'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
    imageName: imageOne,
  },
  {
    id: 2,
    title: 'Поиск работы',
    summary:
      'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
    imageName: imageTwo,
  },
  {
    id: 3,
    title: 'Сопроводительные письма и резюме',
    summary:
      'Определим вашу карьерную цель и разработаем стратегию для трудоустройства. ',
    imageName: imageThree,
  },
  {
    id: 4,
    title: 'Тренинг по презентации личного бренда',
    summary: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
    imageName: imageFour,
  },
  {
    id: 5,
    title: 'Подготовка к собеседованию',
    summary: 'Научим говорить о себе кратко, ярко и профессионально.',
    imageName: imageFive,
  },
  {
    id: 6,
    title: 'Рекомендация по базе STEMPS Career',
    summary: 'Поможем встретиться соискателю и работодателю. ',
    imageName: imageSix,
  },
];

interface SliderCardsListProps {
  currentPage: number;
}

export const SliderCardsList: FC<SliderCardsListProps> = ({ currentPage }) => {
  const { windowWidth } = useWindowSize();
  return (
    <ul className="flex gap-0 md:gap-4" id="ul">
      {CARDS.map((card, index) => (
        <li
          key={index}
          style={{
            transform:
              windowWidth < 768
                ? `translateX(-${(currentPage - 1) * 100}%)`
                : `translateX(0%)`,
          }}
          id={`li-${card.id}`}
          className={`md:snap-start snap-center flex-shrink-0 w-[358px] md:flex md:w-[412px] flex transition-transform duration-500 ease-in-out`}
        >
          <CardItem
            id={card.id}
            imageName={card.imageName}
            summary={card.summary}
            title={card.title}
          />
        </li>
      ))}
    </ul>
  );
};
