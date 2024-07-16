import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="relative">
                <img
                    src="/Assets/backgroundContact.jpg"
                    alt="img1"
                    className="w-full h-[100vh] object-cover filter blur-[5px]"
                />
                <div className="absolute top-0 left-0 w-full">
                    <Navbar />
                </div>
                <div className="absolute top-[60%] w-[99%] md:w-[75rem] transform -translate-y-1/2 px-4 md:text-left md:left-1/2 md:-translate-x-1/2">
                    <Contact />
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default ContactPage;
