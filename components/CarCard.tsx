"use client";
import { useState } from "react";
import Image from "next/image";
import { CarParts } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";
import { generateCarImageUrl } from "@/utils";

interface CarCardProps {
  car: CarParts;
}

const CarCard = ({ car }: CarCardProps) => {
  const { make, model, year, mileage, transmission } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(mileage, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        {carRent}
        <span className="self-start text-[14px] leading-[17px] font-semibold">/day</span>
      </p>

      <div className="relative w-full h-40 my-3">
        <Image src={generateCarImageUrl(car)} alt={`${make} ${model}`} fill priority className="object-contain rounded-lg" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="Steering Wheel" />
            <p className="text-[14px] leading-[17px]">{transmission === "Auto" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="Tire" />
            <p className="text-[14px] leading-[17px]">{model.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Gas" />
            <p className="text-[14px] leading-[17px]">{mileage} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModel={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
