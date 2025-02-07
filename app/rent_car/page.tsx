"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/auth"; // Import your authentication handler
import { db } from "@/lib/db"; // Import database connection

const RentalForm = ({ params }: { params: { carId: string } }) => {
  const router = useRouter();
  const [car, setCar] = useState(null);
  const [user, setUser] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  useEffect(() => {
    // Fetch authenticated user
    const fetchUser = async () => {
      const session = await auth();
      if (!session?.user) {
        router.push("/login"); // Redirect if not logged in
        return;
      }
      setUser(session.user);
    };

    // Fetch car data
    const fetchCar = async () => {
      const res = await fetch(`/api/cars/${params.carId}`);
      const data = await res.json();
      setCar(data);
    };

    fetchUser();
    fetchCar();
  }, [params.carId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pickupDate || !dropoffDate) {
      alert("Please select both pickup and dropoff dates.");
      return;
    }

    const response = await fetch("/api/rentals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        carId: params.carId,
        pickupDate,
        dropoffDate,
      }),
    });

    if (response.ok) {
      router.push("/rentals"); // Redirect to user's rentals page
    } else {
      alert("Error booking car. Try again.");
    }
  };

  if (!car || !user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Rent {car.modelName}</h1>
      <p>Year: {car.year}, Fuel: {car.fuelType}, Price: ${car.price}/day</p>
      <form onSubmit={handleSubmit}>
        <label>Pickup Date:</label>
        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />

        <label>Dropoff Date:</label>
        <input type="date" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} required />

        <button type="submit">Confirm Rental</button>
      </form>
    </div>
  );
};

export default RentalForm;

// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';

// const rentCar = () => {
//   const [pickupDate, setPickupDate] = useState('');
//   const [dropoffDate, setDropoffDate] = useState('');

//   const handleConfirm = () => {
//     alert(`Rental confirmed from ${pickupDate} to ${dropoffDate}`);
//   };

//   const handleCancel = () => {
//     setPickupDate('');
//     setDropoffDate('');
//   };

//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
//       <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
//         <h1 className='text-2xl font-bold text-center mb-4'>RENTAL FORM</h1>

//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-1'>Pick Up Date</label>
//           <input
//             type='date'
//             value={pickupDate}
//             onChange={(e) => setPickupDate(e.target.value)}
//             className='w-full p-2 border rounded'
//           />
//         </div>

//         <div className='mb-4'>
//           <label className='block text-gray-700 mb-1'>Drop Off Date</label>
//           <input
//             type='date'
//             value={dropoffDate}
//             onChange={(e) => setDropoffDate(e.target.value)}
//             className='w-full p-2 border rounded'
//           />
//         </div>

//         <div className='flex justify-between mt-4'>
//           <button
//             onClick={handleConfirm}
//             className='bg-primary-blue text-white px-4 py-2 rounded'
//           >
//             Confirm Rental
//           </button>

//           <Link href="/" >
//           <button
//             onClick={handleCancel}
//             className='bg-gray-400 text-white px-4 py-2 rounded'
//           >
//             Cancel
//           </button>
//           </Link>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default rentCar;