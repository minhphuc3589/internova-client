import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  return (
        <section className="relative w-full flex justify-center items-center">
          <div className="relative w-full max-w-6xl h-96 shadow-xl rounded-2xl">
            <Image
              src="/assets/pictures/technology.png"
              alt="Technology hero"
              fill
              className="object-center object-fit rounded-2xl"
              priority
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 to-transparent rounded-2xl" />

            <div className="absolute inset-0 z-10 flex justify-center items-center rounded-2xl">
              <div className="w-full text-center flex justify-center items-center flex-col text-white">
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  Discover the Technology Collection
                </h1>
                <p className="mt-4 text-md text-white/90">
                  The newest and most modern in the world. Explore our latest arrivals and find your perfect
                  tech match.
                </p>
                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg shadow-md"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default HeroSection;