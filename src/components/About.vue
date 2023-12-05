<script setup lang="ts">
import { type Basics } from '@/types/resume';
import { type PropType } from 'vue';

const props = defineProps({
    basics: {
        type: Object as PropType<Basics>
    }
});
</script>

<template>
    <div class="overflow-hidden relative dark:text-white">
        <h2 class="text-2xl font-light mb-4 uppercase tracking-wider">About</h2>
        <p class="text-gray-600 mb-5 dark:text-gray-200 tracking-wide leading-7">
            {{ basics?.summary }}
        </p>
    </div>
</template>