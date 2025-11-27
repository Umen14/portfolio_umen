"use client";
import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import pythonLogo from "/public/logos/python.png";
import nodejsLogo from "/public/logos/node.png";
import reactLogo from "/public/logos/react.png";
import dockerlogo from "/public/logos/Docker.png";
import gitlogo from "/public/logos/Git.png";
import csslogo from "/public/logos/CSS3.png";
import htmllogo from "/public/logos/HTML5.png";
import javascriptlogo from "/public/logos/JavaScript.png";
import typescriptlogo from "/public/logos/TypeScript.png";
import sqllogo from "/public/logos/SQL.png";
import tailwindlogo from "/public/logos/Tailwind.png";

import { motion } from "framer-motion";
import { type } from "os";

const CustomButton: React.FC<{ text: string }> = ({ text }) => (
  <Button className="hover:scale-110 transition-transform duration-300">
    {text}
  </Button>
);

const randomPosition = () => {
  return {
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
  };
};

const About: React.FC = () => {
  return (


    <div className="flex flex-col bg-black text-white">
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
      {/* Background logos with flying effect */}
      <div className="absolute w-full h-full overflow-hidden -z-10">


        {/* React Logo */}
        <motion.div
          className="absolute"
          initial={randomPosition()}
          animate={{
            x: [0, -400, 400, 0],
            y: [0, 200, -200, 0],
            transition: { duration: 10, repeat: Infinity },
            opacity: [1, 0.5, 1],
          }}
        >

        </motion.div>

        {/* Python Logo at the bottom easing in and out */}

      </div>

      {/* About section */}
      <section className="text-center pt-8">
        <h1 className="text-5xl font-bold font-mono animate-slideUp flex items-center justify-center">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 mr-3 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          {/* Text */}
          about me

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 ml-3 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </h1>

      </section>

      {/* Content section */}
      <section className="relative z-10 text-xl text-white bg-white bg-opacity-10 p-8 rounded-lg font-mono  animate-slideUp mt-10 ">
        <p className="mb-4">
          Hello, I'm <span className="font-bold text-black bg-slate-200 rounded-lg p-1">Umendran</span>, a Software Engineer. I love building
          web applications and tackling complex problems. As a <span className="font-bold text-black bg-slate-200 rounded-lg p-1">full-stack developer</span>, I'm proficient in a variety of technologies.
        </p>
        <p className="mb-4">
          My expertise includes <span className="font-bold text-black bg-slate-200 rounded-lg p-1">React</span>, <span className="font-bold text-black bg-slate-200 rounded-lg p-1">Next.js</span>, <span className="font-bold text-black bg-slate-200 rounded-lg p-1">Node.js</span>, and <span className="font-bold text-black bg-slate-200 rounded-lg p-1">TypeScript</span>. I’m
          constantly looking to learn more and dive into new challenges.
        </p>
        <p className="mb-4">
          I'm also highly interested in emerging technologies like
          <span className="font-bold text-black bg-slate-200 ml-2 rounded-lg p-1">Web 3.0</span> and <span className="font-bold text-black bg-slate-200 rounded-lg p-1">AI</span>. <span className="font-bold text-black bg-slate-200 rounded-lg p-1">Python</span> is my go-to language for AI, automation, and
          data analysis.
        </p>
        <p className="mb-4">
          Not only am I proficient in web development, but I can also build
          Android applications using <span className="font-bold text-black bg-slate-200 rounded-lg p-1">Java</span>.
        </p>
        <p className="mb-4">
          Always eager to learn, I'm constantly on the lookout for new
          opportunities and collaborations.
        </p>
        <p className="mt-6">
          Feel free to check out my projects and reach out if you'd like to
          <span className="ml-2 font-bold text-black bg-slate-200 rounded-lg p-1">connect</span>.
        </p>
      </section>

      <section className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-lg font-mono font-bold animate-slideUp mt-8 sm:mt-10 mx-4 sm:mx-10 lg:mx-40 text-center">
        Technical Languages
        <div className="flex justify-center min-w-full min-h-full">
          <div className="grid grid-cols-6 mt-10 gap-12 text-center">

            {/* Python Logo and Text */}
            <div className="flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    x: [0],
                    y: [0, -20, 0], // Simple up and down easing
                    opacity: [1, 0.8, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image src={pythonLogo} alt="Python Logo" width={50} height={50} />
                </motion.div>
                <span className="mt-4">python</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0], // Simple up and down easing
                    opacity: [1, 0.8, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image src={htmllogo} alt="HTML Logo" width={50} height={50} />
                </motion.div>
                <span className="mt-4">html</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0], // Simple up and down easing
                    opacity: [1, 0.8, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image src={csslogo} alt="CSS Logo" width={50} height={50} />
                </motion.div>
                <span className="mt-4">css</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0], // Simple up and down easing
                    opacity: [1, 0.8, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image src={javascriptlogo} alt="JavaScript Logo" width={50} height={50} />
                </motion.div>
                <span className="mt-4">javascript</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0], // Simple up and down easing
                    opacity: [1, 0.8, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image src={typescriptlogo} alt="TypeScript Logo" width={50} height={50} />
                </motion.div>
                <span className="mt-4">typescript</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0], // Simple up and down easing
                    opacity: [1, 0.8, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image src={sqllogo} alt="SQL Logo" width={50} height={50} />
                </motion.div>
                <span className="mt-4">sql</span>
            </div>
          </div>
        </div>




      </section>
      <section className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-lg font-mono font-bold animate-slideUp mt-8 sm:mt-10 mx-4 sm:mx-10 lg:mx-40 text-center">
        <h2 className="">Technologies and Frameworks</h2>
        <div className="flex justify-center min-w-full min-h-full">
          <div className="grid grid-cols-5 justify-around mt-10 gap-12">
            {/* Node.js Logo and Text */}
            <div className="flex flex-col items-center justify-center">
              <motion.div
                
                animate={{
                  y: [0, -20, 0], // Simple up and down easing
                  opacity: [1, 0.8, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Image src={nodejsLogo} alt="Node.js Logo" width={90} height={50} />
              </motion.div>
              <span className="mt-9">node.js</span>
            </div>
        

            {/* React Logo and Text */}
            <div className="flex flex-col items-center justify-center">
              <motion.div
               
                animate={{
                  y: [0, -20, 0], // Simple up and down easing
                  opacity: [1, 0.8, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Image src={reactLogo} alt="React Logo" width={70} height={50} />
              </motion.div>
              <span className="mt-6">react</span>
            </div>
         
            <div className="flex flex-col items-center justify-center">
              <motion.div
                
                animate={{
                  y: [0, -20, 0], // Simple up and down easing
                  opacity: [1, 0.8, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Image src={tailwindlogo} alt="Tailwind Logo" width={70} height={50} />
              </motion.div>
              <span className="mt-4">tailwind</span>
            </div>
           
            <div className="flex flex-col items-center justify-center">
              <motion.div
             
                animate={{
                  y: [0, -20, 0], // Simple up and down easing
                  opacity: [1, 0.8, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Image src={gitlogo} alt="Git Logo" width={70} height={50} />
              </motion.div>
              <span className="mt-4">git</span>
            </div>
           
            <div className="flex flex-col items-center justify-center">
              <motion.div
               
                animate={{
                  y: [0, -20, 0], // Simple up and down easing
                  opacity: [1, 0.8, 1],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Image src={dockerlogo} alt="Docker Logo" width={70} height={50} />
              </motion.div>
              <span className="mt-4">docker</span>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-20">
        
      </div>



    </div>
  );
};

export default About;
