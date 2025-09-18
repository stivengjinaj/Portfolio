import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import AcademicCard from "./AcademicCard";
import {useTranslation} from "../TranslationContext.tsx";
import SkillsCard from "./SkillsCard.tsx";
import {frameworks, programmingLanguages, technologies} from "../misc/personalData.ts";

gsap.registerPlugin(ScrollTrigger);

const TimelineContainer = () => {
    const {t} = useTranslation();
    const timelineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

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
        const cards = timelineRef.current?.querySelectorAll('.timeline-card');

        if (cards && lineRef.current) {
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1
                    }
                }
            );

            cards.forEach((card, index) => {
                const isLeft = index % 2 === 0;

                gsap.fromTo(card,
                    {
                        x: isLeft ? -100 : 100,
                        opacity: 0,
                        scale: 0.8
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={timelineRef} className="relative py-20 px-4 min-h-screen" id={"journey"}>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="pt-20 mb-16">
                    <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        {t('journey')}
                    </h2>
                </div>

                {/* Desktop Timeline Line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full opacity-20" style={{top: '200px', bottom: '80px'}}>
                    <div
                        ref={lineRef}
                        className="w-full bg-gradient-to-b from-violet-400 to-purple-600 rounded-full"
                    ></div>
                </div>

                {/* Mobile Timeline Line */}
                <div className="lg:hidden absolute w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full opacity-20" style={{left: '32px', top: '200px', bottom: '80px'}}>
                    <div
                        className="w-full bg-gradient-to-b from-violet-400 to-purple-600 rounded-full h-full"
                    ></div>
                </div>

                <div className="relative space-y-12 lg:space-y-16">
                    {/* Bachelor Card */}
                    <div className="timeline-card">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:pr-10 pl-16 lg:pl-0">
                                <AcademicCard data={bachelorData} />
                            </div>
                            <div className="lg:pl-10">
                                {/* Mobile dot */}
                                <div className="w-6 h-6 bg-violet-500 rounded-full border-4 border-white/20 absolute left-6 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 lg:hidden top-8"></div>
                                {/* Desktop dot */}
                                <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 hidden lg:block top-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Master Card */}
                    <div className="timeline-card">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:order-2 pl-16 lg:pl-10">
                                <AcademicCard data={masterData} />
                            </div>
                            <div className="lg:pl-10 lg:order-1">
                                {/* Mobile dot */}
                                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white/20 absolute left-6 transform -translate-x-1/2 shadow-lg shadow-purple-500/50 lg:hidden top-8"></div>
                                {/* Desktop dot */}
                                <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-500/50 hidden lg:block top-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Programming Languages Card */}
                    <div className="timeline-card">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:pr-10 pl-16 lg:pl-0">
                                <SkillsCard title={t('programmingLanguagesTitle')} data={programmingLanguages} />
                            </div>
                            <div className="lg:pl-10">
                                {/* Mobile dot */}
                                <div className="w-6 h-6 bg-violet-500 rounded-full border-4 border-white/20 absolute left-6 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 lg:hidden top-8"></div>
                                {/* Desktop dot */}
                                <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 hidden lg:block top-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks Card */}
                    <div className="timeline-card">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:order-2 pl-16 lg:pl-10">
                                <SkillsCard title={t('frameworksTitle')} data={frameworks} />
                            </div>
                            <div className="lg:pl-10 lg:order-1">
                                {/* Mobile dot */}
                                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white/20 absolute left-6 transform -translate-x-1/2 shadow-lg shadow-purple-500/50 lg:hidden top-8"></div>
                                {/* Desktop dot */}
                                <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-500/50 hidden lg:block top-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Tools Card */}
                    <div className="timeline-card">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:pr-10 pl-16 lg:pl-0">
                                <SkillsCard title={t('toolsTitle')} data={technologies} />
                            </div>
                            <div className="lg:pr-10">
                                {/* Mobile dot */}
                                <div className="w-6 h-6 bg-violet-500 rounded-full border-4 border-white/20 absolute left-6 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 lg:hidden top-8"></div>
                                {/* Desktop dot */}
                                <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 hidden lg:block top-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineContainer;