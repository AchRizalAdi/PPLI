<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>FAQs</h3>
        </div><!-- end user-panel-title-box -->
          <div class="profile-setting-panel-wrap">
              <div v-for="faq in SectionData.faqData" class="accordion" :key="faq.id" id="#accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" :id="faq.heading">
                      <button class="accordion-button accordion-flush bg-dark text-white" type="button" data-bs-toggle="collapse" :data-bs-target="faq.target" aria-expanded="true" :aria-controls="faq.nama">
                         {{ faq.title }}
                      </button>
                    </h2>
                    <div :id="faq.nama" class="accordion-collapse collapse" :aria-labelebdy="faq.heading" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <strong>{{ faq.text }}</strong>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    </div><!-- end col-lg-8 -->
    <termletter></termletter>
</template>

<script>    
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'FaqSection',
  data () {
    return {
      SectionData,
    }
  },
}
</script>
