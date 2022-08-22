<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <!-- account section -->
    <section class="user-panel-section section-space">
      <div class="container">
        <div class="row">
          <!-- user sidebar -->
          <UserSidebar
            :title="SectionData.faqSidebarData.title"
            :lists="SectionData.faqSidebarData.navList"
          ></UserSidebar>
          <FaqSection></FaqSection>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end user-panel-section -->
    <!-- Blog  -->
    <Footer classname="bg-dark on-dark"></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "Faq",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
