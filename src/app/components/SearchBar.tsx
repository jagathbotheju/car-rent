"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TbBrandVolkswagen } from "react-icons/tb";

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const updateSearchParams = (model: string, manufacturer: string) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!manufacturer) return toast.error("Please select Manufacturer");
    if (!model) return toast.error("Please select Model");
    router.push(`?manufacturer=${manufacturer}&model=${model}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 md:items-center items-start w-full max-w-3xl"
    >
      {/* Search Manufacturer */}
      <div className="flex-1 md:w-full flex justify-start relative px-1 rounded-md gap-x-1 bg-gray-200">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>

      {/* Search Model */}
      <div className="flex-1 md:w-full flex justify-start items-center relative bg-gray-200 p-1 rounded-md gap-x-1">
        <div className="w-[20px] h-[20px] relative">
          <Image
            src="/images/model-icon.png"
            //width={25}
            //height={25}
            fill
            className="relative top-0 left-0 w-full h-full object-contain"
            alt="model icon"
          />
        </div>
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="flex-1 sm:w-full bg-gray-200 p-1 outline-none"
        />
      </div>

      {/* search button */}
      <button
        type="submit"
        className="flex items-center gap-x-1 bg-blue-300 py-2 px-4 rounded-md"
      >
        Search
        <BiSearchAlt />
      </button>
    </form>
  );
};

export default SearchBar;
