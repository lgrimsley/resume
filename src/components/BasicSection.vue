<script setup lang="ts">
import { type Basics } from '@/types/resume.ts';

const props = defineProps({
    basics: {
        type: Object as Basics,
        default: {}
    }
});
</script>

<template>
    <div class="shadow rounded-xl overflow-hidden"><!-- Start User Block -->
        <div class="h-32 bg-cover" style="background-image: url('assets/img/cover.jpg');"></div>
        <div class="pt-14 p-7 bg-white relative">
            <span class="status-badge bg-gray-400">{{ basics.status}}</span>
            <a href="/personal_cv/"><img src="" alt="Avatar" class="user-photo" /></a>
            <div class="text-lg font-semibold mb-1.5">Cristopher Abbott</div>
            <div class="text-sm text-gray-400 mb-7">Senior Developer</div>
            <div class="flex group">
                <button class="download-btn">Download CV</button>
                <button class="download-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></button>
            </div>
        </div>
    </div><!-- End User Block -->
</template>