<script setup lang="ts">
import Basic from '@/components/Basic.vue'
import Information from '@/components/Information.vue'
import Skills from '@/components/Skills.vue';
import About from '@/components/About.vue';
import ResumeJson from '@/components/ResumeJson.vue';
import Footer from '@/components/Footer.vue';

import { useResumeStore } from '@/stores/resume.store';
import { useAppStore } from '@/stores/app.store';
import { onMounted, computed } from 'vue';
import { event } from 'vue-gtag';
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
    if (useAppStore().getIsGtagActive) {
        event('download', {'event_category': 'engagement', 'event_label': 'download_resume'});
    }
}
</script>

<template>
    <main class=" min-h-screen max-w-screen overflow-x-hidden" :class="{'dark bg-zinc-900 text-white': useAppStore().getDarkMode, 'bg-gray-100': !useAppStore().getDarkMode}">
        <div class="flex justify-center items-top lg:p-8">
            <div class="grid gap-4 lg:grid-cols-3 xl:w-5/6 w-screen relative">
                
                <!-- left col -->
                <div class="flex flex-col gap-4 justify-start w-screen md:w-full">
                    <Basic v-if="basics" :basics="basics" @download-resume="downloadResume" />
                    <Information v-if="information" :information="information" />
                    <Skills v-if="skills && softSkills" :skills="skills" :soft-skills="softSkills"  />
                </div>
                <!-- end left col -->
                
                <!-- right col -->
                <div class="lg:col-span-2 lg:pr-4 lg:pl-7 w-screen lg:w-full">
                    <div class="bg-white/80 dark:bg-zinc-800/20 shadow-sm">
                        <Toolbar />
                        <About v-if="basics" :basics="basics" />
                    </div>
                    <Nav />
                    <Transition name="fade" mode="out-in" appear :duration="150">
                        <component v-if="useAppStore().getActivePage?.label" :is="useAppStore().getActivePage?.component" :data="useAppStore().getActivePage?.data" />
                    </Transition>
                </div>
                <!-- end right col -->

            </div>
        </div>
        <footer>
            <Footer />
        </footer>
        <ResumeJson class="transition ease-in-out duration-500"  :style="showJson ? 'transform: translateX(0)' : 'transform: translateX(120vw)'" />
    </main>
</template>
