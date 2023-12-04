<script setup lang="ts">
import { type Information } from '@/types/resume';
import { type PropType } from 'vue';

const props = defineProps({
    information: {
        type: Object as PropType<Information>
    }
});
</script>

<template>
    <div class="p-7 shadow md:rounded-xl bg-white overflow-hidden relative dark:bg-zinc-700 dark:text-white">
        <h2 class="text-lg font-semibold mb-4">Information</h2>
        <div class="space-y-3">
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-400">Location</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-300">{{ information?.location}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-400">Years of Experience</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-300">{{ information?.yearsOfExperience}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-400">Availability</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-300">{{ information?.availability}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-400">Relocation</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-300">{{ information?.relocation}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-400">Remote</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-300">{{ information?.remote}}</div>
            </div>
        </div>
    </div>
</template>