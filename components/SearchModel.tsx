"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SearchModel = ({ model, setModel }: { model: string; setModel: (model: string) => void }) => {
  const [inputValue, setInputValue] = useState(model || ""); // Initialize with empty string if model is undefined

  useEffect(() => {
    setInputValue(model || ""); // Update the input value when the prop changes
  }, [model]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setModel(e.target.value);
  };

  return (
    <div className="searchbar__item relative">
      <Image
        src="/model-icon.png"
        width={25}
        height={25}
        className="absolute w-[20px] h-[20px] ml-4"
        alt="car model"
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Car model"
        className="searchbar__input pl-10"
      />
    </div>
  );
};

export default SearchModel;