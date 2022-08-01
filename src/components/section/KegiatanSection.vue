<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>Jadwal Acara</h3>
                        </div><!-- end user-panel-title-box -->
                        
                <!-- {{ kontak }} -->
                        <div class="row">
                            <div class="col d-grid gap-2 d-md-block" v-if="checkPrivilege('provinsi-store')">
                                <router-link to="/add-kegiatan" type="button" class="btn btn-dark btn-sm mb-2">Tambah Kegiatan</router-link>
                                <!-- <button type="button" class="btn btn-primary btn-sm mb-2 ms-2">Card Name</button>     -->
                            </div>
                            <!-- <div class="col">
                                <router-link to="" type="button" class="btn btn-dark btn-sm">List Daftar Kegiatan</router-link>
                            </div> -->
                        </div>
                        <!-- {{ kegiatan }} -->
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <table class="table mb-0 table-s2" id="dataTable">
                                    <thead class="fs-14">
                                        <tr>
                                            <th scope="col" v-for="(list, i) in SectionData.kegiatanData.kegiatanTableHead" :key="i">{{ list }}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-13">
                                        <tr v-for="(item,index) in kegiatan"  :key="item.id">
                                             <td scope="row"  ><a href="#">{{index+1}}</a>  </td> 
                                            <td>{{item.nama_kegiatan}}</td>
                                            <td>{{item.sifat_kegiatan}}</td>
                                            <td>{{item.lokasi_kegiatan}}</td>
                                            <td>{{item.tanggal_rencana}}</td>
                                            <td>{{item.tanggal_realisasi}}</td>
                                            <td>{{item.keterangan}}</td>
                                            <td class="row">
                                                <!-- <router-link :to="{name: 'show-contact', params: { id: item.id }}" class="col- icon-btn  p-0 m-0" title="Show"><em class="fa fa-eye" ></em></router-link> -->
                                                <!-- <button  @click="showCities(item.id)" class="col-sm-1 icon-btn " title="Show" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="fa fa-eye" ></em></button> -->
                                                <router-link :to="{name: 'edit-kegiatan', params: { id: item.id }}" class="col- p-0 m-0 icon-btn " title="Edit"><em class="fa fa-pencil-square-o" ></em></router-link>
                                                <button  @click="deleteKegiatan(item.id)" class="col- p-0 m-0 icon-btn " title="Delete" ><em class="ni ni-trash"></em></button>
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
        </div><!-- end col-lg-8 -->          
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Pagination from 'v-pagination-3';
import axios from 'axios';
import $ from "jquery";
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
      kegiatan: [],
    }
  },
  
  methods: {
    resetnama() {
        this.name=null;
    },
            getKegiatan(){
            axios.get('http://127.0.0.1:8000/api/kegiatan')
            .then(function(response){
                this.kegiatan = response.data;
                 $(document).ready(function () {
                $('#dataTable').DataTable();
            });
            }.bind(this));
        },
        deleteKegiatan (id){
            if(confirm("Apakah Kamu Yakin?")){
        axios.delete('http://127.0.0.1:8000/api/kegiatan/'+id)
        .then(function () {
                this.getKegiatan()
                this.$toast.error("Berhasil delete");
        }.bind(this));
            }
        },
         checkPrivilege(privilege) {
      const permission = localStorage.getItem("permission");
      let status = false;
      JSON.parse(permission).forEach((data) => {
        if (data === privilege) {
          status = true;
        }
      });
      return status;
    },
        },
 created: function(){
             this.getKegiatan()
             
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

       