<template>
    <section class="recent-section">
            <div class="container">
                <SectionHeading classname="text-center" text="Anggota PPLI" :content="SectionData.recentItemData1.content" isMargin="mb-1"></SectionHeading>
                <!-- Recent item slider -->
                <RecentItemSlider1></RecentItemSlider1>
            </div>
        </section>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'RecentItemSection1',
  data () {
    return {
      SectionData
    }
  }
}
</script>
