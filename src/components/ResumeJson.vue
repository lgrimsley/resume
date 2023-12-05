<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { useResumeStore } from '@/stores/resume.store';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, ref } from 'vue';

const appColor = computed(() => useAppStore().getAppColor);
const copied = ref(false);

// copy resume JSON to clipboard
const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = JSON.stringify(useResumeStore().getResume, null, 2);
    document.body.appendChild(el);
    el.select(); 
    // Use the newer Clipboard API instead of deprecated execCommand
    navigator.clipboard.writeText(el.value)
        .then(() => {
            document.body.removeChild(el);
        })
        .catch((error) => {
            console.error('Failed to copy to clipboard:', error);
        });

    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 300);
}
</script>

<template>
    <div :class="`fixed w-full h-full top-0 right-0 left-0 bottom-0 flex justify-end z-10`">
        <div class="absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black z-0 transition ease-in-out  " :class="{'opacity-50 delay-500 duration-500': useAppStore().getShowJson, 'opacity-0': !useAppStore().getShowJson}" @click="useAppStore().setShowJson(false)"></div>
        <div :class="`relative w-full md:w-3/4 top-0 right-0 dark:bg-black bg-white z-5 overflow-y-scroll max-h-screen shadow border-l-2 border-${appColor}-600`">
            <Icon icon="uil:copy" @click="copyToClipboard" :class="[`sticky top-8 float-right right-20 cursor-pointer text-${appColor}-500 transition ease-in-out duration-300`, {'text-black dark:text-white': copied}]" width="32px"  />
            <Icon icon="zondicons:close-outline" @click="useAppStore().setShowJson(false)" :class="`sticky top-8 float-right right-8 cursor-pointer text-${appColor}-500`" width="32px" />
            <pre class="px-7 py-4 whitespace-break-spaces tracking-wide text-xs leading-6">{{ JSON.stringify(useResumeStore().getResume, null, 2) }}</pre>
        </div>
    </div>
</template>