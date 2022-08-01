<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <!-- {{ privilege }} -->
                            <h3>Privilege</h3>
                        </div><!-- end user-panel-title-box -->
                        
                <!-- {{ cities }} -->
                        <!-- <div class="d-grid gap-2 d-md-block">
                            <button @click="resetnama()" type="button" class="btn btn-primary btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#addModal">Add Group</button>
                        </div> -->
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <table class="table mb-0 table-s2" id="dataTable">
                                    <thead class="fs-14">
                                        <tr>
                                            <th scope="col" v-for="(list, i) in SectionData.privilegeData.privilegeTableHead" :key="i">{{ list }}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-13">
                                        <tr v-for="item in privilege"  :key="item.id">
                                            <td>{{item.permission_name}}</td>
                                            <td class="row">
                                                <div class="form-check form-switch form-switch-s1 ms-4">
                                                    <input v-model="item.has_permission" class="form-check-input checkbox-switcher" data-target="switch-content-unlock" type="checkbox">
                                                </div><!-- end form-check -->
                                                <!-- <button  @click="showCities(item.id)" class="col-sm-1 icon-btn" title="Show" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="fa fa-eye" ></em></button> -->
                                            </td>
                                        </tr> 
                                    </tbody>
                                </table>
                            </div><!-- end table-responsive -->
                            <!-- pagination -->
                            <div class="text-center mt-4 mt-md-5">
                                <Pagination :records="records.length" v-model="page" :per-page="perPage"></Pagination>
                            </div>
                        </div><!-- end profile-setting-panel-wrap-->
                        <!-- BUTTON -->
                        <router-link to="/pengaturan" type="button" class="btn btn-sm btn-dark " >Kembali</router-link>
        </div><!-- end col-lg-8 -->          
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Pagination from 'v-pagination-3';
import axios from 'axios';
// import $ from "jquery";
// import { reactive } from 'vue';
// import { onMounted, ref } from 'vue';

export default {
    components: {
    Pagination
  },
  data () {
    return {
      SectionData,
      page: 1,
      i:1,
      perPage: 6,
      records: [],
      privilege: [],
    }
  },
  created() {
            axios
                .get(`http://127.0.0.1:8000/api/role/shows/${this.$route.params.id}`)
                .then((res) => {
                    this.privilege = res.data;
                });
        },
  methods: {

  },
  computed: {
      displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    }
  },
}
</script>

       