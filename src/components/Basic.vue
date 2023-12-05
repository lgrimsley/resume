<script setup lang="ts">
import { type Basics } from '@/types/resume';
import { type PropType, ref, computed, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useAppStore } from '@/stores/app.store';

const props = defineProps({
    basics: {
        type: Object as PropType<Basics>
    }
});
const downloadButton = ref<HTMLButtonElement | null>(null);
const downloadText = ref<HTMLButtonElement | null>(null);
const gradientClass = computed(() => useAppStore().getGradientClass);
const gradientHoverClass = computed(() => useAppStore().getGradientHoverClass);

const width = ref(0);
const buttonHover = ref(false);

const moveRightStyle = computed(() => {
    if (!downloadButton.value || !downloadText.value) { return ''; }
    const buttonWidth = width.value;
    const elementWidth = downloadText.value.offsetWidth;
    const moveDistance = (buttonWidth - elementWidth) / 2 - 12;

    return {
        transform: `translateX(${moveDistance}px)`
    };
});

const updateWidth = () => {
    if (downloadButton.value) {
        width.value = downloadButton.value.offsetWidth;
    }
};

// Watch for window resize
onMounted(() => {
    window.addEventListener('resize', updateWidth);
    // Initial update
    updateWidth();
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

</script>

<template>
    <div class="dark:bg-zinc-900 md:rounded-tr md:rounded-tl dark:text-white overflow-hidden relative">
        <!-- <div class="h-32" style="background-image: url('/abstract_bg.png'); background-position: 0% 90%;"></div> -->
        <div :class="gradientClass" class="h-32 w-full flex-col items-end flex justify-between transition duration-500 ease-in-out">
            <span class="border border-white text-white font-semibold dark:border-gray-200 dark:text-gray-200 px-2 py-1 text-xs rounded mr-3 mt-3">{{ basics?.status }}</span>
            <ul class="flex space-x-4 w-full self-bottom justify-end mr-3 mb-3">
                <li>
                    <a :href="`mailto:${basics?.email}`" class="text-lg flex items-center gap-1 font-semibold hover:animate-pulse" alt="Email Me">
                        <Icon icon="entypo:email" width="32px" class="text-gray-100 hover:text-white" />
                    </a>
                </li>
                <li v-for="profile in basics?.profiles">
                    <a :href="profile.url" target="_blank" class="hover:animate-pulse">
                        <Icon :icon="profile.icon" width="32px" class="text-gray-100 hover:text-white " :title="profile.network" />
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="pt-4 relative">
            <img v-if="basics?.image" :src="basics.image" alt="Avatar" class="absolute w-32 h-32 rounded-full left-6 -top-16 border-2 border-white dark:border-zinc-900" />
            <div class="flex flex-col w-full items-end mb-6 xl:pr-8 md:pr-1 pr-3">
                <div class="xl:text-2xl text-xl  mb-1 font-bold text-zinc-800 dark:text-zinc-100">{{ basics?.name }}</div>
                <div class="xl:text-xl text-lg text-gray-600 dark:text-gray-300">{{ basics?.label }}</div>
            </div>
            <button ref="downloadButton"  @mouseover="buttonHover = true" @mouseleave="buttonHover = false" :class="[gradientClass, gradientHoverClass]" class="w-full justify-center flex group text-white items-center mt-2 py-4 rounded font-semibold relative" @click="$emit('download-resume')">
                <span  :style="buttonHover ? moveRightStyle : ''" ref="downloadText" class="flex gap-2 items-center transition ease-in-out delay-150">
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>