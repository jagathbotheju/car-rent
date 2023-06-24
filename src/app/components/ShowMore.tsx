"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { manufacturers } from "@/data/constants";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const manufacturer = searchParams.get("manufacturer");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const fuel = searchParams.get("fuel");

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const url = `?manufacturer=${manufacturer}&model=${model}&year=${year}&fuel=${fuel}&limit=${newLimit}`;
    router.push(url);
  };

  return (
    <div className="w-full flex-center gap-5 my-5">
      {isNext && (
        <Button
          title="Show More"
          type="button"
          styles="bg-blue-500 rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
