<script setup lang="ts">
import {
    type WorkExperience,
    type Project,
    type Education,
    type Basics
} from '@/types/resume';
import { type PropType } from 'vue';
import { useAppStore } from '@/stores/app.store';

const props = defineProps({
    basics: {
        type: Object as PropType<Basics>
    },
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
    <div class="px-7 overflow-hidden relative dark:text-white">
        <h2 class="text-lg font-semibold mb-4 uppercase">About</h2>
        <p class="text-gray-600 mb-5 dark:text-gray-200">
            {{ basics?.summary }}
        </p>
                
        <ul class="flex space-x-8 font-medium mt-8">
            <li 
            v-if="workExperience?.length" 
            class="pb-2 cursor-pointer border-b-2 border-transparent hover:border-violet-700 hover:dark:border-violet-500" 
            :class="{'border-violet-700 dark:border-violet-500': useAppStore().getPage == 'experience'}"
            @click="useAppStore().setPage('experience')"
            >
                Work Experience
            </li>
            <li 
            v-if="projects?.length" 
            class="pb-2 cursor-pointer border-b-2 border-transparent hover:border-violet-700 hover:dark:border-violet-500" 
            :class="{'border-violet-700 dark:border-violet-500 ': useAppStore().getPage == 'projects'}" 
            @click="useAppStore().setPage('projects')"
            >
                Projects
            </li>
            <li 
            v-if="education?.length" 
            class="pb-2 cursor-pointer border-b-2 border-transparent hover:border-violet-700 hover:dark:border-violet-500" 
            :class="{'border-violet-700 dark:border-violet-500': useAppStore().getPage == 'education'}"
            @click="useAppStore().setPage('education')"
            >
                Education
            </li>
        </ul>
    </div>
</template>