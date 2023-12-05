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

const appColor = computed(() => useAppStore().getAppColor);
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
        <div class="border-gray-200 dark:border-zinc-800 border p-7 rounded w-full" v-for="recommendation, index in data">
            <div class="flex justify-between items-baseline w-full px-12">
                <h3 class="font-semibold text-xl mb-4 ">
                    {{ recommendation.name }} <br/>
                    <small class="font-normal">{{ recommendation.position }} - {{ recommendation.company }}</small>
                </h3>
                <ul class="flex-col flex gap-2 text-sm text-right">
                    <li class="flex gap-2 items-center flex-row-reverse">
                        <Icon icon="entypo:email" :class="`text-${appColor}-500`" width="16px" /> <a :href="`mailto:${recommendation.email}`">{{ recommendation.email }}</a>
                    </li>
                    <li class="flex gap-2 items-center flex-row-reverse">
                        <Icon icon="cib:linkedin" :class="`text-${appColor}-500`" width="16px" />
                        <a :href="recommendation.linkedin" target="_blank" class="flex items-center gap-1 text-gray-700 dark:text-gray-200">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex pr-4 pt-4 pb-6 gap-1 relative">
                <Icon icon="fontisto:quote-left" :class="`absolute text-${appColor}-800`" width="24px" /> 
                <p v-html="(expandedStates && expandedStates[index]) ? recommendation.summary : truncateSummary(recommendation.summary)" class="flex-col flex gap-4 px-12 text-ellipsis overflow-hidden"></p>
                <button @click="toggleSummary(index)" class="absolute bottom-0 right-20 underline text-sm">
                    {{ expandedStates && expandedStates[index] ? 'Show Less' : 'Read More' }}
                </button>
            </div>
        </div>
    </div>
</template>