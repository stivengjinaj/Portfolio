export enum Section {
    HOME,
    ABOUT,
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