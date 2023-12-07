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

const appColor = computed(() => useAppStore().getAppColor);
const getBorderClass = computed(() => useAppStore().getBorderClass);
</script>

<template>
   <div class="overflow-hidden relative dark:text-white">
        <div class="bg-gray-200/30 dark:bg-zinc-800/20 p-6 lg:p-7 rounded-sm" v-for="project in data">
            <div class="flex md:flex-row flex-col gap-4">
                <div class="md:w-96 flex flex-col gap-3">
                    <h2 class="text-2xl font-semibold uppercase tracking-wider">
                        {{ project?.name }}
                    </h2>
                    <a :href="project.url" target="_blank" class="text-xs flex items-center gap-1 text-gray-700 dark:text-gray-200">
                        {{ project.url }} <Icon icon="majesticons:open-line" width="16px" />
                    </a>
                    <div class="flex flex-wrap mt-4">
                        <SkillSmall v-for="skill in project.keywords" :skill="skill" />
                    </div>
                </div>
                <div class="w-full flex flex-col gap-3">
                    <p class="text-lg" v-if="project?.summary">
                        {{ project.summary }}
                    </p>
                    <img v-if="project.image_url" :src="project.image_url" class="rounded-lg w-5/6 border border-gray-700 dark:border-zinc-600"/>

                    <ul v-if="project?.bullets.length" class="pl-4">
                        <li v-for="bullet in project.bullets" class=" mb-3 list-none relative">
                            <Icon icon="majesticons:chevron-right" width="18px" :class="`absolute -left-5 top-0.5 text-${appColor}-500 dark:text-${appColor}-500`" />
                            <p class="ml-1 font-light tracking-wide">
                                {{ bullet }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>