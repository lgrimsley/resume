
<script setup lang="ts">
import colors from '@/colors';
import { useAppStore } from '@/stores/app.store';
import type { AppColor } from '@/types/app';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, ref } from 'vue';

const appColor = computed(() => useAppStore().getAppColor);
const palletVisible = ref(false);
const togglePallet = () => {
    palletVisible.value = !palletVisible.value;
}
const toggleJson = () => {
    useAppStore().setShowJson(useAppStore().getShowJson ? false : true);
}
</script>

<template>
    <div class="relative flex gap-4 justify-end w-full items-center">
        <div class="flex flex-wrap justify-start gap-1 transition ease duration-500 overflow-hidden" :style="palletVisible ? 'transform: translatex(0); height: auto; opacity: 100%': 'transform: translatex(40px); height: 0px; opacity: 0'">
            <span v-for="color in colors" 
                @click="useAppStore().setColor(color as AppColor)" 
                :class="`bg-gradient-to-tr from-${color}-600 to-${color}-900 w-8 h-8 cursor-pointer rounded-sm flex items-center justify-center`"
            ><Icon icon="carbon:dot-mark" class="text-white transition ease-in-out" width="24px" :class="color == appColor ? 'opacity-100' : 'opacity-10'" /></span>
        </div>
        <button @click="togglePallet" class="z-10">
            <Icon icon="pepicons-pencil:paint-pallet" class="dark:text-white text-black" width="32px"  />
        </button>
        <button @click="toggleJson" class="z-10">
            <Icon icon="lucide:file-json" class="dark:text-white text-black" width="32px" />
        </button>
    </div>
</template>