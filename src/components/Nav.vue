<script setup lang="ts">
import {
    type WorkExperience,
    type Project,
    type Education
} from '@/types/resume';
import { type PropType } from 'vue';
import { useAppStore } from '@/stores/app.store';

const props = defineProps({
    workExperience: {
        type: Object as PropType<WorkExperience[]>
    },
    projects: {
        type: Object as PropType<Project[]>
    },
    education: {
        type: Object as PropType<Education[]>
    }
});
</script>

<template>
    <ul class="flex space-x-8 font-medium mt-8 dark:text-white">
        <li 
        v-if="workExperience?.length" 
        class="pb-2 cursor-pointer border-b-2 border-transparent hover:border-violet-700 hover:dark:border-violet-600" 
        :class="{'border-violet-700 dark:border-violet-600': useAppStore().getPage == 'experience'}"
        @click="useAppStore().setPage('experience')"
        >
            Work Experience
        </li>
        <li 
        v-if="projects?.length" 
        class="pb-2 cursor-pointer border-b-2 border-transparent hover:border-violet-700 hover:dark:border-violet-600" 
        :class="{'border-violet-700 dark:border-violet-600 ': useAppStore().getPage == 'projects'}" 
        @click="useAppStore().setPage('projects')"
        >
            Projects
        </li>
        <li 
        v-if="education?.length" 
        class="pb-2 cursor-pointer border-b-2 border-transparent hover:border-violet-700 hover:dark:border-violet-600" 
        :class="{'border-violet-700 dark:border-violet-600': useAppStore().getPage == 'education'}"
        @click="useAppStore().setPage('education')"
        >
            Education
        </li>
    </ul>
</template>