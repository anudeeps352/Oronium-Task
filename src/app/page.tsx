import Contact from '@/components/ui/contact';
import Card from '@/components/ui/card';
import Cta from '@/components/ui/cta';
import HeroImage from '@/components/ui/heroImage';
export default function Home() {
  return (
    <div className="min-h-screen p-6 pb-20 flex flex-col gap-4">
      <div className="relative">
        <div className="w-[90vw] h-[90vh] relative rounded-[2.5rem] overflow-hidden">
          <HeroImage />
          <h2 className="absolute top-[12%] left-[20%] text-8xl text-wrap text-white max-w-xl">
            Explore the world with us
          </h2>
          <div className="pill rounded-3xl absolute top-[5%] left-[3%] border-2 border-white text-white py-0.5 font-medium px-2 md:py-1 md:px-4">
            lorem ipsum
          </div>
          <Contact />
          <div>
            <Cta />
          </div>
        </div>

        <Card
          title={
            'Explore our curated list of must-visit destinations around the globe'
          }
          footerContent={
            <>
              <h2>(FIRST)</h2>
              <h2>(PRESENT)</h2> <h2 className="text-gray-500">01</h2>
            </>
          }
        />
      </div>
      <div className="w-fit rounded-3xl text-white bg-black py-0.5 font-medium px-2 md:py-1 md:px-4">
        our value
      </div>
    </div>
  );
}
