import FloatingNavbar from "../components/FloatingNavbar.tsx";
import {useState, useEffect} from "react";
import {Section} from "../misc/types.ts";
import LanguageSelector from "../components/LanguageSelector.tsx";
import ProfileSection from "../components/ProfileSection.tsx";
import TimelineContainer from "../components/TimelineContainer.tsx";
import ProjectSection from "../components/ProjectSection.tsx";
import {sectionToId} from "../misc/helper.ts";
import ContactSection from "../components/ContactSection.tsx";

function Homepage() {
    const [currentSection, setCurrentSection] = useState<Section>(Section.ME);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [Section.ME, Section.JOURNEY, Section.PROJECTS, Section.CONTACT];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(sectionToId(section));
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setCurrentSection(section);
                        break;
                    }
                }
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleSectionChange = (section: Section) => {
        setCurrentSection(section);
    };

    return (
        <>
            <FloatingNavbar currentSection={currentSection} setCurrentSection={handleSectionChange} />
            <div className="darker-gradient-background relative min-h-screen w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center m-0 p-0">
                <ProfileSection />
                <TimelineContainer />
                <ProjectSection />
                <ContactSection />
            </div>
            <LanguageSelector />
        </>

    );
}

export default Homepage;