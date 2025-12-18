import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {
    activeSection: string;
    setActiveSection: (section: string) => void;
};

export default function Navbar({ activeSection, setActiveSection }: Props) {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (section: string) => {
        setActiveSection(section);
        setMenuOpen(false); // close menu on mobile after click
    };

    return (
        // <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 md:px-8 flex justify-between items-center z-50">
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md py-4 px-6 md:px-8 flex justify-between items-center z-50">
            {/* <h1 className="font-bold text-xl cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Alli Ibrahim A.
            </h1> */}
            <h1 className="font-bold text-xl cursor-pointer text-green-400 hover:text-green-500 transition-colors duration-300">
                Alli Ibrahim A.
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
                {sections.map((section) => (
                    <li key={section}>
                        <button
                            onClick={() => handleClick(section)}
                            className={`
                cursor-pointer capitalize text-green-400
                hover:text-green-500 hover:scale-105 transition-all duration-300
                ${activeSection === section ? "text-green-500 font-semibold underline" : ""}
              `}
                        >
                            {section}
                        </button>
                    </li>
                ))}
            </ul>



            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-green-400 text-2xl hover:text-green-500 transition-colors duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center shadow-md md:hidden">
                    {sections.map((section) => (
                        <li key={section} className="w-full border-b border-green-700">
                            <button
                                onClick={() => handleClick(section)}
                                className={`
                  w-full py-3 text-center capitalize text-green-400
                  hover:text-green-500 hover:bg-green-900 transition-all duration-300
                  ${activeSection === section ? "text-green-500 font-semibold" : ""}
                `}
                            >
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
