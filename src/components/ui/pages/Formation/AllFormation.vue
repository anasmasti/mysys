<template>
<div id="allFormation">
  <NavBar />
  <div class="container-fluid pb-2">
    <div class="main-title">
      <span class="title">Nos Formations</span>
      <select class="subselect" v-if="is_domaineLoaded && domaines" 
        @change="LoadThemesWithFormations(selectedDomaineId)"
        v-model="selectedDomaineId">
        <option v-for="(dom, domIndex) in domaines" :value="dom.id" 
          :selected="(currDomaineId == dom.id)" :key="domIndex" >
          {{ dom.name }}
        </option>
      </select>

      <select v-else class="subselect">
        <option class="subelement">
          {{ "..." }}
        </option>
      </select>
    </div>
  </div>
  
  <div class="container-fluid pb-5">

    <!-- ************ THEMES ************ -->
    <ul v-if="themes_by_domaine && themes_by_domaine.length > 0 && is_themeLoaded" class="onglet w-100 nav nav-tabs" id="myTab" role="tablist">
      <!-- button-right -->
      <button class="icon-btn bg-light" id="btnFixedLeft" @click="ScrollLeft(-10)">
        <i class="material-icons">chevron_left</i>
      </button>
      <!-- end-btn-right -->

      <li class="w-auto" v-for="(thm, thmIdx) in themes_by_domaine" :key="thmIdx"
        @click="handleAction('formationStore/setFormationsByTheme', thm.id)">

        <router-link :class="(currThemeId == thm.id && 'nav-link active') || 'nav-link'"
          :id="`theme${thm.id}-tab`" :to="`#theme${thm.id}`" data-toggle="tab" role="tab" :aria-controls="`theme${thm.id}`" aria-selected="true">
          <div class="text-center">
            <span class="text-nowrap">
              {{ thm.name || "--" }}
            </span>
          </div>
        </router-link>
      </li>

      <!-- button-left -->
      <button class="icon-btn bg-light" id="btnFixedRight" @click="ScrollLeft(10)">
        <i class="material-icons">chevron_right</i>
      </button>
      <!-- end-btn-left -->
    </ul>
    <!-- >>>> else-if -->
    <ul v-if="is_themeLoaded && themes_by_domaine && themes_by_domaine.length === 0" class="onglet w-100 nav nav-tabs align-items-center text-center" id="myTab" role="tablist">
      <li class="col-12">
        <h4>Aucun thème pour l'instant.</h4>
      </li>
    </ul>
    <!-- >>>> else -->
    <ul v-if="!is_themeLoaded" class="onglet w-100 nav nav-tabs align-items-center text-center" id="myTab" role="tablist">
      <li class="col-12 loading p-0">
        <img src="../../../../assets/img/loading2.gif" class="loading_img_sm" alt="loading pic">
      </li>
    </ul>
    <!-- >>>> else -->
    <ul v-if="has_themeError" class="onglet w-100 nav nav-tabs text-center" id="myTab" role="tablist">
      <li class="w-100 d-flex flex-nowrap align-items-center justify-content-center">
        <i class="material-icons">error</i>
        <span>{{theme_error}}</span>
      </li>
    </ul>
    <!-- ************ END THEMES ************ -->


    <!-- ################################################################# -->

    <!-- ************ FORMATIONS ************ -->
    <div v-if="is_formationLoaded && formations_by_theme && formations_by_theme.length" class="tab-content" id="myTabContent">

      <div class="tab-pane fade show active" id="dev" role="tabpanel" aria-labelledby="dev-tab">
        <div id="dev">
          <formation-card :formations="formations_by_theme"></formation-card>
        </div>
      <!-- end-formation -->
      </div>

    </div>
    <!-- tab-content -->
    <div v-else-if="is_formationLoaded && formations_by_theme && !formations_by_theme.length" class="loading px-4">
      <h3 class="text_mysyscolor1 font-lg-s8 font-xs-s4 font-s4 text-center">
        <!-- <i class="material-icons">assistant_photo</i> -->
        Aucune formation pour l'instant
        <i class="material-icons">golf_course</i>
        <!-- <button class="icon-btn bg-light" @click="handleAction('SetFormationsByTheme', currThemeId)">
          <i class="material-icons">refresh</i>
        </button> -->
      </h3>
    </div>
    <!-- LOADING .. -->
    <div v-else-if="!has_formationError && !is_formationLoaded" class="loading">
      <img src="../../../../assets/img/loading.gif" class="loading_img_sm">
    </div>
    <!-- LOADING .. -->
    <!-- ERROR .. -->
    <div v-else-if="has_formationError && !is_formationLoaded" class="loading">
      <li class="w-100 d-flex flex-nowrap align-items-center justify-content-center">
        <i class="material-icons">error</i>
        <span class="font-s10">{{forma_error}}</span>
      </li>
    </div>
    <!-- ERROR .. -->
    <!-- ************ END FORMATIONS ************ -->


  </div>
  <!-- end-container-fluid -->
  
  <contactez></contactez>


</div>
</template>

<script>
import NavBar from '../../shared/common/NavBar.vue'
import FormationCard from '../../shared/FormationCard.vue'
import Contactez from '../../shared/common/Contactez.vue'
import {  mapState } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  name: 'AllFormation',
  components: {
    NavBar,
    FormationCard,
    Contactez
  },
  data () {
    return {
      domaine_param: undefined,
      theme_param: undefined,
      selectedDomaineId: undefined
    }
  },
  mounted() {
    this.domaine_param = this.$route.params.domaine_param ? Math.round(this.$route.params.domaine_param) : undefined;
    this.theme_param = this.$route.params.theme_param ? Math.round(this.$route.params.theme_param) : undefined;
  },
  async created() {
    document.title = "MySYS - Formations";
    window.scrollTo(0, 0);
    
    // ****** DISPATCH ~ ACTIONS ****** //
    // get Data
    await this.$store.dispatch('formationStore/fetchDomaineData');
    await this.$store.dispatch('formationStore/fetchThemeData');
    await this.$store.dispatch('formationStore/fetchFormationData');

    // SET CURRENT ID's
    await this.$store.dispatch('formationStore/setCurrDomaineId', this.domaine_param);
    await this.$store.dispatch('formationStore/setCurrThemeId', this.theme_param);

    // get domaine_by_id and themes_by_domaine
    // check if there are params
    if (this.domaine_param) {
      await this.$store.dispatch('formationStore/setDomaineById', this.domaine_param);
      await this.$store.dispatch('formationStore/setThemesByDomaine', this.domaine_param);
    } else { // by defauls
      await this.$store.dispatch('formationStore/setDomaineById');
      await this.$store.dispatch('formationStore/setThemesByDomaine');
    }
    // get theme_by_id and formations_by_theme
    if (this.theme_param) {
      await this.$store.dispatch('formationStore/setThemeById', this.theme_param);
      await this.$store.dispatch('formationStore/setFormationsByTheme', this.theme_param);
    } else {
      await this.$store.dispatch('formationStore/setThemeById');
      await this.$store.dispatch('formationStore/setFormationsByTheme');
    }
  },
  computed: {
    // assigner les id initiales à partir d'URL ou des données array
    // currDomaineId() { return this.domaine_param || null; },
    // currThemeId() { return this.theme_param || null; },
    ...mapState('formationStore',{
         // *** data from state ***
    domaines: state => state.domaines,
    themes_by_domaine: state => state.themes_by_domaine,
    formations_by_theme: state => state.formations_by_theme,
    // > data by id
    domaine_by_id: state => state.domaine_by_id,
    theme_by_id: state => state.theme_by_id,
    // > is data loaded
    is_domaineLoaded: state => state.is_domaineLoaded,
    is_themeLoaded: state => state.is_themeLoaded,
    is_formationLoaded: state => state.is_formationLoaded,
    // > data IDs
    currDomaineId: state => state.currDomaineId,
    currThemeId: state => state.currThemeId,
    currFormaId: state => state.currFormaId,
    // > has errors
    has_domaineError: state => state.has_domaineError,
    has_themeError: state => state.has_themeError,
    has_formationError: state => state.has_formationError,
    // > errors
    domaineError: state => state.domaineError,
    themeError: state => state.themeError,
    formationError: state => state.formationError,
    })
 
  },
  watch: {
  },
  methods: {
    // ...mapActions([
    //  'formationStore/setFormationsByTheme',
    // ]),
    async handleAction(action, targetId = null) {
      await this.$store.dispatch(action, targetId);
    },
    async LoadThemesWithFormations(domaineId) {
      // changer le id domaine actuel
      await this.$store.dispatch('formationStore/setCurrDomaineId', domaineId);
      //console.log("currDomaineId", domaineId)
      // récupérer les thèmes avec id domaine actuel
      await this.$store.dispatch('formationStore/setThemesByDomaine', domaineId);
      // récupérer les formations du premier id theme (par defaut dans store)
      await this.$store.dispatch('formationStore/setFormationsByTheme');
    },
    // scroll
    ScrollLeft(valToScroll) { 
      let myTab = document.getElementById('myTab');
      let amount = 0;
      let scrollInterv = setInterval(function () {
        myTab.scrollLeft += valToScroll;
        amount += valToScroll;
        // @ts-ignore
        amount === 200 | amount === -200 && clearInterval(scrollInterv);
      }, 10);
    },
  } // METHODS
}
</script>

<style lang="scss">
  @import '../../../../assets/css/allformation.scss';
</style>


