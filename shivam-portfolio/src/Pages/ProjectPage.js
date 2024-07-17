import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../StaticProjectData/staticData";
import { PiCirclesThreeFill } from "react-icons/pi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Footer from "../Components/Footer";
import Crousal from "../Components/Crousal";
import { motion } from "framer-motion";

const ProjectPage = () => {
    const { pid } = useParams();
    const Project_Data = ProjectData[pid];

    const handleBack = () => {
        window.history.back();
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className=" bg-[#2F3645] bg-opacity-20 p-6 m-6 rounded-md">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
                        <IoArrowBackCircleSharp className="text-[#FFBF78] text-2xl" />
                        <h1 className="text-[#FFBF78] text-[1.5rem] md:text-[1.7rem] font-light">Back</h1>
                    </div>
                </div>
                <div className="container mx-auto">
                    <h1 className="text-[#E7F0DC] text-[2rem] md:text-[2.5rem] font-light flex items-center">
                        Projects
                        <hr className="border-2 border-[#80B9AD] w-[80rem] mx-auto my-2" />
                        <PiCirclesThreeFill className="text-[#80B9AD] ml-4" />
                    </h1>
                </div>
                <div className="flex flex-col md:flex-col gap-6 mx-4 my-2">
                    <h1 className="text-[#E7F0DC] text-[1.4rem] md:text-[1.7rem] font-light flex items-center">
                        {Project_Data.name}
                    </h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            <span className="text-[#ADD899] text-[1rem] md:text-[1.1rem] font-light">Technology Used: </span>
                            <p className="text-white text-[1rem] md:text-[1.1rem] font-light">
                                {Project_Data.technology}
                            </p>
                        </p>
                        <p>
                            <span className="text-[#ADD899] text-[1rem] md:text-[1.1rem] font-light">Date: </span>
                            <p className="text-white text-[1rem] md:text-[1.1rem] font-light">
                                {Project_Data.date}
                            </p>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            <span className="text-[#ADD899] text-[1rem] md:text-[1.1rem] font-light">Description: </span>
                            <p className="text-white text-[1rem] md:text-[1.1rem] font-light">
                                {Project_Data.description}
                            </p>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-6 mx-4 my-4">
                    <div className="w-[100%] h-auto md:w-[50rem] md:h-auto bg-[#1F1F1F] rounded-lg overflow-hidden">
                        <Crousal autoSlide>
                            {
                                Project_Data.image.map((image) => (
                                    image.src
                                ))
                            }
                        </Crousal>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </motion.div>
    );
};

export default ProjectPage;


