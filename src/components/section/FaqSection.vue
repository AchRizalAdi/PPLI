<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>FAQs</h3>
        </div><!-- end user-panel-title-box -->
          <div class="profile-setting-panel-wrap">
            
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
