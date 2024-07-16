import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Project from "../Components/Project";
import { motion } from "framer-motion";

function HomePage() {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="relative">
                <img
                    src="/Assets/backgroundHome.jpg"
                    alt="img1"
                    className="w-full h-[80vh]  md:h-[80vh] object-cover filter blur-[5px]"
                />
                <div className="absolute top-0 left-0 w-full">
                    <Navbar />
                </div>
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center md:text-left md:left-1/4 md:-translate-x-1/3">
                    <h1 className="text-[2.5rem] md:text-[3.5rem] font-light text-white leading-tight md:leading-normal">
                        Hello, I'm <br />
                        <strong className="text-[#F7E7DC] font-medium text-[3.5rem] md:text-[5rem]" style={{ lineHeight: '1.12rem' }}>
                            Shivam
                        </strong>
                    </h1>
                    <p className="text-white text-[1rem] md:text-[1.5rem] mt-4">
                        I am a Web Developer and a Space Enthusiast. <br />
                        I am passionate about creating beautiful and functional websites.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="flex items-center justify-center md:justify-start text-[#EEEDEB] gap-2 pt-6 cursor-pointer font-normal tracking-widest hover:text-[#FFF8DB] duration-300 hover:gap-2 hover:translate-x-3">
                        Contact Me
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <About />
            <Project />
            <div ref={contactRef} className="p-4">
                <Contact />
            </div>
            <Footer />
        </motion.div>
    );
}

export default HomePage;