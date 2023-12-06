
<script setup lang="ts">
import colors from '@/colors';
import { useAppStore } from '@/stores/app.store';
import type { AppColor } from '@/types/app';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, onMounted, ref } from 'vue';
import DarkModeToggle from './DarkModeToggle.vue';

const appColor = computed(() => useAppStore().getAppColor);
const borderClass = computed(() => useAppStore().getBorderClass);
const palletVisible = ref(false);
const toggleJson = () => {
    useAppStore().setShowJson(useAppStore().getShowJson ? false : true);
}

const isWiggling = ref(false);
const wiggleInterval = ref(0);

onMounted(() => {
    setTimeout(() => {
        isWiggling.value = true;
        setTimeout(() => isWiggling.value = false, 1000);
        initWiggle();
    }, 5000);
});

const initWiggle = () => {
    wiggleInterval.value = setInterval(() => {
        isWiggling.value = true;
        setTimeout(() => isWiggling.value = false, 1000);
    }, 10000); // Wiggle every 10 seconds
};

const stopWiggle = () => {
clearInterval(wiggleInterval.value);
isWiggling.value = false;
};
const togglePallet = () => {
    palletVisible.value = !palletVisible.value;
    stopWiggle();
};
  
</script>

<template>
    <div class="flex gap-4 lg:justify-end justify-start w-full items-center absolute lg:relative  left-4 top-3 z-10">
        <div :class="borderClass"  class=" border-2 transition ease duration-500 overflow-hidden absolute  w-80 p-4 bg-white dark:bg-zinc-900  rounded-lg shadow-xl top-10 -left-2 lg:left-auto lg:right-36 margin`" :style="palletVisible ? 'transform: translatex(0); height: auto; opacity: 100%': 'transform: translateY(-100px); opacity: 0'">
            <div class="flex justify-between items-center">
                <h5 class="flex items-center gap-2 pl-2 pb-2">
                    <Icon icon="pepicons-pencil:paint-pallet" width="18px" /> 
                    Color Pallete
                </h5>
                <button @click="togglePallet" class="z-10">
                    <Icon icon="zondicons:close-outline" class="dark:text-white text-black -mt-1" width="24px" />
                </button>
            </div>
            <div class="flex justify-center lg:justify-start gap-0 rounded p-1 mt-2">

                <span v-for="color in colors" 
                @click="useAppStore().setColor(color as AppColor)" 
                :class="`bg-gradient-to-tr from-${color}-600 to-${color}-900 w-full h-8 cursor-pointer flex items-center justify-center`"
                ><Icon icon="bxs:up-arrow" class="dark:text-white text-zinc-900 transition ease-in-out absolute bottom-2" width="12px" v-if="color == appColor" /></span>
            </div>
        </div>
        <button @click="togglePallet" class="z-10 mt-1">
            <Icon icon="pepicons-pencil:paint-pallet" class="dark:text-white text-white lg:text-black lg:scale-100 scale-75" width="32px" :class="{'shake': isWiggling}"  />
        </button>
        <button @click="toggleJson" class="z-10 mt-1">
            <Icon icon="lucide:file-json" class="dark:text-white text-white lg:text-black lg:scale-100 scale-75" width="32px" />
        </button>
        <div class="relaive w-24 h-8 -ml-8">
            <DarkModeToggle class="lg:scale-[30%] scale-[20%] -mt-8" />
        </div>
    </div>
</template>