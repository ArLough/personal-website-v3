import React from "react";
import Image from 'next/image';
import Typewriter from "typewriter-effect";

export default function Hero(){
    return (
        <section className="flex flex-col-reverse self-center justify-between h-auto ml-20 mr-20 overflow-hidden text-white lg:max-w-7xl lg:space-x-10 lg:flex-row">
            {/* Hero container div */}
            <div id="hero" className="flex flex-col justify-center flex-grow w-auto px-8 py-8 space-y-8 lg:w-1/5">
                {/* Left side */}
                <div className="flex flex-col space-y-8 ">
                <div className="text-4xl font-extrabold text-white md:text-6xl">
                    {/* Header */}
                   Aidan Loughney
                </div>
                <div className="text-3xl font-extrabold md:text-4xl">
                    {/* Description */}
                    <Typewriter 
                    onInit={(typewriter) => 
                    {typewriter.typeString('Software Engineer').callFunction(() => {console.log('String typed out!');}).start();}}
                    />
                </div>
                </div>
                
            </div>

          
                {/* Right side - image */}
                <Image width={500}
                height={500} className="self-center w-2/5 h-auto m-auto mb-10 shadow-2xl lg:mb-0 rounded-2xl shadow-secondary"
                src='/profile_pic.jpg'
                alt="profile picture"
                />
            
        </section>
    );
}