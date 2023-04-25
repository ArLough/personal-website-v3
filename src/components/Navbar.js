import React from "react"

export default function Navbar(){
    return (
        <nav className="font-bold text-white shadow-xl bg-primary">
            <div className='mx-auto border rounded max-w-8xl'>
                <div className='flex justify-between'>
                    <div className='flex px-5 py-2 space-x-5'>
                    {/* right nav */}
                    <div>
                        <a href="#" className='flex items-center hover:text-hover'>
                        <svg className="mr-3 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                            Aidan Loughney
                        </span>
                        </a>
                    </div>
                    <div className='flex items-center space-x-5 '>
                        <a href="#" className='px-3 py-2 hover:text-hover'>
                            About Me
                        </a>
                        <a href="#" className='px-3 py-2 hover:text-hover'>
                            Projects
                        </a>
                    </div>
                </div>
                
                {/* left nav */}
                <div className='flex items-center'>
                    <a href="#" className='px-5 py-2 hover:text-hover'>
                        Contact
                    </a>
                </div>
                </div>
            </div>
        </nav>
    )
}