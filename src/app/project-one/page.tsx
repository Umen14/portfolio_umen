"use client";
import Link from "next/link";
import ProjectCarousel from '@/components/Slider/page';
import Image from "next/image";

export default function ProjectOne() {

    return (
        <div className="h-screen flex flex-col">
            <div className='pt-8 max-w-fit ml-10 '>
                <Link href="/projects" passHref className='hover:scale-105 transition-transform duration-300'>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                            />
                        </svg>
                        <div className="text-white font-mono text-xl">/. back .\</div>
                    </div>
                </Link>
            </div>

            <div className="animate-trackingInContractBck">
                <section className="text-center pt-8">
                    <h1 className="text-5xl font-bold font-mono flex items-center justify-center">
                        <svg className="w-[34px] h-[34px] mr-1 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                        Admin Dashboard System
                        <svg className="w-[34px] h-[34px] ml-1 mt-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                    </h1>
                </section>


            </div>
            <div className="flex items-center justify-between w-full mt-8 px-10 text-white">
                {/* Left - Image */}
                <div className="animate-tiltIn">
                    <Image
                        src="/images/SMFD.png"
                        width={700}
                        height={800}
                        alt="Admin Dashboard Preview"
                        className="rounded-lg shadow-md animate-tiltIn"
                    />
                </div>

                {/* Right - Text */}
                <div className="w-1/2 text-center animate-slideUp">
                    <h2 className="text-2xl font-bold">A way to deliver the best for the clients</h2>
                    <p className="mt-2 text-lg">This is an admin dashboard system designed for efficient data management where it reflects back to the mobile version where it can be downloaded in the App store and the Google Play store</p>
                </div>

            </div>

<div className="flex flex-col md:flex-row items-center justify-between w-full mt-8 px-6 md:px-10 text-white">

    {/* Text Section */}
    <div className="text-center animate-slideUp w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold">The purpose of the development</h2>
        <p className="mt-2 text-base md:text-lg">
            This is an admin dashboard system designed for efficient data management where it reflects back to the 
            mobile version where it can be downloaded in the App Store and Google Play Store.
        </p>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 animate-tiltIn">
        <Image
            src="/images/SMFD.png"
            width={700} // Reduce size for smaller screens
            height={600}
            alt="Admin Dashboard Preview"
            className="rounded-lg shadow-md w-[80%] md:w-[60%] lg:w-[50%]"
        />
    </div>

</div>


            <div className=" items-center grid-cols-2 w-full mt-8 px-10 text-white">
            <div className="animate-tiltIn flex item-center justify-center">
                    <Image
                        src="/images/SMFD.png"
                        width={700}
                        height={800}
                        alt="Admin Dashboard Preview"
                        className="rounded-lg shadow-md animate-tiltIn"
                    />
                </div>
                <div className="pt-10 mx-auto w-fit text-center  animate-slideUp">
                    <h2 className="text-2xl font-bold">The purpose of the development</h2>
                    <p className="mt-2 text-lg">This is an admin dashboard system designed for efficient data management where it reflects back to the mobile version where it can be downloaded in the App store and the Google Play store</p>
                </div>

           

            </div>
        </div>
    );
}
