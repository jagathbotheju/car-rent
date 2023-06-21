import { Car, Filters } from "../../..";

export async function fetchCars(filters: Filters) {
  const headers = {
    "X-RapidAPI-Key": "2f26a4e74amsh3115d80eb5e8d51p18d62ajsnc013c9ab28a8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${filters.manufacturer}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`,
    { headers }
  );
  const result = await response.json();
  return result;
}

export const generateCarImageUrl = (car: Car, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "qajagathbothejucompany");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
