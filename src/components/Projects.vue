<script setup lang="ts">
import { type Project } from '@/types/resume';
import { type PropType } from 'vue';

const props = defineProps({
    projects: {
        type: Array as PropType<Project[]>
    }
});
</script>

<template>
   <div class="p-7 shadow md:rounded-xl bg-white overflow-hidden relative">
        <div class="mb-5 item-section" v-for="project, index in projects">
            <div class="flex">
                <div class="w-1/3 flex flex-col">
                    <h2 class="text-xl font-bold uppercase mb-4">
                        {{ project?.name }}
                    </h2>
                    <div class="flex flex-wrap w-3/4">
                        <span v-for="skill in project.keywords" class="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2">{{ skill }}</span>
                    </div>
                </div>
                <div class="w-2/3">
                    <p class="mb-3 text-lg" v-if="project?.summary">
                        {{ project.summary }}
                    </p>
                    <ul v-if="project?.bullets.length" class="pl-4">
                        <li v-for="bullet in project.bullets" class=" mb-3 list-[disclosure-closed]">
                            <p class="text-sm">
                                {{ bullet }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="(index+1) != projects?.length" class="h-[1px] w-full my-8 bg-zinc-300"></div>
        </div>
    </div>
</template>