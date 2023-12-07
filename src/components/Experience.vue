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

const textColorClass = computed(() => useAppStore().getTextColorClass);
</script>

<template>
    <div class="overflow-hidden relative dark:text-white flex flex-col gap-8">
        <div class="bg-white/80 dark:bg-zinc-800/20 p-6 md:p-8 rounded-sm" v-for="job in data">
            <div class="flex gap-2 items-center mb-8 justify-between flex-col md:flex-row">
                <img v-if="job?.logo_url" :src="job.logo_url" class="" />
                <a :href="job.url" target="_blank" >
                    <h2 class="text-3xl font-semibold uppercase tracking-wider flex">
                        {{ job?.company }} 
                    </h2>
                </a>
                <h4 class="text-sm lg:text-lg whitespace-nowrap tracking-wider font-light flex justify-center items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <span>
                        {{ job?.tenure }}
                    </span> 
                    <span >·</span>
                    <span>
                        {{ job?.location  }}
                    </span>
                </h4>
            </div>
            <div class="flex flex-col md:flex-row md:gap-8 gap-4 ">
                <div class="flex-1">
                    <p class="mb-2 text-lg font-light" v-if="job?.summary">
                        {{ job.summary }}
                    </p>
                    <div v-if="job?.bullets.length">
                        <h5 class="font-semibold mb-3 uppercase tracking-wider">Responsibilities</h5>
                        <ul  class="pl-4">
                            <li v-for="bullet in job.bullets" class=" mb-3 list-none relative">
                                <Icon icon="majesticons:chevron-right" width="20px" :class="`absolute -left-5 top-[3px] ${textColorClass}`" />
                                <p class="ml-1 font-light tracking-wide">
                                    {{ bullet }}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col flex-2">
                    <h4 class="font-semibold mb-3 uppercase tracking-wider">{{ job.positions.length ? (job.positions.length > 1 ? 'Roles' : 'Role') : '' }}</h4>
                    <h5 v-for="position in job.positions" class="text-md mb-3 flex flex-col font-normal tracking-wide ml-5 relative">
                        <Icon icon="majesticons:chevron-right" width="20px" :class="`absolute -left-6 top-[3px] ${textColorClass}`" />
                        {{ position.position }} 
                        <small class="-ml-1 mt-1 text-zinc-600 dark:text-gray-400 font-normal flex items-center gap-1 text-sm ">
                            <Icon icon="ic:baseline-turn-left" width="22px" class="rotate-180 -mt-1"  />
                            {{ formatDate(position.startDate) }} - {{ formatDate(position.endDate) }} 
                        </small>
                    </h5>
                </div>
            </div>
        </div>
    </div>
</template>