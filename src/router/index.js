import { createRouter, createWebHistory } from 'vue-router'
import ConcertenView from '../views/ConcertenView.vue'
import AboutView from "@/views/AboutView.vue";
import ConcertDetailsView from "@/views/ConcertDetailsView.vue";
import OrganisatorenView from "@/views/OrganisatorenView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'concerten',
      component: ConcertenView,
      props: route=>({page:parseInt(route.query.page) || 1})
    },
    {
      path: '/concert/:id',
      name: 'concert-details',
      props:true,
      component: ConcertDetailsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/organisatoren',
      name: 'organisatoren',
      component: OrganisatorenView
    }
  ]
})

export default router
