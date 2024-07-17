import React from "react";
import Navbar from "./Navbar";
import Task_tracker from "./Task_tracker";

function Home() {
    return (
        <>
            <div className="relative">
                <img
                    src="/Assets/background.jpg"
                    alt="img1"
                    className="w-full h-[50vh] md:h-[45vh] object-cover filter blur-[5px]"
                />
                <div className="absolute top-0 left-0 w-full">
                    <Navbar />
                </div>
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="flex items-center gap-2 justify-center">
                        <p className="text-white text-[1.4rem] md:text-[1.7rem] font-normal">
                            Welcome to
                        </p>
                        <strong className="text-[#E0A75E] text-[2rem] md:text-[2.5rem] font-medium">Task Tracker</strong>
                    </p>
                    <p className="text-white text-[1.2rem] md:text-[1.5rem] font-normal">
                        Keep track of your daily tasks and stay organized
                    </p>
                </div>
            </div>
            <div className="mx-10 mb-6 mt-10">
                <Task_tracker />
            </div>
        </>
    );
}

export default Home;