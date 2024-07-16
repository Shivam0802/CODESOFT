import React from "react";
import { Link } from "react-router-dom";
import { PiCirclesThreeFill } from "react-icons/pi";
import ProjectData from "../StaticProjectData/staticData";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Project = () => {
    return (
        <div className="bg-[#2F3645] bg-opacity-20 py-2 px-4 m-4 rounded-md">
            <div className="container mx-auto">
                <h1 className="text-[#E7F0DC] text-[2rem] md:text-[2.5rem] font-light flex items-center">
                    Projects
                    <hr className="border-2 border-[#80B9AD] w-[80rem] mx-auto my-2" />
                    <PiCirclesThreeFill className="text-[#80B9AD] ml-4" />
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-[3rem] mx-4 my-4">
                {ProjectData.map((project) => (
                    <div key={project.pid} className="w-[100%] h-auto md:w-[30rem] md:h-auto bg-[#1F1F1F] rounded-lg overflow-hidden">
                        <img
                            src={project.image[0].src}
                            alt={project.image[0].alt}
                            className="w-full h-auto object-cover cursor-pointer"
                        />
                        <div className="w-full h-fit bg-[#1c1a1a80] flex flex-col items-center px-4 py-2">
                            <h1 className="text-gray-300 text-[1.25rem] md:text-[1.35rem] font-light">{project.name}</h1>
                            <p className="text-gray-200 text-[1rem] md:text-[1.1rem] font-light px-2">
                                {project.description.slice(0, 70)}......
                            </p>
                        </div>
                        <div>
                            <Link to={`/projects/${project.pid}`} className="flex justify-end">
                                <button className="flex items-center gap-2 text-[#ADD899] px-10 py-1 hover:text-[#FDE49E]">
                                    View More
                                    <HiOutlineArrowNarrowRight size={20} className="text-[#ADD899]" />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
