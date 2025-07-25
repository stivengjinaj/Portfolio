export enum Section {
    ME,
    JOURNEY,
    PROJECTS,
    CONTACT
}

export enum ProgrammingContext {
    MOBILE,
    WEB,
    AI,
    SOC,
    TOOLS,
    DATABASE,
    DEPLOYMENT,
    PAYMENT_GATEWAYS,
}

export interface AcademicData {
    title: string;
    degree: string;
    university: string;
    universityLogo: string;
    year: string;
}

export interface AcademicCardProps {
    data: AcademicData;
}

export interface TechnologyInfo {
    name: string;
    icon: string;
}

export interface ToolsAndTechnologies {
    tool: TechnologyInfo[];
    type: ProgrammingContext;
}

export interface Project {
    projectTitle: string;
    projectDescription_en: string;
    projectDescription_sq: string;
    projectDescription_it: string;
    projectDescription_es: string
    usedTechnologies: TechnologyInfo[];
    image?: string;
    video?: string;
    githubRepo: string;
}