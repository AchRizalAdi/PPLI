<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <section class="item-detail-section section-space">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 pe-xl-5">
                        <div class="item-detail-content">
                            <div class="item-detail-img-container mb-4">
                                <img :src="imgLg" alt="" class="w-100 rounded-3">
                            </div><!-- end item-detail-img-container -->                            
                        </div><!-- end item-detail-content -->
                    </div><!-- end col -->
                    <div class="col-lg-6">
                        <div class="item-detail-content mt-4 mt-lg-0">
                            <h1 class="item-detail-title mb-2">{{ title }}</h1>
                            <h5 class="mb-2">Didirikan Tahun <em>{{ berdiri }}</em></h5>
                            <p class="item-detail-text mb-4">{{ content }}</p>
                            <h5>Kantor Utama</h5>
                            <p class="mb-2">{{ kantorUtama }} <br> {{ kota }}, {{ wilayah }}</p>
                            <strong>Tel : </strong><em>{{ noHp }}</em>
                            <br>
                            <strong>Email : </strong><em>{{ email }}</em>
                            <br>
                            <strong>Website : </strong><router-link to="">{{ website }}</router-link>
                            <br>
                            <h5 class="mt-2">Jam Kerja</h5>
                            <p>Hari : {{ hariKerja }} <br> Jam : {{ jamKerja }}</p>
                        </div><!-- end item-detail-content -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- .container -->
    </section><!-- end item-detail-section -->
    <!-- Related product -->
    <!-- <RelatedProduct></RelatedProduct> -->
    <Termletter></Termletter>
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Termletter from '../components/section/Termletter.vue';

export default {
    name: "ProductDetail",
    data() {
        return {
            SectionData,
            id: this.$route.params.id,
            title: "",
            imgLg: "",
            metaText: "",
            metaTextTwo: "",
            metaTextThree: "",
            content: "",
            kantorUtama: "",
            kota: "",
            wilayah: "",
            berdiri: "",
            noHp: "",
            email: "",
            website: "",
            jamKerja: "",
            hariKerja: "",
        };
    },
    mounted() {
        SectionData.productData.products.forEach(element => {
            if (this.id == element.id) {
                this.imgLg = element.imgLg;
                this.title = element.title;
                this.metaText = element.metaText;
                this.metaTextTwo = element.metaTextTwo;
                this.metaTextThree = element.metaTextThree;
                this.content = element.content;
                this.kantorUtama = element.kantorUtama;
                this.kota = element.kota;
                this.wilayah = element.wilayah;
                this.berdiri = element.berdiri;
                this.noHp = element.noHp;
                this.email = element.email;
                this.website = element.website;
                this.jamKerja = element.jamKerja;
                this.hariKerja = element.hariKerja;
            }
        });
    },
    components: { Termletter }
}
</script>