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

const formatDate = (dateString: string) => {
    if (!dateString) return '';

    const [year, month] = dateString.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' }); // e.g., 'May 2022'
};

const appColor = computed(() => useAppStore().getAppColor);
</script>

<template>
    <div class="overflow-hidden relative dark:text-white flex flex-col gap-8">
        <div class="bg-gray-200/30 dark:bg-zinc-800/20 p-6 md:p-8 rounded-sm" v-for="job in data">
            <div class="flex flex-col md:flex-row md:gap-1 gap-4">
                <div class="md:w-96 flex flex-col gap-3 pr-2">
                    <img v-if="job?.logo_url" :src="job.logo_url" class="" />
                    <h2 class="text-3xl font-semibold uppercase tracking-wider">
                        {{ job?.company }}
                    </h2>
                    <a :href="job.url" target="_blank" class="text-xs flex items-center gap-1 text-gray-700 dark:text-gray-200">
                        {{ job.url }} <Icon icon="majesticons:open-line" width="14px" />
                    </a>
                    <div class="mt-4">
                        <h5 class="font-semibold mb-3 uppercase tracking-wider">{{ job.positions.length ? (job.positions.length > 1 ? 'Roles' : 'Role') : '' }}</h5>
                        <h5 v-for="position in job.positions" class="text-lg mb-2 flex flex-col font-light tracking-wide">
                            {{ position.position }} 
                            <small class="-ml-1 text-zinc-600 dark:text-gray-300 font-normal flex items-center gap-1">
                                <Icon icon="ic:baseline-turn-left" width="22px" class="rotate-180 -mt-1" />
                                {{ formatDate(position.startDate) }} - {{ formatDate(position.endDate) }} 
                            </small>
                        </h5>
                    </div>
                </div>
                <div class="w-full">
                    <p class="mb-2 text-lg font-light" v-if="job?.summary">
                        {{ job.summary }}
                    </p>
                    <div v-if="job?.bullets.length">
                        <h5 class="font-semibold mb-3 uppercase tracking-wider">Responsibilities</h5>
                        <ul  class="pl-4">
                            <li v-for="bullet in job.bullets" class=" mb-3 list-none relative">
                                <Icon icon="majesticons:chevron-right" width="18px" :class="`absolute -left-5 top-0.5 text-${appColor}-500 `" />
                                <p class="ml-1 font-light tracking-wide">
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