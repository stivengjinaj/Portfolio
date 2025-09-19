import React, {useEffect, useRef, useState} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {contacts} from "../misc/personalData.ts";
import {useTranslation} from "../TranslationContext.tsx";
import ContactToast from "./ContactToast.tsx";
import ContactCard from "./ContactCard.tsx";

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { language, t } = useTranslation();
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

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

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);

            setToastMessage(t('copiedToClipboard'));
            setToastVisible(true);

            setTimeout(() => {
                setToastVisible(false);
            }, 3000);

        } catch (err) {
            console.error('Failed to copy: ', err);

            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setToastMessage(t('copiedToClipboard'));
                setToastVisible(true);
                setTimeout(() => setToastVisible(false), 3000);
            } catch (fallbackErr) {
                console.error('Fallback copy failed: ', fallbackErr);
                alert('Unable to copy to clipboard');
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <>
            <ContactToast message={toastMessage} isVisible={toastVisible} />

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
                        {contacts.map((contact, index) => (
                            <ContactCard
                                key={index}
                                contact={contact}
                                index={index}
                                language={language}
                                onCopy={copyToClipboard}
                                t={(key: string) => t(key as keyof typeof t)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;