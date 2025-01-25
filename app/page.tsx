import { Hero, CustomFilter, CarCard, SearchBar, ShowMore } from "@/components";
import Image from "next/image";
// import SearchBar from "@/components/SearchBar";
// import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
// import CarCard from "@/components/CarCard";
// import { SearchParams } from "next/dist/server/request/search-params";

export default async function Home( { searchParams }: HomeProps ) {

  // Testing out the api call to fetch cars
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  // console.log(allCars);

  // see if cars is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
  <main className="overflow-hidden">
    <Hero />

    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">
          Car Catalogue
        </h1>
        <p>
          Search for a car here!
        </p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />

        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (<CarCard car={car} />))}
          </div>

          <ShowMore
          pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) > allCars.length} 
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">
            No Cars Found!
          </h2>
          <p>
            {allCars?.message || "Try a different search!"}
          </p>
        </div>
      )
    }



    </div>
  </main>
  );
}
