<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { type Skills, type SoftSkills } from '@/types/resume';
import { computed, type PropType } from 'vue';
import SkillSmall from './SkillSmall.vue';

const props = defineProps({
    skills: {
        type: Object as PropType<Skills>
    },
    softSkills: {
        type: Object as PropType<SoftSkills>
    }
});

const getBorderClass = computed(() => useAppStore().getBorderClass);

</script>

<template>
   <div class="bg-white/80 dark:bg-zinc-800/20 mt-0 lg:mt-8 p-6 lg:p-7 overflow-hidden relative dark:text-white">
        <div class="flex flex-col gap-6">
            <div v-for="list, category in skills" class="flex flex-col space-between ">
                <h3 class="text-sm font-bold mb-4 uppercase">{{ category }}</h3>
                <div class="flex flex-wrap">
                    <SkillSmall v-for="skill in list" :skill="skill" />
                </div>
            </div>
            <div v-if="softSkills?.length">
                <h3 class="text-sm font-bold mb-4 uppercase">Soft Skills</h3>
                <div class="flex flex-wrap">
                    <SkillSmall v-for="skill in softSkills" :skill="skill" />
                </div>
            </div>
        </div>
    </div>
</template>