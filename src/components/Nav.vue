<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app.store';

const borderClass = computed(() => useAppStore().getBorderClass);
const borderHoverClass = computed(() => useAppStore().getBorderHoverClass);
</script>

<template>
    <ul class="flex gap-3 text-sm tracking-wider md:text-lg md:space-x-8 font-medium my-7 dark:text-white lg:ml-7 ml-6 lg:pb-[2px]">
        <li 
        v-for="page in useAppStore().getAvailablePages"
        :class="[`pb-2 cursor-pointer border-b-2 font-semibold h-full ${borderHoverClass}`, useAppStore().getActivePage?.key == page.key ? `${borderClass}` : 'border-transparent']"
        @click="useAppStore().setActivePage(page)"
        >
           {{ page.label }}
        </li>
    </ul>
</template>