import { Slider } from '@/components/slider/slider';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="md:flex grid p-4 md:justify-between justify-items-start text-[#8977F3] md:text-[40px] text-[26px] md:border-b md:border-[#D1D1D1]">
          <span className="w-full border-b border-[#D1D1D1] md:w-auto md:border-none">
            1.0
          </span>
          <span>Наши услуги</span>
          <span className="md:block hidden"></span>
        </h1>
      </header>
      <main>
        <Slider />
      </main>
    </>
  );
}
