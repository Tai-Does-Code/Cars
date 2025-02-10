"use client";

import { useState, useEffect } from "react";
import { Hero, CustomFilter, CarCard, SearchManufacturer, ShowMore, SearchBar } from "@/components";
import { fetchCars } from "@/utils/fetchCars";
import { fuels, yearsOfProduction } from "@/constants";

const CarCatalogue = () => {
  const [cars, setCars] = useState([]); // Cars data state
  const [filteredCars, setFilteredCars] = useState([]); // Filtered cars data state
  const [manufacturer, setManufacturer] = useState(""); // Manufacturer filter state
  const [error, setError] = useState<string | null>(null); // Error state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
        setFilteredCars(data); 
      } catch {
        setError("Failed to fetch car data.");
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  useEffect(() => {
    if (manufacturer) {
      setFilteredCars(cars.filter((car) => car.make.toLowerCase() === manufacturer.toLowerCase()));
    } else {
      setFilteredCars(cars); 
    }
  }, [manufacturer, cars]);

  if (loading) {
    return (
      <div className="mt-12 padding-x padding-y max-width text-center">
        <h1 className="text-4xl font-extrabold">Loading...</h1>
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
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {/* No cars or error message */}
      {error || filteredCars.length === 0 ? (
        <div className="mt-12 padding-x padding-y max-width text-center">
          <h1 className="text-4xl font-extrabold">No Cars Found!</h1>
          <p>{error || "Try refreshing the page or check the data source."}</p>
        </div>
      ) : (
        <section>
          <div className="home__cars-wrapper">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <ShowMore pageNumber={1} isNext={false} />
        </section>
      )}
    </div>
  );
};

export default CarCatalogue;

// "use client";
// import { useState, useEffect } from "react";
// import { Hero, CustomFilter, CarCard, SearchBar, ShowMore } from "@/components";
// import { fetchCars } from "@/utils/fetchCars";
// import { fuels, yearsOfProduction } from "@/constants";

// const CarCatalogue = () => {
//   const [cars, setCars] = useState([]); // Cars data state
//   const [error, setError] = useState<string | null>(null); // Error state
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const getCars = async () => {
//       try {
//         const data = await fetchCars();
//         setCars(data);
//       } catch {
//         setError("Failed to fetch car data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getCars();
//   }, []);

//   if (loading) {
//     return (
//       <div className="mt-12 padding-x padding-y max-width text-center">
//         <h1 className="text-4xl font-extrabold">Loading...</h1>
//       </div>
//     );
//   }

//   if (error || cars.length === 0) {
//     return (
//       <div className="mt-12 padding-x padding-y max-width text-center">
//         <h1 className="text-4xl font-extrabold">No Cars Found!</h1>
//         <p>{error || "Try refreshing the page or check the data source."}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-12 padding-x padding-y max-width" id="discover">
//       <div className="home__text-container">
//         <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
//         <p>Search for a car here!</p>
//       </div>

//       <div className="home__filters">
//         <SearchBar />
//         <div className="home__filter-container">
//           <CustomFilter title="fuel" options={fuels} />
//           <CustomFilter title="year" options={yearsOfProduction} />
//         </div>
//       </div>

//       <section>
//         <div className="home__cars-wrapper">
//           {cars.map((car) => (
//             <CarCard key={car.id} car={car} />
//           ))}
//         </div>

//         <ShowMore pageNumber={1} isNext={false} />
//       </section>
//     </div>
//   );
// };

// export default CarCatalogue;