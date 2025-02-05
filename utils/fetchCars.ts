export const fetchCars = async (): Promise<typeof cars> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cars), 500); // Simulating an API delay
  });
};

const cars = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    mileage: 15000,
    price: 25000,
    fuelType: "Gasoline",
    transmission: "Auto",
  },
  {
    id: "2",
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    mileage: 20000,
    price: 20000,
    fuelType: "Gasoline",
    transmission: "Auto",
  },
  {
    id: "3",
    make: "Honda",
    model: "Civic",
    year: 2023,
    mileage: 5000,
    price: 27000,
    fuelType: "Gasoline",
    transmission: "Auto",
  },
  {
    id: "4",
    make: "Honda",
    model: "Accord",
    year: 2022,
    mileage: 12000,
    price: 32000,
    fuelType: "Hybrid",
    transmission: "Auto",
  },
  {
    id: "5",
    make: "Ford",
    model: "Mustang",
    year: 2023,
    mileage: 8000,
    price: 45000,
    fuelType: "Gasoline",
    transmission: "Manual",
  },
  {
    id: "6",
    make: "Ford",
    model: "Explorer",
    year: 2021,
    mileage: 30000,
    price: 35000,
    fuelType: "Gasoline",
    transmission: "Auto",
  },
];