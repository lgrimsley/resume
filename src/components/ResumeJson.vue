<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { useResumeStore } from '@/stores/resume.store';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed } from 'vue';

const appColor = computed(() => useAppStore().getAppColor);
</script>

<template>
    <div :class="`fixed w-full md:w-3/4 top-0 right-0 dark:bg-zinc-900 bg-white z-10 overflow-y-scroll max-h-screen shadow border-l-2 border-${appColor}-600`">
        <Icon icon="zondicons:close-outline" @click="useAppStore().setShowJson(false)" :class="`sticky top-8 float-right right-8 cursor-pointer text-${appColor}-500`" width="32px" />
        <pre class="px-7 py-4 whitespace-break-spaces language-json tracking-wide">{{ JSON.stringify(useResumeStore().getResume, null, 2) }}</pre>
    </div>
</template>