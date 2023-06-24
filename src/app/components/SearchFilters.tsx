"use client";
import { fuels, yearsOfProduction } from "@/data/constants";
import Filter from "./Filter";
import { FilterOptions } from "../../..";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

interface Props {
  title: string;
  value: string;
}

const SearchFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [fuel, setFuel] = useState("gas");
  const [year, setYear] = useState("2023");

  const setSearchFilters = (searchFilter: Props) => {
    const manufacturer = searchParams.get("manufacturer") || "toyota";
    console.log(manufacturer);
    if (!manufacturer) return toast.error("Please select Manufacturer");
    const model = searchParams.get("model") || "camry";
    if (!model) return toast.error("Please select Model");

    if (searchFilter.title === "fuel") {
      setFuel(searchFilter.value);
    }
    if (searchFilter.title === "year") {
      setYear(searchFilter.value);
    }

    if (!searchFilter.value) setFuel("");
    if (!searchFilter.value) setYear("");

    const url = `?manufacturer=${manufacturer}&model=${model}&year=${year}&fuel=${fuel}`;
    router.push(url);
  };

  return (
    <div className="flex gap-x-5 mt-4 md:mt-0">
      <Filter
        title="fuel"
        options={fuels}
        setSearchFilters={setSearchFilters}
      />
      <Filter
        title="year"
        options={yearsOfProduction}
        setSearchFilters={setSearchFilters}
      />
    </div>
  );
};

export default SearchFilters;
