import {useEffect, useRef, useState} from "react";
import { Section } from "../misc/types.ts";
import {gsap} from "gsap";

function FloatingNavbar({currentSection, setCurrentSection}: { currentSection: Section; setCurrentSection(section: Section): void; }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.from(navbarRef.current, {
            y: -100,
            opacity: 0,
            ease: "easeOut",
        })
    })

    const navItems = [
        { label: "Home", section: Section.HOME },
        { label: "About", section: Section.ABOUT },
        { label: "Projects", section: Section.PROJECTS },
        { label: "Contact", section: Section.CONTACT },
    ];

    const handleClick = (section: Section) => {
        setCurrentSection(section);
        setMenuOpen(false);
    };

    return (
        <>
            <nav ref={navbarRef} className="navbar-container fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md px-6 py-3 flex items-center justify-between text-white">
                <div className="text-lg font-semibold tracking-wide">Stiven Gjinaj</div>

                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    {navItems.map(({ label, section }) => (
                        <li
                            key={section}
                            className={`cursor-pointer transition ${
                                currentSection === section
                                    ? "text-violet-400 shadow-sm"
                                    : "hover:text-white/50 text-violet-200"
                            }`}
                            onClick={() => handleClick(section)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-sm border px-3 py-1 rounded-full border-white/30 hover:bg-white/10 transition"
                >
                    Menu
                </button>
            </nav>

            {menuOpen && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[85%] rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg p-4 flex flex-col gap-4 md:hidden text-center text-white text-sm font-medium">
                    {navItems.map(({ label, section }) => (
                        <button
                            key={section}
                            onClick={() => handleClick(section)}
                            className={`py-2 rounded-lg transition ${
                                currentSection === section
                                    ? "bg-violet-600 text-white"
                                    : "hover:bg-white/10 text-violet-200"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export default FloatingNavbar;
