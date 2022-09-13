<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main">
          <!-- Header main -->
          <HeaderDashboard></HeaderDashboard>
          <!-- hero -->
          <AuthorHeroSec class="bg-grey" avatarSize="avatar-3" :isDropdown="true" :isCopyInput="true" :img="SectionData.authorPublicData.img" :title="SectionData.authorPublicData.title" :username="SectionData.authorPublicData.userName" :btntext="SectionData.authorPublicData.btnText" :btnlink="SectionData.authorPublicData.btnLink"></AuthorHeroSec>
        </header>
        <!-- Author section  -->
        <AuthorSectionSec></AuthorSectionSec>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import AuthorHeroSec from '../components/section/AuthorHeroSec.vue'
import AuthorSectionSec from '../components/section/AuthorSectionSec.vue'
export default {
    name: "Dashboard",
    data() {
        return {
            SectionData
        };
    },
    components: { AuthorHeroSec, AuthorSectionSec }
}
</script>
