<template>
<div class="page-wrap">
    <!-- header  -->
        <header class="header-section has-header-main bg-gradient-2">
          <!-- Header main -->
          <HeaderMain isTransparent="is-transparent"></HeaderMain>
          <!-- hero -->
          <heroThree></heroThree>
        </header>
    
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all
import SectionData from '@/store/store.js'
export default {
  name: 'Terms',
  data () {
    return {
      SectionData
    }
  }
}
</script>
