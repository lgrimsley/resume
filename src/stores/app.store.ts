import { defineStore } from 'pinia'
import { pageview } from 'vue-gtag';
import { type Page, type AppState, type AppColor } from '../types/app';
import { type Resume } from '../types/resume';
import colors from '@/colors';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import Projects from '@/components/Projects.vue';
import References from '@/components/References.vue';
import Recommendations from '@/components/Recommendations.vue';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        activePage: null,
        availablePages: [],
        color: getRandomColor(),
        showJson: false,
        gtagActive: (import.meta.env.VITE_GA_ID && import.meta.env.VITE_GA_ID !== ''),
        darkMode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false
    }),
    getters: {
        getDarkMode: (state): boolean => state.darkMode,
        getActivePage: (state): Page | null => state.activePage,
        getAvailablePages: (state): Page[] => state.availablePages,
        getAppColor: (state): AppColor => state.color,
        getShowJson: (state): boolean => state.showJson,
        getGradientClass: (state) => (color: AppColor | null = null): string => {
            return `bg-gradient-to-tr from-${color ?? state.color}-400/90 to-${color ?? state.color}-800/90 dark:from-${color ?? state.color}-600/90 dark:to-${color ?? state.color}-900/90`;
        },
        getGradientHoverClass: (state): string => {
            return `hover:from-${state.color}-700/90 hover:to-${state.color}-900/90`;
        },
        getBorderClass: (state): string => {
            return `dark:border-${state.color}-500 border-${state.color}-800`;
        },
        getBorderHoverClass: (state): string => {
            return `dark:hover:border-${state.color}-500 hover:border-${state.color}-800`;
        },
        getTextColorClass: (state): string => {
            return `text-${state.color}-800 dark:text-${state.color}-500`;
        },
        getIsGtagActive: (state): boolean => state.gtagActive
    },
    actions: {
        setDarkMode(darkMode: boolean) {
            this.darkMode = darkMode;
        },
        setActivePage(page: Page) {
            if (this.getIsGtagActive) {
                pageview({"page_title": page.label, "page_path": "/"+page.key});
            }
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
            if (resume.references.length > 0) {
                pages.push({
                    key: 'references',
                    label: 'References',
                    data: resume.references,
                    component: References
                });
            }
            if (resume.recommendations.length > 0) {
                pages.push({
                    key: 'recommendations',
                    label: 'Recommendations',
                    data: resume.recommendations,
                    component: Recommendations
                });
            }
            this.setAvailablePages(pages);
        },
        setActivePageFromKey(key: string) {
            const page = this.availablePages.find(p => p.key === key);
            if (page) {
                this.setActivePage(page);
            }
        },
        setColor(color: AppColor) {
            this.color = color;
        },
        setShowJson(showJson: boolean) {
            this.showJson = showJson;
        }
    }
});

function getRandomColor(): AppColor {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex] as AppColor;
}