<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app.store';

const appColor = computed(() => useAppStore().getAppColor);
</script>

<template>
    <ul class="flex space-x-3 text-sm md:text-lg md:space-x-8 font-medium my-8 dark:text-white lg:ml-7 ml-6">
        <li 
        v-for="page in useAppStore().getAvailablePages"
        :class="[`pb-2 cursor-pointer border-b-2 font-semibold h-full hover:border-${appColor}-700`, useAppStore().getActivePage?.key == page.key ? `border-${appColor}-700` : 'border-transparent']"
        @click="useAppStore().setActivePage(page)"
        >
           {{ page.label }}
        </li>
    </ul>
</template>