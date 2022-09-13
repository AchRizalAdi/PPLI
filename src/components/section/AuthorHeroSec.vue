<template>
  <div
    class="hero-wrap sub-header"
    :style="{ backgroundImage: 'url(' + coverimg + ')' }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="hero-content py-0 d-flex align-items-center">
        <div class="avatar flex-shrink-0">
          <img :src="img" alt="" />
        </div>
        <div
          class="author-hero-content-wrap d-flex flex-wrap justify-content-between ms-3 flex-grow-1"
        >
          <div class="author-hero-content me-3">
            <!-- <h4 class="hero-author-title mb-1 text-white">{{ title }}</h4> -->
          </div>
          <!-- author-hero-conetent -->
          <div class="hero-action-wrap d-flex align-items-center my-2">
            <!-- <router-link
              :to="btnlink"
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#messageModal"
              >Message</router-link
            > -->
            <div class="dropdown ms-3" v-if="isDropdown">
              <a
                class="icon-btn icon-btn-s1"
                href="#"
                data-bs-toggle="dropdown"
                id="reportDropdown"
              >
                <em class="ni ni-more-h"></em>
              </a>
              <ul
                class="dropdown-menu card-generic p-2 dropdown-menu-end mt-2 card-generic-sm"
                aria-labelledby="reportDropdown"
              >
                <router-link
                  to="/edit-company1"
                  class="dropdown-item card-generic-item"
                  >Ubah Detail Akun</router-link
                >
                <router-link
                  to="/edit-acc"
                  class="dropdown-item card-generic-item"
                  >Ubah Data Akun</router-link
                >
              </ul>
            </div>
            <!-- end dropdown -->
          </div>
          <!--end hero-action-wrap -->
        </div>
        <!-- author-hero-content -->
      </div>
      <!-- hero-content -->
    </div>
    <!-- .container-->
  </div>
  <!-- end hero-wrap -->
</template>

<style>
.avatar {
    width: 170px;
    height: 144px;
    border-radius: 15px;
}
.avatar img{
    width: 170px;
    height: 138px;
    border-radius: 15px;
}
</style>

<script>
export default {
  name: "AuthorHero",
  props: [
    "img",
    "avatarSize",
    "title",
    "username",
    "isDropdown",
    "btntext",
    "isCopyInput",
    "btnlink",
    "coverimg",
  ],
  setup() {
    const message = "0x76669f...a0e9ca52";
    const onCopy = (e) => {
      let target = e.trigger.querySelector(".tooltip-text");
      let prevText = target.innerHTML;
      target.innerHTML = "Copied";
      setTimeout(function () {
        target.innerHTML = prevText;
      }, 1000);
    };
    return { message, onCopy };
  },
};
</script>
