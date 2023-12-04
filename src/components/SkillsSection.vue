<script setup lang="ts">
import { type Skills, type SoftSkills } from '@/types/resume';
import { defineProps, type PropType } from 'vue';

const props = defineProps({
    skills: {
        type: Object as PropType<Skills>
    },
    softSkills: {
        type: Object as PropType<SoftSkills>
    }
});
</script>

<template>
   <div class="p-7 shadow md:rounded-xl bg-white overflow-hidden relative">
        
        <div class="flex flex-col gap-6">
            <div v-for="list, category in skills" class="flex flex-col space-between ">
                <h3 class="text-sm font-bold mb-4 uppercase">{{ category }}</h3>
                <div class="flex flex-wrap">
                    <span v-for="skill in list" class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ skill }}</span>
                </div>
            </div>
        </div>
    </div>
</template>