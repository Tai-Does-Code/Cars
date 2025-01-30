"use client";
import React, { useEffect, useState } from 'react';
import { CarParts } from '@/types';
import CarCard from '../../components/CarCard';
import { fetchCars } from '@/utils';

const ExploreCars = () => {
  const [cars, setCars] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars(); 
        setCars(data || []); 
        setIsLoading(false); 
      } catch (err) {
        setError("Failed to fetch car data.");
        setIsLoading(false);
      }
    };

    getCars(); 
  }, []); 

  return (
    <div className='explore-cars-container'>
      <h1 className='text-center text-2xl font-bold mb-6'>Explore Cars</h1>

      <div className='car-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p>Loading cars...</p>
        )}
      </div>
    </div>
  );
};

export default ExploreCars;
