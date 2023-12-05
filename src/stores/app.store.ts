import { defineStore } from 'pinia'
import { type Page, type AppState, type AppColor } from '../types/app';
import { type Resume } from '../types/resume';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import Projects from '@/components/Projects.vue';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        activePage: null,
        availablePages: [],
        color: getRandomColor(),
        darkMode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false
    }),
    getters: {
        getDarkMode: (state): boolean => state.darkMode,
        getActivePage: (state): Page | null => state.activePage,
        getAvailablePages: (state): Page[] => state.availablePages,
        getAppColor: (state): AppColor => state.color,
        getGradientClass: (state): string => {
            return `bg-gradient-to-tr from-${state.color}-600 to-${state.color}-900`;
        },
        getGradientHoverClass: (state): string => {
            return `hover:from-${state.color}-700 hover:to-${state.color}-900`;
        }
    },
    actions: {
        setDarkMode(darkMode: boolean) {
            this.darkMode = darkMode;
        },
        setActivePage(page: Page) {
            this.activePage = page;
        },
        setAvailablePages(pages: Page[]) {
            this.availablePages = pages;
            if (pages.length > 0) {
                this.setActivePage(pages[0]);
            }
        },
        setPagesFromResume(resume: Resume) {
            let pages: Page[] = [];
            if (resume.work.length > 0) {
                pages.push({
                    key: 'experience',
                    label: 'Experience',
                    data: resume.work,
                    component: Experience
                });
            }
            if (resume.projects.length > 0) {
                pages.push({
                    key: 'projects',
                    label: 'Projects',
                    data: resume.projects,
                    component: Projects
                });
            }
            if (resume.education.length > 0) {
                pages.push({
                    key: 'education',
                    label: 'Education',
                    data: resume.education,
                    component: Education
                });
            }
            this.setAvailablePages(pages);
        },
        setColor(color: AppColor) {
            this.color = color;
        }
    }
});

function getRandomColor(): AppColor {
    const colors = [
        'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 
        'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 
        'fuchsia', 'pink', 'rose'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex] as AppColor;
}