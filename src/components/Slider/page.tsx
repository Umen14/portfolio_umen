"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState , useEffect} from 'react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCarousel() {
    const slides = [
        {
            imageUrl: '/images/SMFD.png',
            title: 'SmartMFDealers Admin Dashboard',
            description: 'To help B2B Customers to track orders and upload for mobile usage',
            link: '/project-one',
        },
        {
            imageUrl: '/images/QbeepAI.png',
            title: 'AI Chatbot',
            description: 'Chatbot that uses LLM to answer questions based on file upload',
            link: '/project-two',
        },
        {
            imageUrl: '/images/petronas.png',
            title: 'SAP PETRONAS',
            description: 'A brief description of Project Three.',
            link: '/project-three',
        },
        {
            imageUrl: '/images/petronas.png',
            title: 'PETRONAS Risk Based Inspection',
            description: 'A brief description of Project One.',
            link: '/project-one',
        },
        {
            imageUrl: 'https://placehold.co/600x400',
            title: 'Appsheet Development Low-Code',
            description: 'A low-code development platform for Appsheet which benefits for employees to time in and out.',
            link: '/project-two',
        },
        {
            imageUrl: 'https://placehold.co/600x400',
            title: 'Project 6',
            description: 'A brief description of Project Three.',
            link: '/project-three',
        },
        {
            imageUrl: 'https://placehold.co/600x400',
            title: 'Project 7',
            description: 'A brief description of Project One.',
            link: '/project-one',
        },
        {
            imageUrl: 'https://placehold.co/600x400',
            title: 'Project 8',
            description: 'A brief description of Project Two.',
            link: '/project-two',
        },
        {
            imageUrl: 'https://placehold.co/600x400',
            title: 'Project 9',
            description: 'A brief description of Project Three.',
            link: '/project-three',
        },
    ];
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Set mounted to true after client-side render
    }, []);
    return (
        <div className="container mx-auto p-8">
            {isMounted && (
         <Swiper
         navigation={true}
         modules={[Navigation]}
         spaceBetween={20}
         slidesPerView={1} 
         breakpoints={{
             640: {
                 slidesPerView: 2, 
                 spaceBetween: 15,
             },
             1024: {
                 slidesPerView: 3, 
                 spaceBetween: 20,
             },
         }}
         loop={true}
         className="w-full mx-auto"
     >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <Link href={slide.link} passHref>
                            <div className="cursor-pointer group">
                                <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src={slide.imageUrl}
                                        alt={slide.title}
                                        layout="fill"
                                        objectFit="cover"  // Ensures image covers container
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-lg text-white ">
                                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                                    <p className="text-sm mt-1">{slide.description}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            )}
        </div>
    );
}
