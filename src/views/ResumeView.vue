<script setup lang="ts">
import Basic from '@/components/Basic.vue'
import Information from '@/components/Information.vue'
import Skills from '@/components/Skills.vue';
import About from '@/components/About.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import ResumeJson from '@/components/ResumeJson.vue';

import { useResumeStore } from '@/stores/resume.store';
import { useAppStore } from '@/stores/app.store';
import { onMounted, computed, type Component } from 'vue';
import Nav from '@/components/Nav.vue';
import Toolbar from '@/components/Toolbar.vue';

const basics = computed(() => useResumeStore().getBasics);
const information = computed(() => useResumeStore().getInformation);
const skills = computed(() => useResumeStore().getSkills);
const softSkills = computed(() => useResumeStore().getSoftSkills);
const showJson = computed(() => useAppStore().getShowJson);

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
    <main class="flex justify-center items-top md:p-8 min-h-screen" :class="{'dark bg-zinc-900 text-white': useAppStore().getDarkMode, 'bg-white': !useAppStore().getDarkMode}">
        <div class="grid gap-4 lg:grid-cols-3 xl:w-4/5 w-full relative">
            <!-- left col -->
            <div class="flex flex-col gap-2 justify-start">
                <Basic v-if="basics" :basics="basics" @download-resume="downloadResume" />
                <Information v-if="information" :information="information" class="px-7 md:px-0" />
                <Skills v-if="skills && softSkills" :skills="skills" :soft-skills="softSkills" class="px-7 md:px-0" />
            </div>
            <!-- end left col -->

            <!-- right col -->
            <div class="space-y-5 lg:col-span-2 px-7">
                <Toolbar />
                <About v-if="basics" :basics="basics" />
                <Nav />
                <component v-if="useAppStore().getActivePage?.label" :is="useAppStore().getActivePage?.component" :data="useAppStore().getActivePage?.data" />
            </div>
            <!-- end right col -->

            <DarkModeToggle class="fixed bottom-4 right-4 scale-75" />
        </div>

        <ResumeJson class="transition ease-in-out duration-500"  :style="showJson ? 'transform: translateX(0)' : 'transform: translateX(100vw)'" />
    </main>
</template>
