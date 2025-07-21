import FloatingNavbar from "../components/FloatingNavbar.tsx";
import {useState} from "react";
import {Section} from "../misc/types.ts";
import LanguageSelector from "../components/LanguageSelector.tsx";
import ProfileSection from "../components/ProfileSection.tsx";
import TimelineContainer from "../components/TimelineContainer.tsx";
import ProjectSection from "../components/ProjectSection.tsx";

function Homepage() {
    const [ currentSection, setCurrentSection ] = useState<Section>(Section.HOME)

    const handleSectionChange = (section: Section) => {
        setCurrentSection(section)
    }

    return (
        <>
            <FloatingNavbar currentSection={currentSection} setCurrentSection={handleSectionChange} />
            <div className="darker-gradient-background relative min-h-screen w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center m-0 p-0">
                <ProfileSection />
                <TimelineContainer />
                <ProjectSection />
            </div>
            <LanguageSelector />
        </>

    );
}

export default Homepage;