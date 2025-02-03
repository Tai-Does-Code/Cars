"use client";

import { useState, useEffect } from "react";
import { Hero, CustomFilter, CarCard, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

const CarCatalogue = () => {
  const [cars, setCars] = useState([]); // Cars data state
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars(); // Fetch car data from the API
        setCars(data || []); // Update state with the fetched cars
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch car data.");
        setIsLoading(false);
      }
    };

    getCars();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-12 padding-x padding-y max-width text-center">
        <h1 className="text-4xl font-extrabold">Loading Cars...</h1>
      </div>
    );
  }

  if (error || cars.length === 0) {
    return (
      <div className="mt-12 padding-x padding-y max-width text-center">
        <h1 className="text-4xl font-extrabold">No Cars Found!</h1>
        <p>{error || "Try refreshing the page or check the API."}</p>
      </div>
    );
  }

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Search for a car here!</p>
      </div>

      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      <section>
        <div className="home__cars-wrapper">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <ShowMore pageNumber={1} isNext={false} />
      </section>
    </div>
  );
};

export default CarCatalogue;