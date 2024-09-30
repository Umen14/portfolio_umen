"use client";
import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Typewriter from './components/Typewriter';


// Custom button component
const CustomButton: React.FC<{ text: string }> = ({ text }) => (
  <Button className='hover:scale-110 transition-transform duration-300'>
    {text}
  </Button>
);

// Home page component
const Home: React.FC = () => {
  return (
    <div className='animate-slideUp overflow-hidden '>
      {/* About and Resume Section */}
      <section className='text-3xl pl-[500px]'>
        <div className='grid grid-cols-2 justify-between mt-60 mb-40 font-mono'>
          {/* Link to About */}
          <Link href='/about' passHref>
            <CustomButton text='./ about \.' />
          </Link>
          
          {/* Link to Resume */}
          <Link href='/resume' passHref>
            <CustomButton text='./ resume \.' />
          </Link>
        </div>
      </section> 


      {/* Introduction Section */}
      <section className='text-center'>
      {/* First Typewriter (no delay) */}
      <h1 className='text-5xl font-bold font-serif'>
        Hey There,Nice to Meet You
      </h1>

      {/* Second Typewriter (with delay) */}
      <div className='text-4xl font-mono mt-2'>
      I’m  <Typewriter text='Umendran, a Software Engineer I' speed={80} />

      </div>
    </section>

      {/* Projects and Contact Section */}
      <section className='text-3xl font-mono pl-[500px]'>
        <div className='grid grid-cols-2 justify-between mt-40'>
          {/* Link to Projects */}
          <Link href='/projects' passHref>
            <CustomButton text='./ projects \.' />
          </Link>
          
          {/* Link to Contact */}
          <Link href='/contact' passHref>
            <CustomButton text='./ contact \.' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
