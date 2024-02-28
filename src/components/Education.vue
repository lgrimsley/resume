<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { type Education } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, type PropType } from 'vue';
import SkillSmall from './SkillSmall.vue';

const props = defineProps({
    data: {
        type: Array as PropType<Education[]>
    }
});

const formatDate = (dateString: string) => {
    if (!dateString) return '';

    const [year, month] = dateString.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' }); // e.g., 'May 2022'
};

const borderClass = computed(() => useAppStore().getBorderClass);
const textColorClass = computed(() => useAppStore().getTextColorClass);
</script>

<template>
    <div class="overflow-hidden relative dark:text-white flex flex-col gap-8">
        <div class="bg-white/80 dark:bg-zinc-800/20 p-6 md:p-8 rounded-sm" v-for="education in data">
            <div class="flex-col gap-2 flex-grow">
                <a :href="education.url" target="_blank" >
                    <h3 class="text-3xl font-semibold uppercase tracking-wider flex">
                        {{ education?.institution }} 
                        
                    </h3>
                </a>
                <ul>
                    <li>{{ education.area }}
                    </li>
                </ul>
                <div class="flex flex-col flex-2">
                        <Icon icon="majesticons:chevron-right" width="20px" :class="`absolute -left-6 top-[3px] ${textColorClass}`" />
                        {{ education.studyType }} 
                        <small class="-ml-1 mt-1 text-zinc-600 dark:text-gray-400 font-normal flex items-center gap-1 text-sm ">
                            <Icon icon="ic:baseline-turn-left" width="22px" class="rotate-180 -mt-1"  />
                            {{ formatDate(education.startDate) }} - {{ formatDate(education.endDate) }} 
                        </small>
                </div>
            </div>
        </div>
    </div>
</template>