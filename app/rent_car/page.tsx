"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const rentCar = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  const handleConfirm = () => {
    alert(`Rental confirmed from ${pickupDate} to ${dropoffDate}`);
  };

  const handleCancel = () => {
    setPickupDate('');
    setDropoffDate('');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center mb-4'>RENTAL FORM</h1>

        <div className='mb-4'>
          <label className='block text-gray-700 mb-1'>Pick Up Date</label>
          <input
            type='date'
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 mb-1'>Drop Off Date</label>
          <input
            type='date'
            value={dropoffDate}
            onChange={(e) => setDropoffDate(e.target.value)}
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex justify-between mt-4'>
          <button
            onClick={handleConfirm}
            className='bg-primary-blue text-white px-4 py-2 rounded'
          >
            Confirm Rental
          </button>

          <Link href="/" >
          <button
            onClick={handleCancel}
            className='bg-gray-400 text-white px-4 py-2 rounded'
          >
            Cancel
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default rentCar;