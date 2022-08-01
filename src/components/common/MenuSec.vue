<template>
  <nav class="header-menu menu nav">
      <!-- menu list -->
      <MenuListSec></MenuListSec>
  </nav><!-- .header-menu -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

// @ is an alias to /src
import MenuListSec from '@/components/common/MenuListSec.vue'

export default {
  name: 'MenuSec',
  props: ['classname'],
  components: {
    MenuListSec
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
