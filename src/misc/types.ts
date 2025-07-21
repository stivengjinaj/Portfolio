export enum Section {
    HOME,
    ABOUT,
    PROJECTS,
    CONTACT
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