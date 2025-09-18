import {useTranslation} from "../TranslationContext.tsx";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ArcherContainer, type ArcherContainerRef, ArcherElement} from "react-archer";
import AcademicCard from "./AcademicCard.tsx";
import {frameworks, programmingLanguages, technologies} from "../misc/personalData.ts";
import SkillsCard from "./SkillsCard.tsx";

gsap.registerPlugin(ScrollTrigger);

const TimelineArcher = () => {
    const {t} = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const archerRef = useRef<ArcherContainerRef>(null);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    const bachelorData = {
        title: t('bachelorTitle'),
        degree: t('bachelorDegreeTitle'),
        university: "Alma Mater Studiorum - Università di Bologna",
        universityLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Seal_of_the_University_of_Bologna.svg/1200px-Seal_of_the_University_of_Bologna.svg.png",
        year: "2020-2024",
    };

    const masterData = {
        title: t('masterTitle'),
        degree: t('masterDegreeDescription'),
        university: "Politecnico di Torino",
        universityLogo: "https://geowindy.polito.it/wp-content/uploads/2024/04/polito.png",
        year: "2024-Present",
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const archer = archerRef.current;
        if (!container || !archer) return;

        const cards = container.querySelectorAll(".journey-card");

        cards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.85,
                    rotationX: 25,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 98%",
                        toggleActions: "play none none reverse",
                        onEnter: () => archer.refreshScreen(),
                        onUpdate: () => archer.refreshScreen(),
                    },
                }
            );
        });

        const skillCards = container.querySelectorAll(".skill-card");
        skillCards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.8,
                    rotation: 5,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.9,
                    ease: "elastic.out(1, 0.6)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 98%",
                        toggleActions: "play none none reverse",
                        onEnter: () => archer.refreshScreen(),
                        onUpdate: () => archer.refreshScreen(),
                    },
                }
            );
        });

        const nodes = container.querySelectorAll(".connection-node");
        nodes.forEach((node) => {
            gsap.fromTo(
                node,
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(2.5)",
                    scrollTrigger: {
                        trigger: node,
                        start: "top 98%",
                        toggleActions: "play none none reverse",
                        onEnter: () => archer.refreshScreen(),
                        onUpdate: () => archer.refreshScreen(),
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="relative py-10 px-4 overflow-hidden" id="journey">
            <ArcherContainer
                ref={archerRef}
                strokeColor="rgba(139, 92, 246, 0.8)"
                strokeWidth={2}
                className="max-w-7xl mx-auto relative z-10"
                noCurves={false}
            >
                <h2 className="connection-node text-5xl lg:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                    {t('journey')}
                </h2>

                <div className="relative mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
                        <ArcherElement
                            id="bachelor"
                            relations={[
                                {
                                    targetId: 'education-hub',
                                    targetAnchor: 'bottom',
                                    sourceAnchor: windowWidth < 1000 ? 'bottom' : 'right',
                                    style: {
                                        strokeColor: 'rgba(139, 92, 246, 0.7)',
                                        strokeWidth: 3,
                                        strokeDasharray: '0',
                                        endMarker: false,
                                    },
                                },
                            ]}
                        >
                            <div className="journey-card relative group">
                                <div className="relative">
                                    <AcademicCard data={bachelorData} />
                                </div>
                            </div>
                        </ArcherElement>

                        <ArcherElement
                            id="master"
                            relations={[
                                {
                                    targetId: 'education-hub',
                                    targetAnchor: 'bottom',
                                    sourceAnchor: windowWidth < 1000 ? 'bottom' : 'left',
                                    style: {
                                        strokeColor: 'rgba(168, 85, 247, 0.7)',
                                        strokeWidth: 3,
                                        strokeDasharray: '0',
                                        endMarker: false,
                                    },
                                },
                            ]}
                        >
                            <div className="journey-card relative group">
                                <div className="relative">
                                    <AcademicCard data={masterData} />
                                </div>
                            </div>
                        </ArcherElement>
                    </div>

                    <ArcherElement
                        id="education-hub"
                        relations={[
                            {
                                targetId: 'skills-hub',
                                targetAnchor: 'top',
                                sourceAnchor: 'bottom',
                                style: {
                                    strokeColor: 'rgba(168, 85, 247, 0.7)',
                                    strokeWidth: 4,
                                    strokeDasharray: '0',
                                    endMarker: false,
                                },
                            },
                        ]}
                    >
                        <div className="flex justify-center">
                        </div>
                    </ArcherElement>
                </div>

                <div className="relative">
                    <h3 className="text-4xl connection-node font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t('technicalExpertise')}
                    </h3>

                    <ArcherElement
                        id="skills-hub"
                        relations={[
                            {
                                targetId: 'programming-skills',
                                targetAnchor: 'top',
                                sourceAnchor: 'bottom',
                                style: {
                                    strokeColor: 'rgba(59, 130, 246, 0.7)',
                                    strokeWidth: 2,
                                    strokeDasharray: '5,3',
                                    endMarker: windowWidth >= 1000,
                                },
                            },
                            {
                                targetId: 'framework-skills',
                                targetAnchor: 'top',
                                sourceAnchor: 'bottom',
                                style: {
                                    strokeColor: 'rgba(16, 185, 129, 0.7)',
                                    strokeWidth: 2,
                                    strokeDasharray: '5,3',
                                    endMarker: windowWidth >= 1000,
                                },
                            },
                            {
                                targetId: 'tools-skills',
                                targetAnchor: 'top',
                                sourceAnchor: 'bottom',
                                style: {
                                    strokeColor: 'rgba(245, 101, 101, 0.7)',
                                    strokeWidth: 2,
                                    strokeDasharray: '5,3',
                                    endMarker: windowWidth >= 1000,
                                },
                            },
                        ]}
                    >
                        <div className="flex justify-center mb-16">

                        </div>
                    </ArcherElement>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        <ArcherElement id="programming-skills">
                            <div className="skill-card relative group">
                                <div className="connection-node absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full border-3 border-white/30 shadow-lg shadow-blue-500/40"></div>
                                <div className="relative">
                                    <SkillsCard title={t("programmingLanguagesTitle")} data={programmingLanguages} />
                                </div>
                            </div>
                        </ArcherElement>

                        <ArcherElement id="framework-skills">
                            <div className="skill-card relative group md:mt-12">
                                <div className="connection-node absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-3 border-white/30 shadow-lg shadow-emerald-500/40"></div>
                                <div className="relative">
                                    <SkillsCard title={t("frameworksTitle")} data={frameworks} />
                                </div>
                            </div>
                        </ArcherElement>

                        <ArcherElement id="tools-skills">
                            <div className="skill-card relative group">
                                <div className="connection-node absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full border-3 border-white/30 shadow-lg shadow-orange-500/40"></div>
                                <div className="relative">
                                    <SkillsCard title={t("toolsTitle")} data={technologies} />
                                </div>
                            </div>
                        </ArcherElement>
                    </div>
                </div>
            </ArcherContainer>
        </section>
    );
}

export default TimelineArcher;