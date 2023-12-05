<script setup lang="ts">
import { type WorkExperience } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, type PropType } from 'vue';
import { useAppStore } from '@/stores/app.store';

const props = defineProps({
    data: {
        type: Array as PropType<WorkExperience[]>
    }
});

const appColor = computed(() => useAppStore().getAppColor);
</script>

<template>
    <div class="overflow-hidden relative dark:text-white flex flex-col gap-8">
        <div class="border-gray-200 dark:border-zinc-800 border p-7 rounded" v-for="job in data">
            <div class="flex flex-col md:flex-row md:gap-1 gap-4">
                <div class="md:w-96 flex flex-col gap-2 pr-4">
                    <img v-if="job?.logo_url" :src="job.logo_url" class="" />
                    <h2 class="text-xl font-bold uppercase">
                        {{ job?.company }}
                    </h2>
                    <a :href="job.url" target="_blank" class="text-xs flex items-center gap-1 text-gray-700 dark:text-gray-200">
                        {{ job.url }} <Icon icon="majesticons:open-line" width="14px" />
                    </a>
                    <div class="mt-4">
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
                            <li v-for="bullet in job.bullets" class=" mb-3 list-none relative">
                                <Icon icon="majesticons:chevron-right" width="18px" :class="`absolute -left-5 top-0.5 text-${appColor}-800 dark:text-${appColor}-500`" />
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