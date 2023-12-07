
<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { onMounted, ref } from 'vue';
import DarkModeToggle from './DarkModeToggle.vue';
import ColorPallete from './ColorPallete.vue';

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
    <div class="flex gap-4 lg:justify-end justify-start w-full items-center absolute lg:relative  left-4 top-3 z-10 pr-8">
        <ColorPallete @close="togglePallet" :style="palletVisible ? 'transform: translatex(0); height: auto; opacity: 100%': 'transform: translateY(-100px); opacity: 0; pointer-events: none;'" />
        <button @click="togglePallet" class="z-10 mt-1">
            <Icon icon="pepicons-pencil:paint-pallet" class="dark:text-white text-white lg:text-black lg:scale-100 scale-75" width="32px" :class="{'shake': isWiggling}"  />
        </button>
        <button @click="toggleJson" class="z-10 mt-1">
            <Icon icon="lucide:file-json" class="dark:text-white text-white lg:text-black lg:scale-100 scale-75"  width="32px" />
        </button>
        <div class="relaive w-24 h-8 -ml-8">
            <DarkModeToggle class="lg:scale-[30%] scale-[20%] -mt-8" />
        </div>
    </div>
</template>