import type { Component } from "vue";
import type { Education, Project, WorkExperience, Reference, Recommendation } from "./resume";

export type AppState = {
    activePage: Page | null;
    darkMode: boolean;
    color: AppColor;
    availablePages: Page[]
    showJson: boolean;
    gtagActive: boolean;
}

export type Page = {
    key: 'experience' | 'projects' | 'education' | 'references' | 'recommendations';
    label: string;
    data: WorkExperience[] | Project[] | Education[] | Reference[] | Recommendation[];
    component: Component;
}

export type AppColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';