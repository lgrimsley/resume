<script setup lang="ts">
import { type Reference } from '@/types/resume';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed, type PropType } from 'vue';
import { useAppStore } from '@/stores/app.store';

const props = defineProps({
    data: {
        type: Array as PropType<Reference[]>
    }
});

const textColorClass = computed(() => useAppStore().getTextColorClass);
</script>

<template>
    <div class="overflow-hidden relative dark:text-white flex flex-wrap flex-col md:flex-row gap-2 ">
        <div class="bg-white/80 dark:bg-zinc-800/20 p-7 rounded-sm flex-grow min-w-[49.5%]" v-for="reference in data">
            <div class="flex space-between">
                <div class="flex-col flex-grow">
                    <h3 class="font-semibold text-xl mb-4">
                        {{ reference.name }} <br/>
                        <small class="font-normal">{{ reference.position }} - {{ reference.company }}</small>
                    </h3>
                    <ul class="flex-col flex gap-2 text-sm">
                        <li class="flex gap-2 items-center">
                           <Icon icon="bi:phone" :class="textColorClass" width="16px" /> <a v-if="reference.phone" :href="`tel:${reference.phone}`">{{ reference.phone }}</a> <span v-else>Upon Request</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <Icon icon="entypo:email" :class="textColorClass" width="16px" /> <a v-if="reference.email" :href="`mailto:${reference.email}`">{{ reference.email }}</a> <span v-else>Upon Request</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <Icon icon="cib:linkedin" :class="textColorClass" width="16px" />
                            <a :href="reference.linkedin" target="_blank" class="flex items-center gap-1 text-gray-700 dark:text-gray-200">
                                LinkedIn <Icon icon="majesticons:open-line" width="14px" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-sm text-right leading-6">
                    {{ reference.reference_type }} Reference <br />
                    {{ reference.relationship }}
                </div>
            </div>
        </div>
    </div>
</template>