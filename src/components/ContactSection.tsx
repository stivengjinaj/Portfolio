import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {contacts} from "../misc/personalData.ts";
import {useTranslation} from "../TranslationContext.tsx";

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const {language, t} = useTranslation();

    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(sectionRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="min-h-screen w-full flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-16 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('getIn')} <span className="text-violet-400">{t('touch')}</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed whitespace-normal lg:whitespace-nowrap">
                        {t('contactMe')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {contacts.map((contact, index) => {
                        const IconComponent = contact.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:transform hover:scale-[1.02] text-center">

                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {language === "en"
                                            ? contact.label_en
                                            : language === "al"
                                                ? contact.label_sq
                                                : language === "it"
                                                    ? contact.label_it
                                                    : contact.label_es
                                        }
                                    </h3>

                                    <p className="text-white/80 mb-6 break-all">
                                        {
                                            contact.value.length > 1
                                                ? contact.value.map(contact => (
                                                    <span>{contact} <br/></span>
                                                ))
                                                : contact.value
                                        }
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;