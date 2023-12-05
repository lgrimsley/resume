<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { type Project } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, type PropType } from 'vue';

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
        <div class="border-gray-200 dark:border-zinc-800 border p-7 rounded" v-for="project in data">
            <div class="flex md:flex-row flex-col gap-4">
                <div class="md:w-96 flex flex-col gap-2 pr-4">
                    <h2 class="text-xl font-bold uppercase">
                        {{ project?.name }}
                    </h2>
                    <a :href="project.url" target="_blank" class="text-xs flex items-center gap-1 text-gray-700 dark:text-gray-200">
                        {{ project.url }} <Icon icon="majesticons:open-line" width="16px" />
                    </a>
                    <div class="flex flex-wrap mt-4">
                        <span v-for="skill in project.keywords" :class="getBorderClass" class="border text-black dark:text-white rounded-sm px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2 dark:text-gray-100 ">{{ skill }}</span>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-3">
                    <p class="text-lg" v-if="project?.summary">
                        {{ project.summary }}
                    </p>
                    <img v-if="project.image_url" :src="project.image_url" class="rounded-lg w-5/6 border border-gray-700 dark:border-zinc-600"/>

                    <ul v-if="project?.bullets.length" class="pl-4">
                        <li v-for="bullet in project.bullets" class=" mb-3 list-none relative">
                            <Icon icon="majesticons:chevron-right" width="18px" :class="`absolute -left-5 top-0.5 text-${appColor}-800 dark:text-${appColor}-500`" />
                            <p class="text-sm">
                                {{ bullet }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>