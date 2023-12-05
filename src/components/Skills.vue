<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { type Skills, type SoftSkills } from '@/types/resume';
import { computed, type PropType } from 'vue';

const props = defineProps({
    skills: {
        type: Object as PropType<Skills>
    },
    softSkills: {
        type: Object as PropType<SoftSkills>
    }
});

const getBorderClass = computed(() => useAppStore().getBorderClass);

</script>

<template>
   <div class="py-7 overflow-hidden relative dark:text-white">
        <div class="flex flex-col gap-6">
            <div v-for="list, category in skills" class="flex flex-col space-between ">
                <h3 class="text-sm font-bold mb-4 uppercase">{{ category }}</h3>
                <div class="flex flex-wrap">
                    <span v-for="skill in list"  :class="getBorderClass" class="border text-black dark:text-white rounded-sm px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2 dark:text-gray-100 ">{{ skill }}</span>
                </div>
            </div>
            <div v-if="softSkills?.length">
                <h3 class="text-sm font-bold mb-4 uppercase">Soft Skills</h3>
                <div class="flex flex-wrap">
                    <span v-for="skill in softSkills"  :class="getBorderClass" class="border text-black dark:text-white rounded-sm px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2 dark:text-gray-100 ">{{ skill }}</span>
                </div>
            </div>
        </div>
    </div>
</template>