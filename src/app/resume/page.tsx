"use client";
import React from 'react';
import Link from 'next/link';
const ResumePage = () => {



  return (
    <div>
   <div className='pt-8 max-w-fit ml-10 '>
  <Link href="/" passHref className='hover:scale-105 transition-transform duration-300'>
    <div className="flex items-center space-x-2">
      {/* SVG (Back Arrow Icon) */}
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
      
      {/* Back Text */}
      <div className="text-white font-mono text-xl">
        /. back .\
      </div>
    </div>
  </Link>
</div>

    <section className="pt-8 flex flex-col items-center justify-center">
     
    <div className='animate-slideUp'>
     <a
        href="/Resume_Umendran_2024_Sep.pdf" // Ensure this path points to your actual PDF file
        download="Umendran_Resume.pdf"
        className="inline-block px-6 py-3 bg-slate-600 text-white font-mono font-bold rounded-md hover:bg-slate-700 transition duration-300"
      >
        Download Resume
      </a>
      </div>
      
      <div className="mb-8 w-full max-w-3xl pt-10 animate-slideUp">
        <iframe
          src="/Resume_Umendran_2024_Sep.pdf" // Replace with the path to your PDF
          className="w-full h-[720px] rounded-md   border-2 border-gray-300"
          title="My Resume"
        />
      </div>

      
 
    </section>
    </div>
  );
};

export default ResumePage;
