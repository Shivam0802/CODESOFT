import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Components/About";
import { PiCirclesThreeFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

function AboutPage() {

    const downloadResume = () => {
        saveAs(
            "/Assets/Shivam.pdf",
            "Shivam_Resume.pdf"
        );
    }   

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="relative">
                <img
                    src="/Assets/backgroundHome.jpg"
                    alt="img1"
                    className="w-full h-[80vh] md:h-[70vh] object-cover filter blur-[5px]"
                />
                <div className="absolute top-0 left-0 w-full">
                    <Navbar />
                </div>
                <div className="absolute top-[72%] md:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center md:text-left md:left-1/4 md:-translate-x-1/3">
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
                </div>
                <div className="absolute top-[20%] md:top-[22%] right-0 md:right-40 w-full md:w-auto flex justify-center md:justify-end px-4 md:px-0">
                    <img
                        src="/Assets/shivam.webp"
                        alt="img1"
                        className="w-[12rem] md:w-[20rem] rounded-lg object-cover mx-auto shadow-inner"
                    />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                    <button onClick={downloadResume} className="text-black bg-[#F7E7DC] px-4 py-2 mt-4 rounded-full hover:bg-[#F7E7DC] hover:text-black duration-300">
                        Download Resume
                    </button>
                </div>
            </div>
            <About />
            <div className="bg-[#2F3645] bg-opacity-20 py-2 px-4 m-4 rounded-md">
                <div className="container mx-auto">
                    <h1 className="text-[#E7F0DC] text-[2rem] md:text-[2.5rem] font-light flex items-center">
                        What I do
                        <hr className="border-2 border-[#80B9AD] w-[75rem] mx-auto my-2" />
                        <PiCirclesThreeFill className="text-[#80B9AD] ml-4" />
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light text-center">
                                Frontend Development :
                            </h4>
                            <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                Creating inclusive web experiences by adhering to accessibility standards and best practices.
                                Ensuring consistent functionality and design across all major web browsers.
                                Connecting front-end applications with back-end services through seamless API integration.
                            </p>
                        </div>
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light text-center">
                                Backend Development :
                            </h4>
                            <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                Building robust and scalable server-side applications to support seamless user experiences.
                                Designing and implementing RESTful APIs to facilitate data exchange between the front-end and back-end.
                                Developing and maintaining databases to store and manage application data.
                                Ensuring the security and integrity of user data through encryption and secure data storage practices.
                            </p>
                        </div>
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light text-center">
                                UI/UX Design :
                            </h4>
                            <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                Creating intuitive and user-friendly interfaces that prioritize user needs and behaviors.
                                Crafting visually appealing and cohesive designs that enhance user experience and brand identity.
                                Designing adaptable interfaces that provide a seamless experience across various devices and screen sizes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#2F3645] bg-opacity-20 py-2 px-4 m-4 rounded-md">
                <div className="container mx-auto">
                    <h1 className="text-[#E7F0DC] text-[2rem] md:text-[2.5rem] font-light flex items-center">
                        My Education
                        <hr className="border-2 border-[#80B9AD] w-[75rem] mx-auto my-2" />
                        <PiCirclesThreeFill className="text-[#80B9AD] ml-4" />
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="flex-1">
                            <div className="flex-1 mt-4 rounded-lg bg-[#292B2F8C] bg-opacity-40 p-4">
                                <h4 className="flex items-center gap-2 text-[#F1F8E8] text-[1.25rem] md:text-[1.5rem] font-light">
                                    <FaGraduationCap className="text-[#80B9AD] text-2xl md:text-3xl" />
                                    Master of Computer Applications
                                </h4>
                                <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2 ml-10">
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Year:</strong> 2023-2025
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">College:</strong> Jagan Institute of Management Studies
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Location:</strong> Rohini, Delhi
                                    <br />
                                    I am currently pursuing my MCA from Jagan Institute of Management Studies, Rohini, Delhi.
                                </p>
                            </div>
                            <div className="flex-1 mt-4 rounded-lg bg-[#292B2F8C] bg-opacity-40 p-4">
                                <h4 className="flex items-center gap-2 text-[#F1F8E8] text-[1.25rem] md:text-[1.5rem] font-light">
                                    <FaGraduationCap className="text-[#80B9AD] text-2xl md:text-3xl" />
                                    B.Sc. (H) Physics
                                </h4>
                                <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2 ml-10">
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Year:</strong> 2018-2021
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">College:</strong> Motilal Nehru College, University of Delhi
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Location:</strong> South Campus, University of Delhi
                                    <br />
                                    I have completed my B.Sc. (H) Physics from Motilal Nehru College, University of Delhi, in 2021.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex-1 mt-4 rounded-lg bg-[#292B2F8C] bg-opacity-40 p-4">
                                <h4 className="flex items-center gap-2 text-[#F1F8E8] text-[1.25rem] md:text-[1.5rem] font-light">
                                    <FaGraduationCap className="text-[#80B9AD] text-2xl md:text-3xl" />
                                    Senior Secondary (Class XII)
                                </h4>
                                <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2 ml-10">
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Year:</strong> 2016-2018
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">School:</strong> St. Mary Senior Secondary School
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Location:</strong> Ambika Vihar, Paschim Vihar, New Delhi
                                    <br />
                                    I have completed my Class XII from St. Mary Senior Secondary School, New Delhi, in 2018.
                                </p>
                            </div>
                            <div className="flex-1 mt-4 rounded-lg bg-[#292B2F8C] bg-opacity-40 p-4">
                                <h4 className="flex items-center gap-2 text-[#F1F8E8] text-[1.25rem] md:text-[1.5rem] font-light">
                                    <FaGraduationCap className="text-[#80B9AD] text-2xl md:text-3xl" />
                                    Secondary (Class X)
                                </h4>
                                <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2 ml-10">
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Year:</strong> 2016
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">School:</strong> Rajendra Public School
                                    <br />
                                    <strong className="text-blue-200 text-[1.12rem] font-medium">Location:</strong> Nihal Vihar, New Delhi
                                    <br />
                                    I have completed my Class X from Rajendra Public School, New Delhi, in 2016.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default AboutPage;
