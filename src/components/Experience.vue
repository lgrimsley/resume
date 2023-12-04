<script setup lang="ts">
import { type WorkExperience } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { type PropType } from 'vue';

const props = defineProps({
    experience: {
        type: Array as PropType<WorkExperience[]>
    }
});
</script>

<template>
    <div class="px-7 overflow-hidden relative dark:text-white flex flex-col gap-8">
        <div class="border-gray-200 dark:border-zinc-800 border p-7 rounded" v-for="job, index in experience">
            <div class="flex flex-col md:flex-row md:gap-1 gap-4">
                <div class="md:w-96 flex flex-col gap-4">
                    <h2 class="text-xl font-bold uppercase">
                        {{ job?.company }}
                    </h2>
                    <a :href="job.url" target="_blank" class="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-200">
                        {{ job.url }} <Icon icon="majesticons:open-line" width="16px" />
                    </a>
                    <div>
                        <h5 v-for="position in job.positions" class="text-sm mb-2 flex flex-col font-semibold">
                            {{ position.position }} <small class="ml-1 text-gray-500 dark:text-gray-300 font-light"> {{ position.startDate }} - {{ position.endDate }} </small>
                        </h5>
                    </div>
                </div>
                <div class="w-full">
                    <p class="mb-2 text-lg" v-if="job?.summary">
                        {{ job.summary }}
                    </p>
                    <div v-if="job?.bullets.length">
                        <h5 class="text-sm font-bold mb-2 uppercase">Responsibilities</h5>
                        <ul  class="pl-4">
                            <li v-for="bullet in job.bullets" class=" mb-3 list-[disclosure-closed]">
                                <p class="text-sm ml-1">
                                    {{ bullet }}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>