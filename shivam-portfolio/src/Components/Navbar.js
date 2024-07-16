import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbSmartHome } from "react-icons/tb";
import { PiWindDuotone, PiPhoneCallDuotone } from "react-icons/pi";
import { RiWebhookFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="absolute top-0 left-0 w-full p-4 z-50">
                <div className={`rounded-lg ${isOpen ? 'bg-[#2F3645] bg-opacity-80' : 'bg-[#2F3645] bg-opacity-10'} backdrop-blur-sm transition-all duration-300`}>
                    <div className="flex justify-between items-center h-[5rem] px-4">
                        <div>
                            <img src="/Assets/Logo.png" alt="logo" className="w-[10rem] h-fit rounded-lg" />
                        </div>
                        <div className="hidden md:flex mr-10">
                            <ul className="flex space-x-10">
                                <li>
                                    <Link to="/" className="text-[1.22rem] text-white hover:text-gray-300 flex items-center">
                                        <TbSmartHome size={22} className="inline-block mr-2" style={{ color: 'salmon' }} />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-[1.22rem] text-white hover:text-gray-300 flex items-center">
                                        <PiWindDuotone size={24} className="inline-block mr-2" style={{ color: 'slategray' }} />
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-[1.22rem] text-white hover:text-gray-300 flex items-center">
                                        <PiPhoneCallDuotone size={22} className="inline-block mr-2" style={{ color: 'palevioletred' }} />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden mt-4 pb-4 px-4">
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/" className="text-[1.22rem] text-white hover:text-gray-300 flex items-center" onClick={toggleMenu}>
                                        <TbSmartHome size={22} className="inline-block mr-2" style={{ color: 'salmon' }} />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-[1.22rem] text-white hover:text-gray-300 flex items-center" onClick={toggleMenu}>
                                        <PiWindDuotone size={24} className="inline-block mr-2" style={{ color: 'slategray' }} />
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-[1.22rem] text-white hover:text-gray-300 flex items-center" onClick={toggleMenu}>
                                        <PiPhoneCallDuotone size={22} className="inline-block mr-2" style={{ color: 'palevioletred' }} />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;
