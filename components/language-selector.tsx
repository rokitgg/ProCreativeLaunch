'use client'

import { useState } from "react";

export default function LanguageSelector({ defaultLanguage = "en" }) {

    const languages = [
        { code: "en", flag: "gb", name: "English" },
        { code: "es", flag: "es", name: "Spanish" },
        // Add more languages here
    ];

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(
        languages.find((lang) => lang.code === defaultLanguage)
      );



    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const dropdownClasses = dropdownVisible
    ? "transform transition ease-out duration-500 opacity-100 scale-100"
    : "transform transition ease-in duration-20 opacity-0 scale-95";

    const handleMouseLeave = () => {
        setTimeout(() => {
            setDropdownVisible(false);
        }, 2500);
    };

    const handleLanguageChange = (language: any) => {
        setCurrentLanguage(language);
        setDropdownVisible(false);
      };

    
    return (
        <>
            <div className="relative">
                
                {/* Dropdown Button */}
                <button onClick={toggleDropdown} className="bg-slate-800 p-2 rounded-md flex items-center space-x-2 w-32" onMouseLeave={handleMouseLeave}>
                    <span className="fi fi-gb"></span>
                    <span>English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-500 ${dropdownVisible ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Dropdown */}
                <div className={`absolute w-32 left-0 mt-2 bg-slate-900 shadow-md rounded-md ${dropdownClasses}`}>
                    <ul>
                        <a href="/docs/es">
                            <li className="p-2 hover:bg-slate-800 cursor-pointer flex justify-between rounded-md items-center space-x-2">
                                <span className="fi fi-es"></span>
                                <span>Spanish</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M17 7l-10 10"></path>
                                    <path d="M8 7l9 0l0 9"></path>
                                </svg>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
}