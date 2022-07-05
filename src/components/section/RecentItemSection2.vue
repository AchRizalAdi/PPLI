<template>
    <section class="recent-section section-space-b">
            <div class="container">
                <SectionHeading classname="text-center" :text="SectionData.recentItemData2.title" :content="SectionData.recentItemData2.content" isMargin="mb-3"></SectionHeading>
                <!-- Recent item slider -->
                <RecentItemSlider2></RecentItemSlider2>
            </div>
        </section>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'RecentItemSection2',
  data () {
    return {
      SectionData
    }
  }
}
</script>
