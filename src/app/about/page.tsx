import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import pythonLogo from '/public/logos/python.png';  // Example: place logos in public/logos folder
import nodejsLogo from '/public/logos/node.png';
import reactLogo from '/public/logos/react.png';


const CustomButton: React.FC<{ text: string }> = ({ text }) => (
  <Button className='hover:scale-110 transition-transform duration-300'>
    {text}
  </Button>
);

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Background logos with flying effect */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
        <div className='absolute  top-[10%] left-[10%]'>
          <Image src={pythonLogo} alt='Python Logo' width={150} height={150} />
        </div>
        <div className='absolute  top-[40%] right-[15%]'>
          <Image src={nodejsLogo} alt='Node.js Logo' width={180} height={180} />
        </div>
        <div className='absolute  top-[60%] left-[20%]'>
          <Image src={reactLogo} alt='React Logo' width={160} height={160} />
        </div>
 
      </div>

      {/* About section */}
      <section className='text-center pt-8'>
        <h1 className='text-5xl font-bold font-serif animate-slideUp'>
          About Me
        </h1>
      </section>

      {/* Content section */}
      <section className='relative z-10 text-xl text-gray-800 p-8'>
        <p className='mb-4'>
          Hello, I'm Umendran, a passionate Software Engineer. I love building web applications and tackling complex problems. 
          As a full-stack developer, I'm proficient in a variety of technologies.
        </p>
        <p className='mb-4'>
          My expertise includes React, Next.js, Node.js, and TypeScript. I’m constantly looking to learn more and dive into new challenges.
        </p>
        <p className='mb-4'>
          I'm also highly interested in emerging technologies like Blockchain, Web 3.0, and AI. Python is my go-to language for AI, automation, and data analysis.
        </p>
        <p className='mb-4'>
          Not only am I proficient in web development, but I can also build Android applications using Java.
        </p>
        <p className='mb-4'>
          Always eager to learn, I'm constantly on the lookout for new opportunities and collaborations.
        </p>
        <p className='mt-6'>
          Feel free to check out my projects and reach out if you'd like to connect.
        </p>
      </section>
    </div>
  );
};

export default About;
