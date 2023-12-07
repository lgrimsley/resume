<script setup lang="ts">
import { type Recommendation } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, ref, type PropType } from 'vue';
import { useAppStore } from '@/stores/app.store';

const props = defineProps({
    data: {
        type: Array as PropType<Recommendation[]>
    }
});

const textColorClass = computed(() => useAppStore().getTextColorClass);
const expandedStates = ref(props.data?.map(() => false));

const toggleSummary = (index: number) => {
    if (!expandedStates.value) { return; }
    expandedStates.value[index] = !expandedStates.value[index];
};

const truncateSummary = (summary: string) => {
    return summary.length > 300 ? summary.substring(0, 300) + '...' : summary;
};

</script>

<template>
    <div class="overflow-hidden relative dark:text-white flex flex-wrap flex-col md:flex-row gap-4 ">
        <div class="bg-white/80 dark:bg-zinc-800/20 p-6 md:p-7 rounded-sm w-full" v-for="recommendation, index in data">
            <div class="flex md:justify-between items-baseline w-full md:px-12 md:flex-row flex-col">
                <h3 class="font-semibold text-xl mb-4 ">
                    {{ recommendation.name }} <br/>
                    <small class="font-light">{{ recommendation.position }} - {{ recommendation.company }}</small>
                </h3>
                <ul class="flex-col flex gap-2 text-sm text-right">
                    <li class="flex gap-2 items-center md:flex-row-reverse">
                        <Icon icon="cib:linkedin" :class="textColorClass" width="16px" />
                        <a :href="recommendation.linkedin" target="_blank" class="flex items-center gap-1 text-gray-700 dark:text-gray-200">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="flex pt-4 mt-4 md:mt-0 pb-6 gap-1 relative">
                    <Icon icon="fontisto:quote-left" :class="`absolute ${textColorClass} -ml-4 md:ml-0 hidden md:block`" width="24px" /> 
                    <p v-html="(expandedStates && expandedStates[index]) ? recommendation.summary : truncateSummary(recommendation.summary)" class="flex-col flex gap-4 md:px-12 text-ellipsis overflow-hidden z-2 relative font-light"></p>
                </div>
                <button @click="toggleSummary(index)" class="text-xs flex flex-col justify-center items-center gap-1" :class="{'flex-col-reverse': expandedStates && expandedStates[index] }">
                    {{ expandedStates && expandedStates[index] ? 'Show Less' : 'Read More' }}
                    <Icon icon="fe:arrow-up" width="24px" :class="[{'rotate-180': expandedStates && !expandedStates[index] }, `transition ease-in-out duration-100 ${textColorClass}`]" />
                </button>
            </div>
        </div>
    </div>
</template>