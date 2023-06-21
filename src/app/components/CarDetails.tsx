"use client";
import { Dispatch, Fragment, SetStateAction } from "react";
import { Car } from "../../..";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { generateCarImageUrl } from "../actions/fetchCars";

interface Props {
  openModel: boolean;
  closeModel: () => void;
  car: Car;
}

const CarDetails = ({ openModel, closeModel, car }: Props) => {
  return (
    <Transition appear show={openModel} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <AiOutlineCloseCircle
                    className="absolute top-2 right-2 cursor-pointer"
                    size={20}
                    onClick={closeModel}
                  />

                  <div className="w-full h-44 relative my-3 rounded-lg">
                    <Image
                      fill
                      alt="car"
                      src={generateCarImageUrl(car)}
                      className="top-0 left-0 relative h-full w-full object-contain"
                    />
                  </div>

                  {/* car views */}
                  <div className="flex">
                    <div className="flex items-center relative w-full bg-blue-100 rounded-lg my-2">
                      <div className="w-full h-40 relative">
                        <Image
                          fill
                          alt="car"
                          src={generateCarImageUrl(car, "29")}
                          className="top-0 left-0 relative h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex items-center relative w-full bg-blue-100 rounded-lg mx-2 my-2">
                      <div className="w-full h-40 relative">
                        <Image
                          fill
                          alt="car"
                          src={generateCarImageUrl(car, "33")}
                          className="top-0 left-0 relative h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex items-center relative w-full bg-blue-100 rounded-lg my-2">
                      <div className="w-full h-40 relative">
                        <Image
                          fill
                          alt="car"
                          src={generateCarImageUrl(car, "13")}
                          className="top-0 left-0 relative h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* details */}
                <div className="flex flex-col">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between w-full text-right"
                        key={key}
                      >
                        <h4 className="text-gray capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
