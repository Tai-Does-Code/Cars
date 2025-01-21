"use client";
import { SearchManufacturerProps } from '../types'
import {Combobox, ComboboxOption, Transition} from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import {manufacturers} from '../constants'
import React from 'react'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ));



  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image src="/car-lego.svg" width={20} height={20} className="m1-4" alt="car logo" />
                </Combobox.Button>

                <Combobox.Input className="search-manufacturer__input" placeholder="volkswagen" displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)} />
            </div>
        </Combobox>


        <Combobox>
        <Transition as={Fragment} show={filteredManufacturers.length > 0} leave="transition ease-in-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
            <Combobox.Options>
                {filteredManufacturers.map((item) => (
                        <Combobox.Option key={item} value={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900' } `}>
                            {item}
                        </Combobox.Option>
                    )
                )}

            </Combobox.Options>
        </Transition> 
        </Combobox>
    </div>
  )
}

export default SearchManufacturer