<script setup lang="ts">
import BasicSection from '@/components/BasicSection.vue'
import InformationSection from '@/components/InformationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue';

import { useResumeStore } from '@/stores/resume.store';
import { onMounted, computed } from 'vue';

const basics = computed(() => useResumeStore().getBasics);
const information = computed(() => useResumeStore().getInformation);
const skills = computed(() => useResumeStore().getSkills);
const softSkills = computed(() => useResumeStore().getSoftSkills);

onMounted(async () => {
    await useResumeStore().hydrate();
});

const downloadResume = () => {
    if (!basics.value?.resume_url) { return; }
    const link = document.createElement('a');
    link.href = basics.value.resume_url;
    link.download = basics.value.resume_url;
    link.target = '_blank';
    link.click();
}
</script>

<template>
    <main class="bg-gray-200 flex justify-center items-top md:p-8 ">
        <div class="grid gap-5 lg:grid-cols-3 container xl:w-4/5 lg:w-5/6">

            <!-- left col -->
            <div class="flex flex-col md:gap-8 gap-4 justify-start">
                <BasicSection v-if="basics" :basics="basics" @download-resume="downloadResume" />
                <InformationSection v-if="information" :information="information" />
                <SkillsSection v-if="skills && softSkills" :skills="skills" :soft-skills="softSkills" />
            </div>
            <!-- end left col -->
            <div class="space-y-5 lg:col-span-2"><!-- Start Right Side -->

                <div class="p-7 pb-0 block-section"><!-- Start About Me Block -->
                    <h2 class="block-title">About me</h2>
                    <p class="text-gray-600 mb-5">Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.</p>
                    
                    <div class="flex flex-col space-y-4">
                        <a href="#0" class="mail-link social-link-hover">
                            <i class="bx bx-at text-xl"></i>
                            <span>crisabbott@email.com</span>
                        </a>
            
                        <ul class="flex space-x-5">
                            <li>
                                <a href="#0" class="social-link-hover">
                                    <i class="bx bxl-facebook-circle text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="social-link-hover">
                                    <i class="bx bxl-twitter text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="social-link-hover">
                                    <i class="bx bxl-github text-2xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="border-t border-gray-200 my-5"></div>
                    
                    <ul class="flex space-x-8 font-medium">
                        <li>
                            <a href="/personal_cv/index.html" class="menu-link-active menu-link-hover">Resume</a>
                        </li>
                        <li>
                            <a href="/personal_cv/products.html" class="menu-link menu-link-hover">Products</a>
                        </li>
                        <li>
                            <a href="/personal_cv/blog.html" class="menu-link menu-link-hover">Blog</a>
                        </li>
                    </ul>
                </div><!-- End About Me Block -->

                <div class="p-7 block-section"><!-- Start Experience Block -->
                    <h2 class="block-title">Experience</h2>
                    <div class="mb-5 item-section">
                        <div class="company-logo" style="background-color: #1DA1F2;">
                            <i class="bx bxl-twitter text-3xl"></i>
                        </div>

                        <div class="w-full space-y-5">
                            <div class="item-header">
                                <div class="space-y-1.5">
                                    <div class="font-medium">Senior Developer</div>
                                    <div class="flex space-x-5">
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            <span>Twitter</span>
                                        </div>
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span>London</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-2 sm:text-right">
                                    <div class="job-item-badge">Full time</div>
                                    <div class="item-header-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>June 2019 – Present</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600">
                                Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.
                            </p>
                            <div class="border-b border-gray-200"></div>
                        </div>
                    </div>

                    <div class="mb-5 item-section">
                        <div class="company-logo" style="background-color: #0061FF;">
                            <i class="bx bxl-dropbox text-3xl"></i>
                        </div>

                        <div class="w-full space-y-5">
                            <div class="item-header">
                                <div class="space-y-1.5">
                                    <div class="font-medium">Middle Developer</div>
                                    <div class="flex space-x-5">
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            <span>Dropbox</span>
                                        </div>
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span>London</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-2 sm:text-right">
                                    <div class="job-item-badge">Full time</div>
                                    <div class="item-header-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>April 2018 – June 2019</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600">
                                Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.
                            </p>
                            <div class="border-b border-gray-200"></div>
                        </div>
                    </div>

                    <div class="item-section">
                        <div class="company-logo" style="background-color: #FC4F08;">
                            <i class="bx bxl-blogger text-3xl"></i>
                        </div>

                        <div class="w-full space-y-5">
                            <div class="item-header">
                                <div class="space-y-1.5">
                                    <div class="font-medium">Junior Developer</div>
                                    <div class="flex space-x-5">
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            <span>Blogger</span>
                                        </div>
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span>London</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-2 sm:text-right">
                                    <div class="job-item-badge">Full time</div>
                                    <div class="item-header-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>December 2017 – March 2018</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600">
                                Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.
                            </p>
                        </div>
                    </div>
                </div><!-- Start Experience Block -->

                <div class="p-7 block-section"><!-- Start Education Block -->
                    <h2 class="block-title">Education</h2>
                    <div class="mb-5 item-section">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style="background-image: url('assets/img/bu-logo.jpg');">
                        </div>

                        <div class="w-full space-y-5">
                            <div class="item-header items-end">
                                <div class="space-y-1.5">
                                    <div class="font-medium">Master in Software Engineering</div>
                                    <div class="flex space-x-5">
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                            </svg>
                                            <span>Brunel University</span>
                                        </div>
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span>London</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-1.5 sm:text-right">
                                    <div class="item-header-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>September 2017 - May 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div class="border-b border-gray-200"></div>
                        </div>
                    </div>

                    <div class="item-section">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style="background-image: url('assets/img/bu-logo.jpg');">
                        </div>

                        <div class="w-full space-y-5">
                            <div class="item-header items-end">
                                <div class="space-y-1.5">
                                    <div class="font-medium">Master in Software Engineering</div>
                                    <div class="flex space-x-5">
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                            </svg>
                                            <span>Brunel University</span>
                                        </div>
                                        <div class="item-header-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span>London</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-1.5 sm:text-right">
                                    <div class="item-header-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>September 2013 - May 2017</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- Start Education Block -->

            </div><!-- End Right Side -->
        </div>
    </main>
</template>
