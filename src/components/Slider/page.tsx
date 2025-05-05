"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCarousel() {
  const slides = [
    {
      imageUrl: "/images/SMFD.png",
      title: "SmartMFDealers Admin Dashboard",
      description: "To help B2B Customers to track orders and upload for mobile usage",
      link: "/project-one",
    },
    {
      imageUrl: "/images/QbeepAI.png",
      title: "AI Chatbot",
      description: "Chatbot that uses LLM to answer questions based on file upload",
      link: "/project-two",
    },
    {
      imageUrl: "/images/petronas.png",
      title: "SAP PETRONAS",
      description: "A brief description of Project Three.",
      link: "/project-three",
    },
    {
      imageUrl: "/images/petronas.png",
      title: "PETRONAS Risk Based Inspection",
      description: "A brief description of Project One.",
      link: "/project-one",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      title: "Appsheet Development Low-Code",
      description: "A low-code development platform for Appsheet which benefits employees for time tracking.",
      link: "/project-two",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      title: "Snake Game",
      description: "A simple snake game for interaction purpose.",
      link: "/project-six",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      title: "Tic Tac Toe",
      description: "A brief description of Project One.",
      link: "/project-seven",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      title: "Hang-Man",
      description: "A brief description of Project Two.",
      link: "/project-eight",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      title: "Project 9",
      description: "A brief description of Project Three.",
      link: "/project-nine",
    },
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures component is mounted before rendering
  }, []);

  return (
    <div className="container mx-auto p-8">
      {/* ✅ Horizontal Swiper for Desktop/Tablet */}
      <div className="hidden sm:block">
        {isMounted && (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            loop={true}
            className="w-full mx-auto"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <SlideCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* ✅ Vertical Scrolling for Mobile */}
      <div className="block sm:hidden space-y-6 overflow-y-auto h-[80vh] px-4 scrollbar-none">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <SlideCard slide={slide} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ Reusable SlideCard Component */
const SlideCard = ({ slide }: { slide: any }) => (
  <Link href={slide.link} passHref>
    <div className="cursor-pointer group">
      {/* Responsive height adjustments */}
      <div className="relative w-full h-[60vw] sm:h-80 md:h-96 lg:h-[22rem] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-lg text-white">
        <h3 className="text-lg sm:text-xl font-semibold">{slide.title}</h3>
        <p className="text-sm sm:text-base mt-1">{slide.description}</p>
      </div>
    </div>
  </Link>

);
