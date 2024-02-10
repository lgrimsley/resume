// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ResumeView from '../views/ResumeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:tab?',
      name: 'resume',
      component: ResumeView,
      props: true
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ]
});

export default router;
