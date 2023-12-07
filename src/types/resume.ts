export type Resume = {
    basics: Basics;
    work: WorkExperience[];
    projects: Project[];
    education: Education[];
    references: Reference[];
    recommendations: Recommendation[];
    skills: Skills;
    softSkills: SoftSkills;
};

export type Basics = {
    name: string;
    label: string;
    email: string;
    phone: string;
    status: string;
    resume_url: string;
    url: string;
    summary: string;
    information: Information;
    profiles: Profile[];
    image: string;
};

export type Profile = {
    network: string;
    username: string;
    url: string;
    icon: string;
};

export type Information = {
    location: string;
    yearsOfExperience: string;
    availability: string;
    relocation: string;
    remote: string;
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
    logo_url: string;
    location: string;
    url: string;
    logo: string;
    tenure: string;
    bullets: string[];
    positions: Position[];
};

export type Project = {
    name: string;
    summary: string;
    url: string;
    repo: GithubRepo;
    image_url: string;
    bullets: string[];
    keywords: string[];
};
export type GithubRepo = {
    url: string;
    private: boolean;
    access: string;
    icon: string;
}

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

export type Reference = {
    name: string;
    position: string;
    company: string;
    email: string;
    phone: string;
    linkedin: string;
    relationship: string;
    reference_type: string;
}

export type Recommendation = {
    name: string;
    position: string;
    company: string;
    email: string;
    linkedin: string;
    summary: string;
}

export type ResumeState = {
  resume: Resume | null;
  initialized: boolean;
}
