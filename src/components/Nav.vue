<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app.store';

const appColor = computed(() => useAppStore().getAppColor);
</script>

<template>
    <ul class="flex space-x-3 text-sm md:text-lg md:space-x-8 font-medium mt-8 dark:text-white">
        <li 
        v-for="page in useAppStore().getAvailablePages"
        :class="[`pb-2 cursor-pointer border-b-2 font-semibold hover:border-${appColor}-700 hover:dark:border-${appColor}-600`, useAppStore().getActivePage?.key == page.key ? `border-${appColor}-700 dark:border-${appColor}-600 ` : 'border-transparent']"
        @click="useAppStore().setActivePage(page)"
        >
           {{ page.label }}
        </li>
    </ul>
</template>