<template>
    <div class="card card-full">
        <div class="card-image">
            <img :src="product.img" class="card-img-top" alt="art image">
        </div>
        <div class="card-body p-4">
            <h5 class="card-title text-truncate mb-2">{{ product.title }}</h5>
            <div class="card-author mb-3 d-flex">
                <span class="icon ni ni-map-pin mt-1 me-2"></span>
                <p>{{ product.alamat }}</p>
            </div><!-- end card-author -->
            <!-- <div class="card-price-wrap d-flex align-items-center  mb-3"> -->
                <!-- <div class="me-5 me-sm-2">
                    <span class="icon ni ni-location"> {{ product.price }}</span>
                </div> -->
            <!-- </div>end card-price-wrap -->
            <span class="btn btn-sm btn-dark">Detail</span>
        </div><!-- end card-body -->
        <router-link
            class="details"
            :to="{
                name: 'ProductDetail',
                params: {
                id: product.id,
                title: product.title,
                metaText: product.metaText,
                price: product.price,
                priceTwo: product.priceTwo,
                imgLg: product.imgLg,
                metaText: product.metaText,
                metaTextTwo: product.metaTextTwo,
                metaTextThree: product.metaTextThree,
                content: product.content,
                }
            }"
        >
        </router-link>
    </div><!-- end card -->
</template>
<script>
import { createPopper } from '@popperjs/core';
export default {
  name: 'Products',
  props: ['product'],
  mounted () {
    /*============= Custom Tooltips =============== */
    function customTooltip(selector, active) {
    let elem = document.querySelectorAll(selector);
        if(elem.length > 0){
            elem.forEach(item => {
                const parent = item.parentElement;
                const next = item.nextElementSibling;
                createPopper(item, next);
                parent.addEventListener("mouseenter", function() {
                    parent.classList.add(active)
                });
                parent.addEventListener("mouseleave", function() {
                    parent.classList.remove(active)
                });
            });
        }
    }

    customTooltip('.custom-tooltip','active');

  }
}
</script>

<style lang="css" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
 }
 .author-link,
 .card-price-wrap {
   z-index: 2;
   position: relative;
 }
.card-author p{
    font-size: 12px;
}
</style>