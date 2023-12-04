import { defineStore } from 'pinia'
import { type Page, type AppState } from '../types/app';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        page: 'experience',
        darkMode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false
    }),
    getters: {
        getDarkMode: (state): boolean => state.darkMode,
        getPage: (state): Page => state.page
    },
    actions: {
        setDarkMode(darkMode: boolean) {
            this.darkMode = darkMode;
        },
        setPage(page: Page) {
            this.page = page;
        }
    }
});