<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { computed } from 'vue';
const props = defineProps({
    skill: {
        type: String
    },
});

const getBorderClass = computed(() => useAppStore().getBorderClass);
</script>

<template>
    <span :class="getBorderClass" class="border text-black dark:text-white rounded-sm px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2 dark:text-gray-100 tracking-wider h-7 items-center flex">{{ skill }}</span>
</template>