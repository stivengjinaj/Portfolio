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
        <section ref={timelineRef} className="relative py-20 px-4" id={"journey"}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    {t('journey')}
                </h2>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full opacity-20 top-32 bottom-20">
                    <div
                        ref={lineRef}
                        className="w-full bg-gradient-to-b from-violet-400 to-purple-600 rounded-full"
                    ></div>
                </div>

                <div className="relative space-y-12">
                    <div className="timeline-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="lg:pr-12">
                            <AcademicCard data={bachelorData} />
                        </div>
                        <div className="lg:pl-12">
                            <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 hidden lg:block"></div>
                        </div>
                    </div>

                    <div className="timeline-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="lg:pr-12 lg:order-2">
                            <AcademicCard data={masterData} />
                        </div>
                        <div className="lg:pl-12 lg:order-1">
                            <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-500/50 hidden lg:block"></div>
                        </div>
                    </div>

                    <div className="timeline-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="lg:pr-12">
                            <SkillsCard title={t('programmingLanguagesTitle')} data={programmingLanguages} />
                        </div>
                        <div className="lg:pl-12">
                            <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 hidden lg:block"></div>
                        </div>
                    </div>

                    <div className="timeline-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="lg:pr-12 lg:order-2">
                            <SkillsCard title={t('frameworksTitle')} data={frameworks} />
                        </div>
                        <div className="lg:pl-12 lg:order-1">
                            <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-500/50 hidden lg:block"></div>
                        </div>
                    </div>

                    <div className="timeline-card grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="lg:pr-12">
                            <SkillsCard title={t('toolsTitle')} data={technologies} />
                        </div>
                        <div className="lg:pl-12">
                            <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-white/20 absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-violet-500/50 hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineContainer;