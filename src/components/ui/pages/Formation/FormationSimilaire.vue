<template>
  <div class="formation-similaire bg_light_2" id="formationSimilaire">

    <div class="container-fluid pt-5" v-if="isLoaded">
      <h1 class="text-center text-dark font-lg-s8 font-md-s6 font-s6 text_bold py-3">
        Formations similaire sur ❝{{ category }}❞
      </h1>
      <!-- card-formation -->
      <formation-card 
        :formations="formations.slice(0, 4)">
      </formation-card>
      <!-- card-formation -->
    </div>
    <!-- ELSE LOADING .. -->
    <div v-else class="loading loading_md">
      <img src="../../../../assets/img/loading2.gif" class="loading_img">
    </div>
    <!-- END-LOADING .. -->

    <div class="line">
      <hr />
    </div>

  </div>

</template>

<script>
import FormationCard from '../../../ui/shared/FormationCard.vue'

export default {
  name: 'FormationSimilaire',
  components: {
    FormationCard
  },
  data() {
    return {
      form_param: undefined
    }
  },
  props: {
    formations: { type: Array, required: true },
    category: String,
    isLoaded: Boolean
  },
  methods: {
  }
}
</script>

