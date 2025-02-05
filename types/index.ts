import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

// export interface CarParts {
//     id: number;
//     make: string;
//     model: string;
//     year: number;
//     color: string;
//     mileage: number;
//     price: number;
//     fuelType: string;
//     transmission: string;
//     engine: string;
//     horsepower: number;
//     features: string[];
//     owners: number;
//     image: string;
//   }

export interface CarParts {
    id: string; // UUID from Prisma
    make: string;
    model: string;
    year: number;
    mileage: number;
    price: number;
    fuelType: string;
    transmission: string;
  }

export interface FilterProps{
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
  }

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
