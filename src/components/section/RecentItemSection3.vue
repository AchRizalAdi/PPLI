<template>
    <section class="recent-section">
            <div class="container">
                <SectionHeading classname="text-center" :text="SectionData.recentItemData3.title" :content="SectionData.recentItemData3.content" isMargin="mb-1"></SectionHeading>
                <!-- Recent item slider -->
                <RecentItemSlider3></RecentItemSlider3>
            </div>
        </section>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'RecentItemSection3',
  data () {
    return {
      SectionData
    }
  }
}
</script>
