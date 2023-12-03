export type Profile = {
    network: string;
    username: string;
    url: string;
    logo: string;
};

export type Location = {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
};

export type Basics = {
    name: string;
    label: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: Location;
    profiles: Profile[];
    image: string;
};

export type Position = {
    position: string;
    startDate: string;
    endDate: string;
    summary?: string;
};

export type WorkExperience = {
    company: string;
    summary: string;
    positions: Position[];
};

export type Project = {
    name: string;
    summary: string;
    description: string;
    url: string;
    roles: string[];
    entity: string;
    type: string;
    keywords: string[];
};

export type Education = {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    courses: string[];
};

export type Skills = {
    languages: string[];
    technologies: string[];
    services: string[];
    tools: string[];
};

export type SoftSkills = string[];

export type Resume = {
    basics: Basics;
    work: WorkExperience[];
    projects: Project[];
    education: Education[];
    skills: Skills;
    softSkills: SoftSkills;
};

export type ResumeState = {
  resume: Resume | null;
  initialized: boolean;
}