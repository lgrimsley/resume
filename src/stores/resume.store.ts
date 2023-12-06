import { defineStore } from 'pinia'
import { 
  type Resume,
  type Basics,
  type Profile,
  type WorkExperience,
  type Project,
  type Education,
  type Skills,
  type SoftSkills,
  type ResumeState,
  type Information,
  type Reference,
  type Recommendation
 } from '../types/resume';
import { useAppStore } from './app.store';
import { pageview } from 'vue-gtag';

export const useResumeStore = defineStore('resume', {
  state: (): ResumeState => ({
    resume: null,
    initialized: false
  }),
  getters: {
    getResume: (state): Resume | null => state.resume,
    getBasics: (state): Basics | null => state.resume?.basics ?? null,
    getInformation: (state): Information | null => state.resume?.basics.information ?? null,
    getProfiles: (state): Profile[] | [] => state.resume?.basics.profiles ?? [],
    getImageUrl: (state): string | null => state.resume?.basics.image ?? null,
    getWorkExperience: (state): WorkExperience[] | []  => state.resume?.work ?? [],
    getProjects: (state): Project[] | []  => state.resume?.projects ?? [],
    getEducation: (state): Education[] | []  => state.resume?.education ?? [],
    getSkills: (state): Skills | null  => state.resume?.skills ?? null,
    getSoftSkills: (state): SoftSkills | null => state.resume?.softSkills ?? null,
    getReferences: (state): Reference[] | [] => state.resume?.references ?? [],
    getRecommendations: (state): Recommendation[] | [] => state.resume?.recommendations ?? [],
  },
  actions: {
    async hydrate(force = false) {
      if (!force && this.initialized) return;
      try {
        const response = await fetch(import.meta.env.VITE_JSON_RESUME_URL);
        const resume = await response.json() as Resume;
        this.setResume(resume);
        useAppStore().setPagesFromResume(resume);
      } catch (error) {
        console.error("Error loading resume", error);
      }
    },
    setResume(resume: Resume) {
      this.resume = resume;
      this.initialized = true;
    }
  }
});