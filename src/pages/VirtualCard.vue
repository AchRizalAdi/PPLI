<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
        <!-- Header main -->
       <HeaderDashboard></HeaderDashboard>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbList.title" :lists="SectionData.breadcrumbData.breadcrumbList.navList"></HeroFour>
    </header>
    <!-- offer section -->
    <section class="user-panel-section">
            <div class="container">
              
                <div class="row">
                    <!-- user sidebar -->
                    <!-- <UserSidebar :title="SectionData.transactionsSidebarData.title" :lists="SectionData.transactionsSidebarData.navList"></UserSidebar> -->
                    <!-- offer -->
                    <VirtualCardSection class=" mt-lg-0"></VirtualCardSection>
                </div><!-- end row -->
            </div><!-- end container -->
    </section><!-- end user-panel-section -->
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'

export default {
  name: 'Transactions',
   components: {
    HeroFour
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
