import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/ui/pages/home/Home.vue'
import About from '../components/ui/pages/info/About.vue'
import Contact from '../components/ui/pages/info/Contact.vue'
import AllServices from '../components/ui/pages/info/AllServices.vue'
import AllFormation from '../components/ui/pages/Formation/AllFormation.vue';
import DetailFormation from '../components/ui/pages/Formation/DetailFormation.vue';
Vue.use(VueRouter)

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