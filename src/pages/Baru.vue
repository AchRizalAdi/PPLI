<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
        <!-- Header main -->
        <HeaderDashboard></HeaderDashboard>
        <!-- hero -->
        <!-- <AuthorHero avatarSize="avatar-3" :coverimg="SectionData.authorPersonalData.coverImg" :img="SectionData.authorPersonalData.img" :title="SectionData.authorPersonalData.title" :username="SectionData.authorPersonalData.userName" :btntext="SectionData.authorPersonalData.btnText" :btnlink="SectionData.authorPersonalData.btnLink"></AuthorHero> -->
    </header>
    <!-- offer section -->
    <!-- <p>{{ cities }}</p>
    <P>{{ cities.data }}</P>
    <P>{{ cities.data.id }}</P> -->
    
    <div class="container mt-5" >
      <select>
      <option v-for="item in cities.data" :key="item.message">{{ item.name }}</option>
      </select>
    </div>
    <div class="container mt-5" >
      
    </div>
    <div class="container mt-5 w-25">
      <v-select  v-model="selected" :options="cities" />
    </div>
    
      
    <!-- Footer  -->
    
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import axios from 'axios'


export default {
  name: 'Baru',
  data () {
    return {
      SectionData,
      cities: []
    }
  },
  methods: {
    loadData(){
        axios.get('http://127.0.0.1:8000/api/cities').then(({data}) => (this.cities = data));
    }
  },
  created (){
    this.loadData();
  },
}
</script>
