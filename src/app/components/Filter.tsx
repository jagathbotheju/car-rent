"use client";
import { Listbox, Transition } from "@headlessui/react";
import { FilterOptions } from "../../..";
import { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import { Fragment } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

interface Props {
  title: string;
  options: FilterOptions[];
  setSearchFilters: (searchFilter: FilterOptions) => void;
}

const Filter = ({ title, options, setSearchFilters }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(options[0]);

  const updateSearchParams = (e: { title: string; value: string }) => {
    console.log(e.value, title);

    const year =
      (title.toLocaleLowerCase() === "year" && selected.value) ||
      searchParams.get("year");
    const fuel =
      (title.toLocaleLowerCase() === "fuel" && selected.value) ||
      searchParams.get("fuel");

    //console.log(year, fuel);

    //router.push(`?fuel=${selected.title}&year=${selected.value}`);
  };

  return (
    <div className="w-36">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setSearchFilters({
            title,
            value: e.value,
          });
        }}
      >
        <div className="relative w-full z-10">
          <Listbox.Button className="w-full overflow-auto rounded-md px-4 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm flex justify-between items-center">
            <span>{selected.title}</span>
            <LuChevronsUpDown />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm bg-white">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative select-none px-4 py-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;
