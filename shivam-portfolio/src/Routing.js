import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectPage";

import { AnimatePresence } from "framer-motion";

function Routing() {

    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects/:pid" element={<ProjectsPage />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Routing;