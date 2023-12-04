<script setup lang="ts">
import { type Project } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { type PropType } from 'vue';

const props = defineProps({
    projects: {
        type: Array as PropType<Project[]>
    }
});
</script>

<template>
   <div class="px-7 overflow-hidden relative dark:text-white">
        <div class="border-gray-200 dark:border-zinc-800 border p-7 rounded" v-for="project, index in projects">
            <div class="flex md:flex-row flex-col gap-4">
                <div class="md:w-96 flex flex-col gap-3">
                    <h2 class="text-xl font-bold uppercase">
                        {{ project?.name }}
                    </h2>
                    <a :href="project.url" target="_blank" class="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-200">
                        {{ project.url }} <Icon icon="majesticons:open-line" width="16px" />
                    </a>
                    <div class="flex flex-wrap w-3/4 mt-2">
                        <span v-for="skill in project.keywords" class="bg-gray-200 dark:bg-zinc-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2 dark:text-gray-100 ">{{ skill }}</span>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-3">
                    <p class="text-lg" v-if="project?.summary">
                        {{ project.summary }}
                    </p>
                    <img v-if="project.image_url" :src="project.image_url" class="rounded-lg w-5/6 border border-gray-700 dark:border-zinc-600"/>

                    <ul v-if="project?.bullets.length" class="pl-4">
                        <li v-for="bullet in project.bullets" class=" mb-3 list-[disclosure-closed]">
                            <p class="text-sm">
                                {{ bullet }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="(index+1) != projects?.length" class="h-[1px] w-full my-8 bg-zinc-300 dark:bg-gray-500 "></div>
        </div>
    </div>
</template>