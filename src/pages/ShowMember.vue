<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
        <!-- Header main -->
        <HeaderDashboard></HeaderDashboard>
        <!-- hero -->
          <AuthorHeroSec class="bg-grey" avatarSize="avatar-3" :isDropdown="true" :isCopyInput="true" :img="SectionData.authorPublicData.img" :title="SectionData.authorPublicData.title" :username="SectionData.authorPublicData.userName" :btntext="SectionData.authorPublicData.btnText" :btnlink="SectionData.authorPublicData.btnLink"></AuthorHeroSec>
        </header>
    <!-- offer section -->
    <section class="user-panel-section section-space">
            <div class="container">
                <div class="row">
                    <!-- user sidebar -->
                    <!-- <UserSidebar :title="SectionData.DPWSidebarData.title" :lists="SectionData.DPWSidebarData.navList" :navs="SectionData.DPWTabNavMobile"></UserSidebar> -->
                    <!-- DPW -->
                    <ShowMemberSection></ShowMemberSection>
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
export default {
  name: 'EditContact',
  data () {
    return {
      SectionData
    }
  }
}
</script>
