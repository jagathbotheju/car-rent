"use client";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="flex flex-col md:flex-row mx-auto w-full container px-5">
      <div className="pt-36 max-w-md">
        <h1 className="font-extrabold text-4xl">
          Find, Book, Rent a Car -- quickly and easily!
        </h1>
        <p>
          Streamline your car rental experience with our effortless booking
          process
        </p>

        <Button
          type="button"
          disabled={false}
          title="Explore Cars"
          styles="bg-blue-500 text-white rounded-full mt-10"
          onClick={handleScroll}
        />
      </div>

      <div className="w-full relative mt-32 h-[400px]">
        <Image
          alt="hero"
          src="/images/hero.png"
          className="top-0 left-0 w-full h-full relative object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;
