<script setup lang="ts">
import { type WorkExperience } from '@/types/resume';
import { type PropType } from 'vue';

const props = defineProps({
    experience: {
        type: Array as PropType<WorkExperience[]>
    }
});
</script>

<template>
    <div class="p-7 shadow md:rounded-xl bg-white overflow-hidden relative">
        <div class="mb-5 item-section" v-for="job, index in experience">
            <div class="flex">
                <div class="w-1/3 flex flex-col">
                    <h2 class="text-xl font-bold uppercase mb-4">
                        {{ job?.company }}
                    </h2>
                    <h5 v-for="position in job.positions" class="text-sm mb-2 flex flex-col">
                        {{ position.position }} <small class="text-gray-500"> {{ position.startDate }} - {{ position.endDate }} </small>
                    </h5>
                </div>
                <div class="w-2/3">
                    <p class="mb-2 text-lg" v-if="job?.summary">
                        {{ job.summary }}
                    </p>
                    <ul v-if="job?.bullets.length" class="pl-2">
                        <li v-for="bullet in job.bullets" class=" mb-3 list-[disclosure-closed]">
                            <p class="text-sm">
                                {{ bullet }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="(index+1) != experience?.length" class="h-[1px] w-full my-8 bg-zinc-300"></div>
        </div>
    </div>
</template>