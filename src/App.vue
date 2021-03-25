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
import { mapState } from 'vuex';
import Footer from './components/ui/shared/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
  async created() {
    window.addEventListener('scroll', this.DisplayBackTopOnScroll);
    this.ScrollToTopEvent();
    // ###### DISPATCH ~ ACTIONS ###### //
    await this.$store.dispatch('formationStore/fetchDomaineData');
    await this.$store.dispatch('formationStore/fetchThemeData');
    await this.$store.dispatch('formationStore/setThemesByDomaine');
    // await store.dispatch('FetchFormationData');
    // await store.dispatch('SetFormationsByTheme');
  },
  computed: {
    ...mapState('formationStore',{
      domaines: state => state.domaines,
      themes: state => state.themes,
      formations: state => state.formations,
    })
  },
  methods: {
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




