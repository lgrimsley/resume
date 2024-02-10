<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app.store';

const borderClass = computed(() => useAppStore().getBorderClass);
const borderHoverClass = computed(() => useAppStore().getBorderHoverClass);
const appStore = useAppStore();
</script>

<template>
    <ul class="flex gap-3 text-sm tracking-wider md:text-lg md:space-x-8 font-medium my-7 dark:text-white lg:ml-7 ml-6 lg:pb-[2px]">
        <li 
        v-for="page in appStore.getAvailablePages"
        :key="page.key"
        class="pb-2 cursor-pointer border-b-2 font-semibold h-full"
        :class="[borderHoverClass, appStore.getActivePage?.key == page.key ? borderClass : 'border-transparent']"
        >
            <router-link :to="page.key" @click.prevent="appStore.setActivePage(page)" class="no-underline text-current">
                {{ page.label }}
            </router-link>
        </li>
    </ul>
</template>
