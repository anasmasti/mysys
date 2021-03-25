import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../components/ui/pages/home/Home.vue')
const About = () => import('../components/ui/pages/info/About.vue')
const Contact = () => import('../components/ui/pages/info/Contact.vue')
const AllServices = () => import('../components/ui/pages/info/AllServices.vue')
const AllFormation = () => import('../components/ui/pages/Formation/AllFormation.vue')
const DetailFormation = () => import('../components/ui/pages/Formation/DetailFormation.vue')

const routes = [
    { path: '/formation-by-theme/:theme_param/:domaine_param', component: AllFormation, name: 'allformation' },
    { path: '/all-formation', component: AllFormation },
    { path: '/all-services', component: AllServices },
    { path: '/detail-formation', component: DetailFormation },
    { path: '/detail-formation/:form_param', component: DetailFormation, name: 'detailformation' },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/home', component: Home },
    { path: '/', component: Home }
  ]
  
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router