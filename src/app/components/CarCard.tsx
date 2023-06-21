"use client";
import { calculateCarRent } from "@/utils/calculateCarRent";
import { Car } from "../../..";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import CarDetails from "./CarDetails";
import { generateCarImageUrl } from "../actions/fetchCars";

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [openModel, setOpenModel] = useState(false);

  return (
    <div
      onClick={() => setOpenModel(true)}
      className="flex flex-col p-6 justify-center items-start text-black-100 hover:bg-blue-100 shadow-md rounded-3xl group cursor-pointer"
    >
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="font-bold capitalize text-xl text-neutral-800">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-2xl font-extrabold">
        <span className="self-start text-lg font-semibold">$</span>
        {carRent}
        <span className="self-end text-lg font-semibold">/day</span>
      </p>

      {/* image */}
      <div className="w-full h-40 relative my-3">
        <Image
          fill
          alt="car"
          src={generateCarImageUrl(car)}
          className="top-0 left-0 relative h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-row justify-between w-full gap-4">
        {/* transmission */}

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/steering-wheel.svg"
            alt="steering wheel"
            width={20}
            height={20}
          />
          <p>{car.transmission === "a" ? "Automatic" : "Manual"}</p>
        </div>

        {/* tire */}
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/tire.svg" alt="tire" width={20} height={20} />
          <p>{car.drive.toUpperCase()}</p>
        </div>

        {/* stearing wheel */}
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/gas.svg" alt="gas" width={20} height={20} />
          <p>{car.city_mpg} MPG</p>
        </div>
      </div>

      {/* car details model */}
      <CarDetails
        openModel={openModel}
        closeModel={() => setOpenModel(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
