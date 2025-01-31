export const metadata = {
    title: 'About us',
    description: 'Description about us',
  };

export default function AboutPage() {
  return (
    <>
      <header className="flex justify-center p-8 pb-2 font-customFont">
        <h1>About Us</h1>
      </header>
      <main className="p-8">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          vero ad ipsa, reprehenderit possimus qui delectus minima modi error
          rem, mollitia officiis! Repellat ullam maxime natus excepturi,
          architecto tenetur tempora.
        </p>
      </main>
    </>
  );
}
