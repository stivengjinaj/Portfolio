import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import {projectsData} from "../misc/personalData.ts";
import {useTranslation} from "../TranslationContext.tsx";
import {handleGithubRedirect} from "../misc/helper.ts";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection: React.FC = () => {
    const {t} = useTranslation();
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const placeholderRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.from(sectionRef.current, {
            y: 100,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 98%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.fromTo([placeholderRef.current, titleRef.current],
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 98%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        const projectCards = sectionRef.current?.querySelectorAll('.project-card');
        projectCards?.forEach((card) => {
            gsap.fromTo(card,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 98%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 px-4" id={"projects"}>
            <div className="absolute inset-0 bg-gradient-to-b via-white/20 to-transparent backdrop-blur-sm"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h2
                        ref={titleRef}
                        className="text-5xl leading-tight font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        {t('personalProjects')}
                    </h2>
                    <div ref={placeholderRef} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <ProjectCard data={project} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="inline-block group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <button
                            onClick={() => handleGithubRedirect("https://github.com/stivengjinaj")}
                            className="relative bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
                        >
                            <span className="flex items-center gap-3">
                                {t('viewProjects')}
                                <span className="text-violet-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;