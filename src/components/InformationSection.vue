<script setup lang="ts">
import { type Information } from '@/types/resume';
import { defineProps, type PropType } from 'vue';

const props = defineProps({
    information: {
        type: Object as PropType<Information>
    }
});
</script>

<template>
    <div class="p-7 shadow md:rounded-xl bg-white overflow-hidden relative">
        <h2 class="text-lg font-semibold mb-4">Information</h2>
        <div class="space-y-3">
            <div class="flex justify-between">
                <div class="text-gray-600">Location</div>
                <div class="font-medium text-right text-gray-900">{{ information?.location}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600">Years of Experience</div>
                <div class="font-medium text-right text-gray-900">{{ information?.yearsOfExperience}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600">Availability</div>
                <div class="font-medium text-right text-gray-900">{{ information?.availability}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600">Relocation</div>
                <div class="font-medium text-right text-gray-900">{{ information?.relocation}}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-gray-600">Remote</div>
                <div class="font-medium text-right text-gray-900">{{ information?.remote}}</div>
            </div>
        </div>
    </div>
</template>