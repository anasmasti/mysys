<script>
import Footer from './components/ui/shared/common/Footer.vue';
import { store } from './store/formation/index'
// import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Footer
  },
  async created() {
    window.addEventListener('scroll', this.DisplayBackTopOnScroll);
    this.ScrollToTopEvent();

    // ###### DISPATCH ~ ACTIONS ###### //
    await store.dispatch('FetchDomaineData');
    await store.dispatch('FetchThemeData');
    await store.dispatch('SetThemesByDomaine');
    // await store.dispatch('FetchFormationData');
    // await store.dispatch('SetFormationsByTheme');
  },
  computed: {
    domaines() { return store.state.domaines; },
    themes() { return store.state.themes; },
    formations() { return store.state.formations; },
  },
  methods: {
    // ...mapActions([
    // ]),
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

<style lang="scss">
  @import './assets/css/_style.scss';
  @import './assets/css/loading.scss';
  @import './assets/css/modal.scss';
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <Footer />

    <a href="#" @click.prevent="ScrollToTopEvent">
      <i class="material-icons" id="back_to_top">arrow_upward</i>
    </a>
    
  </div>
</template>
