<template>
<div>
    <div class="sidebar mb-5 mb-xl-0 row">
        <div class="col-md-6 col-lg-6 col-xl-12 sidebar-widget">
            <h4 class="mb-3">Informasi Perusahaan</h4>
            <h6 class="mb-1">Perusahaan Didirikan</h6>
            <p class="sidebar-text mb-2">1999</p>
            <h6 class="mb-1">Pekerja</h6>
            <p class="sidebar-text mb-4">1-20 orang</p>
            <h4 class="mb-1">Kantor Utama</h4>
            <p class="sidebar-text mb-1">Alamat Lengkap Kantor Utama Perusahaan dengan Kota Provinsi</p>
        </div><!-- end col -->
        <div class="col-md-6 col-lg-6 col-xl-12 sidebar-widget">
            <h4 class="mb-3">Sosial Media Perusahaan</h4>
            <!-- <ul class="sosmed">
                <li class="btn"></li>
            </ul> -->
            <ul class="social-links">
                <li v-for="(link, i) in links" :key="i"><router-link :to="link.path"><span class="ni icon" :class="link.class"></span>{{ link.title }}</router-link></li>
            </ul>
        </div><!-- end col -->
        <div class="col-md-6 col-lg-6 col-xl-12 sidebar-widget">
            <h5 class="mb-2">Bergabung Sejak</h5>
            <p class="sidebar-text">2022</p>
        </div><!-- end col -->
     </div><!-- end sidebar -->
    <!-- Modal -->
    <div class="modal fade" id="followersModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <ul class="nav nav-tabs nav-tabs-s1 nav-tabs--s1" id="myTabTwo" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="following-tab" data-bs-toggle="tab" data-bs-target="#following" type="button" role="tab" aria-controls="following" aria-selected="false">{{ SectionData.followersModal.btnText}}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="followers-tab" data-bs-toggle="tab" data-bs-target="#followers" type="button" role="tab" aria-controls="followers" aria-selected="true">{{ SectionData.followersModal.btnTextTwo }}</button>
                        </li>
                    </ul>
                    <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                        <em class="ni ni-cross"></em>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="tab-content" id="myTabContentTwo">
                        <div class="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                            <div class="item-detail-tab-wrap">
                                <div class="card-follow d-flex align-items-center justify-content-between" v-for="item in SectionData.followersModal.followingList" :key="item.id">
                                    <div class="d-flex align-items-center">
                                        <a :href="item.path" class="avatar flex-shrink-0 me-2">
                                            <img :src="item.avatar" alt="avatar">
                                        </a>
                                        <div class="flex-grow-1">
                                            <p class="fw-semibold fs-14 lh"><a :href="item.path" class="text-black">{{ item.title }}</a></p>
                                            <span class="d-block fw-medium fs-15">{{ item.userName }}</span>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-light btn-show">{{ item.btnText }}</button>
                                    <button type="button" class="btn btn-sm btn-light btn-hide"><em class="ni ni-user-add"></em></button>
                                </div><!-- end card-follow -->
                            </div><!-- end item-detail-tab-wrap -->
                        </div><!-- end tab-pane -->
                        <div class="tab-pane fade show active" id="followers" role="tabpanel" aria-labelledby="followers-tab">
                            <div class="item-detail-tab-wrap">
                                <div class="card-follow d-flex align-items-center justify-content-between" v-for="item in SectionData.followersModal.followerList" :key="item.id">
                                    <div class="d-flex align-items-center">
                                        <a :href="item.path" class="avatar flex-shrink-0 me-2">
                                            <img :src="item.avatar" alt="avatar">
                                        </a>
                                        <div class="flex-grow-1">
                                            <p class="fw-semibold fs-14 lh"><a :href="item.path" class="text-black">{{ item.title }}</a></p>
                                            <span class="d-block fw-medium fs-15">{{ item.userName }}</span>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-light btn-show">{{ item.btnText }}</button>
                                    <button type="button" class="btn btn-sm btn-light btn-hide"><em class="ni ni-user-add"></em></button>
                                </div><!-- end card-follow -->
                            </div><!-- end item-detail-tab-wrap -->
                        </div><!-- end tab-pane -->
                    </div>
                </div><!-- end modal-body -->
            </div><!-- end modal-content -->
        </div><!-- end modal-dialog -->
    </div><!-- end modal-->
</div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'AuthorSidebar',
  props: ['content', 'followingnum', 'followingtext', 'followernum', 'followertext', 'datetext', 'avatars', 'links'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
