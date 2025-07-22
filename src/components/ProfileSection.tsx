import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {useTranslation} from "../TranslationContext.tsx";

const ProfileSection: React.FC = () => {
    const { t } = useTranslation();
    const profileRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        tl.fromTo(imageRef.current,
            {
                scale: 0,
                rotation: -180,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.5)"
            }
        ).fromTo(textRef.current,
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            },
            "-=0.5",
        ).from(".mouse-container",{
            y: 100,
            opacity: 0,
            duration: 0.8,
        })
    }, []);

    return (
        <div className="h-screen flex flex-col" id={"me"}>
            <section
                ref={profileRef}
                className="flex-1 flex items-center justify-center px-4 py-20"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div
                        ref={imageRef}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative group mt-3">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-3xl hover:shadow-violet-500/20 transition-all duration-300 hover:transform hover:scale-105">
                                <img className="object-cover w-100 h-80 rounded-2xl bg-gradient-to-br from-violet-400/20 to-purple-600/20 flex items-center justify-center text-white/60 text-lg font-medium" src={"/profile.png"} alt="profile image"/>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={textRef}
                        className="text-white space-y-6"
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
                            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                {t('whatIDo')}
                            </h1>
                            {/*<h2 className="text-2xl font-semibold mb-6 text-violet-200">
                                {t('jobPosition')}
                            </h2>*/}
                            <p className="text-lg text-white/80 leading-relaxed mb-6">
                                {t('briefDescription')}
                            </p>
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <small>{t('portfolioOrigin')}</small>
                                <div className="flex flex-wrap gap-3 items-center justify-center">
                                <span className="px-4 py-2 bg-sky-700 border border-sky-400/40 rounded-full text-white-300 text-sm font-medium">
                                TypeScript
                            </span>
                                    <span className="px-4 py-2 bg-sky-500/80 border border-sky-400/10 rounded-full text-white-300 text-sm font-medium">
                                React
                            </span>
                                    <span className="px-4 py-2 bg-sky-500 border border-blue-400/30 rounded-full text-white-300 text-sm font-medium">
                                Tailwind Css
                            </span>
                                    <span className="px-4 py-2 bg-green-600 border border-blue-400/30 rounded-full text-white-300 text-sm font-medium">
                                GSAP
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {screenWidth > 1025 &&
                <div className="h-[10vh] flex justify-center items-start mouse-container">
                    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex flex-col items-center justify-start p-1 animate-bounce">
                        <div className="w-1 h-1 bg-white/70 rounded-full mt-1"/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileSection;