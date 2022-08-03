<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
      <!-- Header main -->
      <HeaderDashboard></HeaderDashboard>
      <!-- hero -->
      <!-- <AuthorHero avatarSize="avatar-3" :coverimg="SectionData.authorPersonalData.coverImg" :img="SectionData.authorPersonalData.img" :title="SectionData.authorPersonalData.title" :username="SectionData.authorPersonalData.userName" :btntext="SectionData.authorPersonalData.btnText" :btnlink="SectionData.authorPersonalData.btnLink"></AuthorHero> -->
    </header>
    <!-- offer section -->
    <section class="user-panel-section section-space">
      <div class="container">
        <div class="row">
          <!-- user sidebar -->
          <div class="col-lg-3">
            <div
              class="sidebar-head d-flex flex-wrap align-items-center justify-content-between"
            >
              <h3 class="sidebar-head-title">Home</h3>
              <div class="sidebar-head-action d-flex align-items-center">
                <div class="sidebar-drop dropdown">
                  <a class="icon-btn menu-toggler-user-open" href="#">
                    <em class="ni ni-menu"></em>
                  </a>
                </div>
                <!-- end sidebar-drop -->
              </div>
              <!-- end sidebar-head-action -->
            </div>
            <!-- end sidebar-head -->
            <div class="sidebar sidebar-user-mobile">
              <a href="#" class="icon-btn menu-toggler-user-close">
                <em class="ni ni-cross"></em>
              </a>
              <div class="sidebar-widget">
                <ul class="user-nav">
                  <li class="active">
                    <router-link v-if="checkPrivilege('home')" to="homeadmin"
                      ><em class="ni ni-home me-2"></em>Home</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      v-if="checkPrivilege('pengaturan')"
                      to="pengaturan"
                      ><em class="ni ni-share me-2"></em>Pengaturan</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      v-if="checkPrivilege('register-index')"
                      to="offers"
                      ><em class="ni ni-user me-2"></em>Register</router-link
                    >
                  </li>
                  <li>
                    <router-link to="member"
                      ><em class="ni ni-users me-2"></em>Member</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      v-if="checkPrivilege('kontak-index')"
                      to="transactions"
                      ><em class="ni ni-user-list me-2"></em
                      >Contacts</router-link
                    >
                  </li>
                  <li>
                    <router-link to="kegiatan"
                      ><em class="ni ni-calendar me-2"></em
                      >Kegiatan</router-link
                    >
                  </li>
                </ul>
              </div>
              <!-- end sidebar-widget -->
            </div>
            <!-- end sidebar -->
          </div>
          <!-- end col-lg-4 -->
          <!-- home -->
          <HomeAdminSection></HomeAdminSection>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end user-panel-section -->
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "Offers",
  data() {
    return {
      SectionData,
    };
  },
  methods: {
    checkPrivilege(privilege) {
      const permission = localStorage.getItem("permission");
      let status = false;
      JSON.parse(permission).forEach((data) => {
        if (data === privilege) {
          status = true;
        }
      });
      return status;
    },
  },
  mounted() {
    /*  =======================================================
        User sidebar menu
        ========================================================== */
    var sidebarMenuOpen = document.querySelector(".menu-toggler-user-open");
    var userSidebar = document.querySelector(".sidebar-user-mobile");

    function userSidebarMenu() {
      if (sidebarMenuOpen) {
        sidebarMenuOpen.addEventListener("click", function (e) {
          e.preventDefault();
          userSidebar.classList.add("active");
        });
      }
    }

    userSidebarMenu();

    userSidebar.addEventListener("click", function () {
      this.classList.remove("active");
    });
  },
};
</script>
