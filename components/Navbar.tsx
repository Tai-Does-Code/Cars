import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center item-center'>
                <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className='object-contain' />
            </Link>

            <Link href="/sign_up">
            <CustomButton 
            title="Sign Up"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
            </Link>
            
            <Link href="/sign_in">
            <CustomButton 
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar