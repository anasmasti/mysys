<template>
<div id="partenaire">
 <div class="container-fluid mb-4 border-bottom">

  <div class="row">
   <div class="p-card col-lg-6 col-sm-12 bg_gradient p-3 border-0 radius_0">
    <div class="card-body d-flex flex-column justify-content-center">
      <h1 class="font-s12 font-md-s10 font-sm-s8 text_bold">Nos Partenaires</h1>
      <p class="card-text">
        <!-- Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
        à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès
        qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem 
        ipsum ou Lipsum. -->
      </p>
    </div>
   </div>

  <div class="p-card bg-white col-lg-6 col-sm-12 p-3 border-0 radius_0">
    <div class="card-body">
      <div class="row">

        <div v-for="(part, partIndex) in partenaires" :key="partIndex" class="col-lg-4 col-md-4 col-sm-6 col-6">
          <img class="p-card-img" :src="(part.imgURL)" :alt="part.alt" />
        </div>

      </div>
      <!-- end-row -->
    </div>
    <!-- end-card-body -->
  </div>
  
 </div>
</div>
<!-- end-container-fluid -->

</div>
</template>

<script>
export default {
  components: { },
  name: 'Partenaire',
  data() {
    return {
      partenaires: [
        {imgURL: require('../../../../assets/img/companies/pearson.png'), alt: 'pearson-partenaire'},
        {imgURL: require('../../../../assets/img/companies/odoo.png'), alt: 'odoo-partenaire'},
        {imgURL: require('../../../../assets/img/companies/oracle.png'), alt: 'oracle-partenaire'},
        {imgURL: require('../../../../assets/img/companies/microsoft.png'), alt: 'microsoft-partenaire'},
        {imgURL: require('../../../../assets/img/companies/sap.png'), alt: 'sap-partenaire'},
        {imgURL: require('../../../../assets/img/companies/ibm.png'), alt: 'ibm-partenaire'},
        {imgURL: require('../../../../assets/img/companies/pmi.png'), alt: 'pmi-partenaire'},
      ]
    }
  } // data
}
</script>

<style lang="scss">
  @import '../../../../assets/css/partenaire.scss';
</style>


