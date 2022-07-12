<template>
    <div class="header-main is-sticky" :class="isTransparent">
        <div class="container">
            <div class="header-wrap">
                <!-- logo -->
                <Logo></Logo>
                <!-- mobile action -->
                <MobileActionTwo></MobileActionTwo>
                <!-- Judul samping logo -->
                <div class="ms-2">
                  <router-link to="/"><h3>Perkumpulan Pelaku Logistik Indonesia</h3></router-link>
                </div>
                <!-- heder search -->
                <!-- <HeaderSearch class="header-search-form-s2"></HeaderSearch> -->
                <!-- Menu -->
                <AdminMenu classname="btn-primary"></AdminMenu>
                <div class="header-overlay"></div>
            </div><!-- .header-warp-->
        </div><!-- .container-->
    </div><!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import Logo from '@/components/common/Logo.vue'
import MobileActionTwo from '@/components/common/MobileActionTwo.vue'
// import HeaderSearch from '@/components/common/HeaderSearch.vue'
import AdminMenu from '@/components/common/AdminMenu.vue'

export default {
  name: 'HeaderDashboard',
  props: ['isTransparent'],
  components: {
    Logo,
    MobileActionTwo,
    // HeaderSearch,
    AdminMenu
  }
}
</script>
