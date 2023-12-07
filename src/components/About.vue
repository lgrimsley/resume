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
    <div class="toverflow-hidden relative dark:text-white p-6 lg:p-7  lg:-mt-8">
        <h2 class="text-2xl font-light mb-4 uppercase tracking-wider">About</h2>
        <p class="text-zinc-900 mb-5 dark:text-white tracking-wide leading-7 font-light">
            {{ basics?.summary }}
        </p>
    </div>
</template>