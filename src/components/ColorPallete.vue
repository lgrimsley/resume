

<script setup lang="ts">
import colors from '@/colors';
import { useAppStore } from '@/stores/app.store';
import type { AppColor } from '@/types/app';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, ref, watch } from 'vue';

const appStore = useAppStore();
const appColor = computed(() => appStore.getAppColor);
const borderClass = computed(() => appStore.getBorderClass);
const isDragging = ref(false);
const selectedColorIndex = ref(colors.indexOf(appStore.getAppColor));
const colorElementsRef = ref<Element[]>([]);
const gradientClass = (color: AppColor): string => {
    return appStore.getGradientClass(color);
};

const startDrag = (color: AppColor) => {
    setAppColor(color);
    isDragging.value = true;
};

const onColorHover = (color: AppColor, event: Event | TouchEvent, touch = false) => {
    if (isDragging.value) {
        if (touch) {
            color = getColorByTouchEvent(event as TouchEvent) ?? color;
        }
        setAppColor(color);
    }
};

const endDrag = () => {
    isDragging.value = false;
};

const setAppColor = (color: AppColor) => {
    appStore.setColor(color);
    selectedColorIndex.value = colors.indexOf(color);
};

watch(appColor, (newColor: AppColor) => {
    selectedColorIndex.value = colors.indexOf(newColor);
});

const iconPosition = computed(() => {
    const colorWidth = 100 / colors.length; // assuming each color takes equal width in percentage
    return selectedColorIndex.value * colorWidth + '%';
});

const preventDefaultDrag = (event: Event) => {
    event.preventDefault();
};

const getColorByTouchEvent = (event: TouchEvent) => {
    const touch = event.touches[0];
    const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);

    if (touchedElement) {
        // Find the index of the touched element in the array of color elements
        const touchedIndex = colorElementsRef.value?.indexOf(touchedElement);
        if (touchedIndex !== -1) {
            const selectedColor = colors[touchedIndex];
            return selectedColor as AppColor;
        }
    }

    return null;
};
</script>

<template>
    <div :class="borderClass" class=" border-2 transition ease duration-500 overflow-hidden absolute  w-80 px-4 pt-4 pb-2 bg-white dark:bg-zinc-900  rounded-lg shadow-xl top-10 -left-2 lg:left-auto lg:right-36 margin relative`">
        <div class="flex justify-between items-center">
            <h5 class="flex items-center gap-2 pl-2 pt-1 pb-1">
                <Icon icon="pepicons-pencil:paint-pallet" width="24px" /> 
                Color Pallete
            </h5>
            <button @click="$emit('close')" class="z-10">
                <Icon icon="zondicons:close-outline" class="dark:text-white text-black -mt-1" width="24px" />
            </button>
        </div>

        <div class="flex justify-center lg:justify-start gap-0 rounded w-full mt-4 mb-1 h-10 "
             @mouseup="endDrag"
             @mouseleave="endDrag"
             @touchend="endDrag"
             >
            <span v-for="color in colors" 
                @mousedown="startDrag(color as AppColor)"
                @mousemove="onColorHover(color as AppColor, $event)"
                @touchstart.prevent="startDrag(color as AppColor)"
                @touchmove="onColorHover(color as AppColor, $event, true)"
                ref="colorElementsRef"
                :class="[`w-full h-full cursor-pointer flex items-center justify-center`, gradientClass(color as AppColor)]"
                 @dragstart.prevent="preventDefaultDrag"
                 @touchcancel="endDrag"
            >
            </span>
        </div>
        <Icon icon="bxs:up-arrow" class="bottom-3 transition-left duration-150 float-left relative -ml-[1px] pointer-events-none" :style="{left: iconPosition}" />
    </div>
</template>