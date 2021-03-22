<template>
  <div id="app">
    <router-view></router-view>
    <Footer />

    <a href="#" @click.prevent="ScrollToTopEvent">
      <i class="material-icons" id="back_to_top">arrow_upward</i>
    </a>
    
  </div>
</template>

<style lang="scss">
  @import './assets/css/_style.scss';
  @import './assets/css/loading.scss';
  @import './assets/css/modal.scss';
</style>

<script>
import { mapState, mapActions } from 'vuex';
import Footer from './components/ui/shared/common/Footer.vue';
// import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Footer
  },
  async created() {
    window.addEventListener('scroll', this.DisplayBackTopOnScroll);
    this.ScrollToTopEvent();
   this.fetchDomaineData
    // ###### DISPATCH ~ ACTIONS ###### //
    // await this.$store.formation_module.dispatch('fetchDomaineData');
    // await this.$store.formation_module.dispatch('fetchThemeData');
    // await this.$store.formation_module.dispatch('setThemesByDomaine');
    // await store.dispatch('FetchFormationData');
    // await store.dispatch('SetFormationsByTheme');
  },
  computed: {
    ...mapState('formation_module',{
      domaines: state => state.domaines,
      themes: state => state.themes,
      formations: state => state.formations,
    })
    // domaines() { return this.$store.formation_module.state.domaines; },
    // themes() { return this.$store.formation_module.state.themes; },
    // formations() { return this.$store.formation_module.state.formations; },
  
  },
  methods: {
    ...mapActions('formation_module',[
      'fetchDomaineData',
      'fetchThemeData',
      'setThemesByDomaine'
    ]),
    // **** UI EVENTS ****
    ScrollToTopEvent() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    DisplayBackTopOnScroll() {
      let btnTop = document.getElementById('back_to_top');
      btnTop.style.display = window.scrollY > 500 ? "inline-block" : "none";
    },
  }
}
</script>




