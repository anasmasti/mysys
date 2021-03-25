<template>
<div id="home" class="home">
  <div class="bg_jumbo">
    <nav-bar-for-home></nav-bar-for-home>
    <landing/>
  </div>

  <domaine/>
  <our-service/>

  <div class="d-flex flex-wrap py-5">
    <div class="col-12 col-lg-6 col-xl-6">
      <expertise/>
    </div>
    <div class="col-12 col-lg-6 col-xl-6">
      <mission/>
    </div>
  </div>
 <div class="pt-5">
    <partenaire/>
 </div>
 
  <div class="py-5">
     <chiffre/>
  </div>
 
  <client/>

  <div class="line bg_light_2 py-5">
    <hr />
  </div>
  <contactez/>
</div>
</template>

<script>
import Domaine from './Domaine';
import Landing from './Landing';
import OurService from './OurService';
import Chiffre from './Chiffre';
import Client from './Client';
import Partenaire from './Partenaire';
import Expertise from './Expertise';
import Mission from './Mission';
import NavBarForHome from '../../shared/common/NavBarForHome.vue';
import Contactez from '../../shared/common/Contactez.vue';

export default {
  name: 'Home',
  components: {
    NavBarForHome,
    Domaine,
    Landing,
    OurService,
    Partenaire,
    Chiffre,
    Expertise,
    Mission,
    Client,
    Contactez,
  },
  data () {
    return {
      error: null,
    }
  },
  mounted() {
  },
  created() {
    document.title = "MySYS";
  },
  methods: {
  } // mounted
}
</script>