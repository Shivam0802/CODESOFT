import React from "react";
import { PiCirclesThreeFill } from "react-icons/pi";
import { IoLogoHtml5, IoLogoCss3, IoLogoPython } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { TbBrandReact, TbBrandNodejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt, FaGithubAlt } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";

function About() {
    return (
        <>
            <div className="bg-[#2F3645] bg-opacity-20 py-2 px-4 m-4 rounded-md">
                <div className="container mx-auto">
                    <h1 className="text-[#E7F0DC] text-[2rem] md:text-[2.5rem] font-light flex items-center">
                        About Me
                        <hr className="border-2 border-[#80B9AD] w-[80rem] mx-auto my-2" />
                        <PiCirclesThreeFill className="text-[#80B9AD] ml-4" />
                    </h1>
                    <h3 className="text-gray-400 text-[1.5rem] md:text-[1.75rem] font-light mt-4">
                        Hello🖐🏼, I'm Shivam
                    </h3>
                    <p className="text-gray-200 text-[1rem] md:text-[1rem] text-light text-justify mt-4">
                        I am a web developer with a passion for creating and building websites.
                        I am a self-taught developer having knowledge of MERN technologies.
                        I am always eager to learn new technologies and improve my skills.
                        I am looking for an opportunity to work in a challenging environment where I can utilize my skills and knowledge to grow as a professional.
                        I am a creative thinker who is always looking for new ways to solve problems and improve existing solutions.
                        I am a detail-oriented person who pays attention to the smallest details and always strives for perfection.
                        I am a team player who is always ready to collaborate with others to achieve common goals.
                        I am also interested in learning new technologies and improving my skills.
                    </p>
                </div>
            </div>
            <div className="bg-[#2F3645] bg-opacity-20 py-2 px-4 m-4 rounded-md">
                <div className="container mx-auto mt-4">
                    <h1 className="text-[#E7F0DC] text-[2rem] md:text-[2.5rem] font-light flex items-center">
                        My Skills
                        <hr className="border-2 border-[#80B9AD] w-[80rem] mx-auto my-2" />
                        <PiCirclesThreeFill className="text-[#80B9AD] ml-4" />
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light">
                                Frontend DeveLopment :
                            </h4>
                            <ul className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <IoLogoHtml5 className="text-[#A63C50] text-2xl md:text-2xl" />
                                    HTML
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <IoLogoCss3 className="text-[#31649B] text-2xl md:text-2xl" />
                                    CSS
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <DiJavascript className="text-[#b3b375] text-2xl md:text-2xl" />
                                    JavaScript
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <TbBrandReact className="text-[#61DAFB] text-2xl md:text-2xl" />
                                    React JS
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light">
                                Backend DeveLopment :
                            </h4>
                            <ul className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <TbBrandNodejs className="text-[#3C873A] text-2xl md:text-2xl" />
                                    Node.js
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <img src="/expressjs.svg" alt="MongoDB" className="w-6 h-6" />
                                    Express.js
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <SiMongodb className="text-[#4DB33D] text-2xl md:text-2xl" />
                                    MongoDB
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <img src="/Assets/restapi.png" alt="REST API" className="w-6 h-6" />
                                    REST API
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light">
                                Tools & Technologies :
                            </h4>
                            <ul className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <FaGitAlt className="text-[#F34F29] text-2xl md:text-2xl" />
                                    Git
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <FaGithubAlt className="text-[#9CA3AF] text-2xl md:text-2xl" />
                                    GitHub
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <VscCode className="text-[#007ACC] text-2xl md:text-2xl" />
                                    VS Code
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <img src="/postman.svg" alt="Postman" className="w-6 h-6" />
                                    Postman
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#2F3645] bg-opacity-30 p-4 rounded-md">
                            <h4 className="text-[#E7F0DC] text-[1.25rem] md:text-[1.5rem] font-light">
                                Programming Languages :
                            </h4>
                            <ul className="text-gray-200 text-[1rem] md:text-[1rem] text-light mt-2">
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <IoLogoPython className="text-[#63AE74] text-2xl md:text-2xl" />
                                    Python
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <img src="/cpp.svg" alt="C++" className="w-6 h-6" />
                                    C++
                                </li>
                                <li className="flex flex-center gap-2 cursor-pointer hover:text-orange-200">
                                    <img src="/java.svg" alt="Java" className="w-6 h-6" />
                                    Java
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;