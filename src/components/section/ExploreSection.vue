<template>
    <section class="explore-section pt-4">
        <div class="container">
            <!-- filter -->
            <div class="filter-box pb-5">
                <h3 class="mb-4">Filter by</h3>
                <div class="filter-btn-group">
                    <a href="#" class="btn btn-sm filter-btn" :class="tab.class" v-for="tab in filterMenu" @click.prevent="setTab(tab, tab.id)"  :key="tab.id">{{ tab.title }}</a>
                </div>
            </div><!-- end filter-box -->
            <div class="row g-gs">
              <div class="col-xl-3 col-lg-4 col-sm-6" v-for="product in filteredData" :key="product.id">
                <Products :product="product"></Products>
              </div><!-- end col -->
            </div><!-- end end  -->
        </div><!-- .container -->
    </section><!-- end explore-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Products from '@/components/section/Products'

export default {
  name: 'ExploreSection',
  components: { 
    Products
  },
  data () {
    return {
      SectionData,
      filterMenu: [
        {
            id: 1,
            title: 'All',
            class: 'active',
            options: [
                {
                    category: 'freight_forwarding'
                },
                {
                    category: 'trucking'
                },
                {
                    category: 'warehouse'
                },
                {
                    category: 'more'
                },
            ]
        },
        {
            id: 2,
            title: 'Freight Forwarding',
            class: '',
            options: [
                {
                    category: 'freight_forwarding'
                }
            ]
        },
        {
            id: 3,
            title: 'Trucking',
            class: '',
            options: [
                {
                    category: 'trucking'
                }
            ]
        },
        {
            id: 4,
            title: 'Warehouse',
            class: '',
            options: [
                {
                    category: 'warehouse'
                }
            ]
        },
        {
            id: 5,
            title: 'More',
            class: '',
            options: [
                {
                    category: 'more'
                }
            ]
        },
      ],
      selectedTab: null,
      previous_active_id: 1
    }
  },
  methods: {
    setTab(tab, id) {
      this.selectedTab = tab;
      if (this.previous_active_id === id) return;
      this.filterMenu.find(menu => menu.id === this.previous_active_id).class = '';
      this.filterMenu.find(menu => menu.id === id).class = 'active';
      this.previous_active_id = id;
    },
  },
  computed: {
      filteredData () {
        return this.SectionData.productData.products.filter(data => {
        if (this.selectedTab === null) return true
        const opts = this.selectedTab.options.map(opt => opt.category)
        return opts.includes(data.category)
      })
    },
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
 .author-link {
   z-index: 2;
   position: relative;
 }
</style>