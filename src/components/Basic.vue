<script setup lang="ts">
import { type Basics } from '@/types/resume';
import { type PropType } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    basics: {
        type: Object as PropType<Basics>
    }
});
</script>

<template>
    <div class="dark:bg-zinc-900 rounded-tr rounded-tl dark:text-white overflow-hidden relative">
        <div class="h-32 bg-cover" style="background-image: url('/abstract_bg.png'); background-position: 0% 90%;"></div>
        <div class="pt-14 p-7  relative">
            <span class="border border-black dark:border-gray-200 dark:text-gray-200 absolute p-1 text-xs rounded right-8 top-4">{{ basics?.status }}</span>
            <img v-if="basics?.image" :src="basics.image" alt="Avatar" class="absolute w-32 h-32 rounded-full -top-16 border-2 border-white dark:border-zinc-900" />
            <div class="flex space-between w-full items-center py-6">
                <div class="w-1/2">
                    <div class="text-2xl mb-1 font-semibold">{{ basics?.name }}</div>
                    <div class="text-gray-600 dark:text-gray-300">{{ basics?.label }}</div>
                </div>
                <ul class="flex space-x-4 w-1/2 justify-end">
                    <li>
                        <a :href="`mailto:${basics?.email}`" class="text-lg flex items-center gap-1 font-semibold mb-2">
                            <Icon icon="entypo:email" width="32px" class="text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100" />
                        </a>
                    </li>
                    <li v-for="profile in basics?.profiles">
                        <a :href="profile.url" target="_blank">
                            <Icon :icon="profile.icon" width="32px" class="text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex group text-center justify-center text-white rounded-lg mt-2" @click="$emit('download-resume')">
                <button class="w-5/6 bg-violet-600 dark:bg-violet-500 py-4 rounded-tl-lg rounded-bl-lg hover:bg-violet-800 dark:hover:bg-violet-600 font-semibold transition-ease-all">Download Resume</button>
                <button class="w-1/6 bg-violet-800 dark:bg-violet-600 py-4 text-center flex justify-center rounded-tr-lg rounded-br-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>