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
    <div class="p-7 shadow md:rounded-xl bg-white overflow-hidden relative">
        <h2 class="text-lg font-semibold mb-4">About me</h2>
        <p class="text-gray-600 mb-5">
            {{ basics?.summary }}
        </p>
        
        <div class="border-t border-gray-200 my-5"></div>
        
        <ul class="flex space-x-8 font-medium">
            <li 
            v-if="workExperience?.length" 
            class="pb-2 cursor-pointer" 
            :class="{'border-b-2 border-violet-700': useAppStore().getPage == 'experience'}"
            @click="useAppStore().setPage('experience')"
            >
                Work Experience
            </li>
            <li 
            v-if="projects?.length" 
            class="pb-2 cursor-pointer" 
            :class="{'border-b-2 border-violet-700': useAppStore().getPage == 'projects'}" 
            @click="useAppStore().setPage('projects')"
            >
                Projects
            </li>
            <li 
            v-if="education?.length" 
            class="pb-2 cursor-pointer" 
            :class="{'border-b-2 border-violet-700': useAppStore().getPage == 'education'}"
            @click="useAppStore().setPage('education')"
            >
                Education
            </li>
        </ul>
    </div>
</template>