"use client";

import { useRouter } from "next/navigation";

const RentalFormButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/rent_car");
  };

  return (
    <button
      className="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold flex items-center justify-center gap-2"
      onClick={handleClick}
    >
      Rent Car
      <img src="/right-arrow.svg" alt="Right Arrow" />
    </button>
  );
};

export default RentalFormButton;
