import Image from "next/image";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import { fetchCars } from "./actions/fetchCars";
import { Car, FilterOptions, Filters } from "../..";
import CarCard from "./components/CarCard";
import SearchFilters from "./components/SearchFilters";
import ShowMore from "./components/ShowMore";

interface Props {
  searchParams: Filters;
}

export default async function Home({ searchParams }: Props) {
  const allCars: Car[] = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isCarsEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const setSearchOptions = (option: FilterOptions) => {};

  return (
    <main className="overflow-hidden flex flex-col">
      <Hero />

      <div className="mt-12 container px-10" id="discover flex flex-col">
        <h1 className="font-semibold text-2xl">Car Catalogue</h1>
        <p className="text-gray-500">Explore the cars you might like</p>

        <div className="flex flex-col md:flex-row mt-5 justify-between w-full h-fit">
          <SearchBar />
          <SearchFilters />
        </div>

        {/* cars list */}
        {!isCarsEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 mb-5">
              {allCars.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="text-2xl font-bold p-10 text-center bg-red-200 my-5 rounded-md">
            <h2>No Cars Found</h2>
          </div>
        )}
      </div>
    </main>
  );
}
