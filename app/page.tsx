import { Slider } from '@/components/slider/slider';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="flex p-4 justify-between text-[#A59DFF] text-[40px] ring-1">
          <span>1.0</span>
          <span>Наши услуги</span>
          <span></span>
        </h1>
      </header>
      <main>
        <Slider />
      </main>
    </>
  );
}
