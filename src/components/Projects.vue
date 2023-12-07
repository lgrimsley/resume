<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { type Project } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, type PropType } from 'vue';
import SkillSmall from './SkillSmall.vue';

const props = defineProps({
    data: {
        type: Array as PropType<Project[]>
    }
});

const borderClass = computed(() => useAppStore().getBorderClass);
const textColorClass = computed(() => useAppStore().getTextColorClass);
</script>

<template>
   <div class="overflow-hidden relative dark:text-white flex flex-col gap-8">
        <div class="bg-white/80 dark:bg-zinc-800/20 p-6 lg:p-7 rounded-sm" v-for="project in data">
            <div class="flex gap-3 items-center mb-8 justify-between md:flex-row flex-col">
                <h2 class="text-3xl font-semibold uppercase tracking-wider flex ">
                    {{ project?.name }} 
                </h2>
                <h4 class="text-sm lg:text-sm whitespace-nowrap tracking-wider font-light flex flex-row justify-center items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <a :href="project.url" target="_blank" >
                            {{ project?.url }}
                    </a>
                    <span v-if="project.repo" class="">·</span>
                    <span v-if="project.repo" >
                        <span v-if="!project.repo.private && project.repo.url" >
                            <a :href="project.repo.url" target="_blank" class="flex gap-1 items-center">
                                <Icon :icon="project.repo.icon" width="20px" :class="`mr-1 ${textColorClass}`" />
                                {{ project.repo.access }}
                            </a>
                        </span>
                        <span v-else-if="project.repo.private && !project.repo.access" class="flex gap-1 items-center">
                            <Icon :icon="project.repo.icon" width="20px" :class="`mr-1 ${textColorClass}`" />
                            Private
                        </span>
                        <span v-else class="flex gap-1 items-center">
                            <Icon :icon="project.repo.icon" width="20px" :class="`mr-1 ${textColorClass}`" />
                            {{ project.repo.access }}
                        </span>
                    </span>
                </h4>
            </div>
            <div class="flex md:flex-row flex-col gap-8">
      
                <div class="md:w-3/5 flex flex-col gap-4 flex-3">
                    <p class="text-lg tracking-wide" v-if="project?.summary">
                        {{ project.summary }}
                    </p>
        
                    <ul v-if="project?.bullets.length" class="pl-4">
                        <li v-for="bullet in project.bullets" class="list-none relative">
                            <Icon icon="majesticons:chevron-right" width="18px" :class="`absolute -left-5 top-0.5 ${textColorClass}`" />
                            <p class="ml-1 font-light tracking-wide">
                                {{ bullet }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="md:w-2/5 flex flex-2 flex-col">
                    <img v-if="project.image_url" :src="project.image_url" class="rounded-sm mb-8 border border-zinc-800 dark:border-zinc-600"/>
                    <div class="flex h-fit flex-wrap justify-center md:justify-start">
                        <SkillSmall v-for="skill in project.keywords" :skill="skill" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>