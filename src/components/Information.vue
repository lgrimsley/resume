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
    <div class="mt-0 lg:mt-8 px-6 py-8 lg:p-7 overflow-hidden relative dark:text-white w-full bg-white/80 dark:bg-zinc-800/20 rounded-sm">
        <div class="space-y-2 tracking-wider">
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-300">Location</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-200">{{ information?.location}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-300">Years of Experience</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-200">{{ information?.yearsOfExperience}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-300">Availability</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-200">{{ information?.availability}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-300">Relocation</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-200">{{ information?.relocation}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600 dark:text-gray-300">Remote</div>
                <div class="font-medium text-right text-gray-900 dark:text-gray-200">{{ information?.remote}}</div>
            </div>
        </div>
    </div>
</template>