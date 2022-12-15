import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                {/* <Image 
                className='rounded-full'
                width={50}
                height={50}
                src=""
                alt='logo'
                /> */}
            </Link>
            <h1>Ricktroll Fam</h1>
        </div>

        <div className=''>
            <Link href="https://www.papareact.com/universityofcode"
            className="px-5 py-3 text-ms bg-gray-900 rounded-full text-[#F7AB0A] flex items-center  text-center">
            Sign up to the University of code
            </Link>
        </div>
    </header>
  )
}

export default header