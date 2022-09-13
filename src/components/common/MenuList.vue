<template>
  <ul class="menu-list ms-lg-auto">
    <!-- <li class="menu-item has-sub">
              <a href="#" class="menu-link menu-toggle">{{ SectionData.headerData.menuList.title }}</a>
              <div class="menu-sub menu-mega">
                 <ul class="menu-list">
                      <li class="menu-item" v-for="nav in SectionData.headerData.menuList.navList" :key="nav.id"><router-link :to="nav.path" class="menu-link">{{ nav.title }} <span :class="nav.badgeClass" v-if="nav.badge">{{ nav.badge }}</span></router-link></li>
                 </ul>
              </div>
          </li> -->
    <li class="menu-item has-sub">
      <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList2.title
      }}</a>
      <div class="menu-sub">
        <ul class="menu-list">
          <li class="menu-item">
            <router-link to="/contact" class="menu-link">Kontak</router-link>
            <a href="https://www.ppliofficial.com/faqs/" class="menu-link"
              >F A Q
              </a
            >
            <a href="https://www.ppliofficial.com/syarat-keanggotaan/" class="menu-link"
              >Term and Condition
              </a
            >
            <a href="https://www.ppliofficial.com/kebijakan-privasi/" class="menu-link"
              >Privacy & Policy
              </a
            >
          </li>
        </ul>
      </div>
    </li>
    <li class="menu-item has-sub">
      <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList3.title
      }}</a>
      <div class="menu-sub">
        <ul class="menu-list">
          <li class="menu-item">
            <a href="https://www.ppliofficial.com/struktur-organisasi/" class="menu-link"
              >Kepengurusan
              </a
            >
            <a href="https://www.ppliofficial.com/about-ppli/" class="menu-link"
              >About PPLI
              </a
            >
          </li>
        </ul>
      </div>
    </li>
    <!-- <li class="menu-item">
             <router-link class="btn btn-lg btn-outline-dark " to="/login">{{ SectionData.headerData.logText }}</router-link>
          </li> -->
  </ul>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
  name: "MenuList",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
