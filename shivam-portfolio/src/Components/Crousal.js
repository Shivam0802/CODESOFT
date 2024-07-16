import React, { useState, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Crousal = ({ children, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === children.length - 1 ? 0 : current + 1);
    }

    const prev = () => {
        setCurrent(current === 0 ? children.length - 1 : current - 1);
    }

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [current, autoSlide, autoSlideInterval]);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {
                    children.map((child, index) => (
                        <img key={index} src={child} alt="Project" className="w-full h-full object-cover rounded-lg" />
                    ))
                }
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button className="p-1 rounded-full shadow-md hover:bg-white" onClick={prev}>
                    <IoIosArrowDropleft size={20} style={{ color: '#80AF81' }} />
                </button>
                <button className="p-1 rounded-full shadow-md hover:bg-white" onClick={next}>
                    <IoIosArrowDropright size={20} style={{ color: '#80AF81' }} />
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {children.map((_, index) => (
                    <div key={index} className={`w-2 h-2 transition-all rounded-full ${current === index ? 'bg-[#80AF81] p-1' : 'bg-[#C4C4C4] bg-opacity-50'}`}></div>
                ))}
            </div>
        </div>
    );
}

export default Crousal;