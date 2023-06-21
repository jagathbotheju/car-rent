"use client";

import { Combobox, Transition } from "@headlessui/react";
import { useState } from "react";
import { TbBrandVolkswagen } from "react-icons/tb";
import { Fragment } from "react";
import { manufacturers } from "@/data/constants";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer = ({ manufacturer, setManufacturer }: Props) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  console.log(`query ${query}`, manufacturer);

  return (
    <div className="w-full">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative mt-1">
          <Combobox.Button className="absolute top-[5px] left-1">
            <TbBrandVolkswagen size={23} className="text-gray-500" />
          </Combobox.Button>
          {/* <div className="flex relative w-full cursor-default overflow-hidden text-left  outline-none sm:text-sm"> */}
          <Combobox.Input
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 p-2 border outline-none cursor-pointer text-sm bg-gray-200"
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="mt-2 max-h-96 w-full overflow-auto">
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  className={({ active }) =>
                    `relative ${
                      active
                        ? "bg-blue-500 text-white cursor-pointer"
                        : "text-gray-900"
                    }`
                  }
                  value={item}
                  key={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
          {/* </div> */}
          {(query || manufacturer) && (
            <AiOutlineCloseCircle
              onClick={() => {
                setManufacturer("");
                setQuery("");
              }}
              className="top-2 right-2 absolute cursor-pointer"
            />
          )}
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
