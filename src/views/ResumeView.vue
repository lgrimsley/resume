<script setup lang="ts">
import Basic from '@/components/Basic.vue'
import Information from '@/components/Information.vue'
import Skills from '@/components/Skills.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import Projects from '@/components/Projects.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

import { useResumeStore } from '@/stores/resume.store';
import { useAppStore } from '@/stores/app.store';
import { onMounted, computed } from 'vue';

const basics = computed(() => useResumeStore().getBasics);
const information = computed(() => useResumeStore().getInformation);
const skills = computed(() => useResumeStore().getSkills);
const softSkills = computed(() => useResumeStore().getSoftSkills);
const workExperience = computed(() => useResumeStore().getWorkExperience);
const projects = computed(() => useResumeStore().getProjects);
const education = computed(() => useResumeStore().getEducation);

onMounted(async () => {
    await useResumeStore().hydrate();
});

const downloadResume = () => {
    if (!basics.value?.resume_url) { return; }
    const link = document.createElement('a');
    link.href = basics.value.resume_url;
    link.download = basics.value.resume_url;
    link.target = '_blank';
    link.click();
}
</script>

<template>
    <main class="flex justify-center items-top md:p-8 " :class="{'dark bg-zinc-900': useAppStore().getDarkMode, 'bg-white': !useAppStore().getDarkMode}">
        <div class="grid gap-8 lg:grid-cols-3 container xl:w-4/5 lg:w-5/6 relative">
            <!-- left col -->
            <div class="flex flex-col md:gap-2 gap-2 justify-start">
                <Basic v-if="basics" :basics="basics" @download-resume="downloadResume" />
                <Information v-if="information" :information="information" />
                <Skills v-if="skills && softSkills" :skills="skills" :soft-skills="softSkills" />
            </div>
            <!-- end left col -->

            <!-- right col -->
            <div class="space-y-5 lg:col-span-2">
                <About 
                v-if="basics && workExperience && projects && education" 
                :basics="basics"
                :work-experience="workExperience"
                :projects="projects"
                :education="education"
                />
                <Experience v-if="useAppStore().getPage === 'experience' && workExperience" :experience="workExperience" />
                <Education v-if="useAppStore().getPage === 'education' && education" :education="education" />
                <Projects v-if="useAppStore().getPage === 'projects' && projects" :projects="projects" />
            </div>
            <!-- end right col -->

            <DarkModeToggle class="fixed bottom-4 right-4 scale-75" />
        </div>
    </main>
</template>
