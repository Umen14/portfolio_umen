"use client";
import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Typewriter from './components/Typewriter';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Lazy load your ProjectCarousel
const ProjectCarousel = dynamic(() => import('@/components/Slider/page'), {
  ssr: false,
});

// Custom button component
const CustomButton: React.FC<{ text: string }> = React.memo(({ text }) => (
  <Button className='hover:scale-110 transition-transform duration-300'>
    {text}
  </Button>
));

// Home page component
const Home: React.FC = () => {
  return (
    <motion.div
      className='animate-slideUp overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* About and Resume Section */}
      <section className='text-3xl pl-[500px]'>
        <div className='grid grid-cols-2 justify-between mt-60 mb-40 font-mono'>
          <Link href='/about' passHref>
            <CustomButton text='./ about \.' />
          </Link>
          <Link href='/resume' passHref>
            <CustomButton text='./ resume \.' />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='text-center'>
        <h1 className='text-5xl font-bold font-serif'>Hey There, Nice to Meet You</h1>
        <div className='text-4xl font-mono mt-2'>
          I’m <Typewriter text='Umendran, a Software Engineer I' speed={50} />
        </div>
      </section>

      {/* Projects and Contact Section */}
      <section className='text-3xl font-mono pl-[500px]'>
        <div className='grid grid-cols-2 justify-between mt-40'>
          <Link href='/projects' passHref>
            <CustomButton text='./ projects \.' />
          </Link>
          <Link href='/contact' passHref>
            <CustomButton text='./ contact \.' />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
