<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.usersData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        
                <!-- {{ cities }} -->
                        <div class="d-grid gap-2 d-md-block">
                            <button @click="resetnama()" type="button" class="btn btn-primary btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#addModal">Add Users</button>
                        </div>
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <table class="table mb-0 table-s2">
                                    <thead class="fs-14">
                                        <tr>
                                            <th scope="col" v-for="(list, i) in SectionData.usersData.usersTableHead" :key="i">{{ list }}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-13">
                                        <tr v-for="(item,index) in cities.data"  :key="item.id">
                                             <td scope="row"  ><a href="#">{{index+1}}</a>  </td> 
                                            <td>{{ item.provinsi.name }}</td>
                                            <td>{{item.name}}</td>
                                            <td></td>
                                            <td class="row">
                                                <button  @click="showCities(item.id)" class="col-sm icon-btn ms-auto" title="Show" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="fa fa-eye" ></em></button>
                                                <button  @click="showCities(item.id)" class="col-sm icon-btn ms-auto" title="Edit" data-bs-toggle="modal"  data-bs-target="#editModal"><em class="fa fa-pencil-square-o" ></em></button>
                                                <button  @click="deleteCities(item.id)" class="col-sm icon-btn ms-auto" title="Delete" ><em class="ni ni-trash"></em></button>
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
            <!-- Modal store -->
             <form @submit.prevent="postCities()">
                <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true" >
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="reportModalLabel">Add Provinsi</h4>
                                <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                    <em class="ni ni-cross"></em>
                                </button>
                            </div>
                            <div class="modal-body">
                                 <div class="form-group mb-2">
                                    <label>Provinsi </label>
                                    <select v-model="provinsi" class='form-control' required>
                                        <option  v-for='data in provinsis.data' :value='data.id' :key='data.id' >{{ data.name }}</option>
                                    </select>
                                 </div>
                               <div class="form-floating mb-3 mt-4">
                                <input type="text" class="form-control" id="nama" placeholder="name"  v-model="name"  required>
                                <label for="nama">city</label>
                            </div><!-- end form-floating -->  
                                <button class="btn btn-dark w-100" type="submit">Add</button>
                            </div><!-- end modal-body -->
                        </div><!-- end modal-content -->
                    </div><!-- end modal-dialog -->
                </div><!-- end modal-->
            </form>
               <form @submit.prevent="putCities(id)">
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true" >
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="reportModalLabel">Update City</h4>
                                <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                    <em class="ni ni-cross"></em>
                                </button>
                            </div>
                            <div class="modal-body">
                                 <div class="form-group mb-2">
                                    <label>Provinsi {{id}} </label>
                                    <select v-model="provinsi" class='form-control' required>
                                        <option  v-for='data in provinsis.data' :value='data.id' :key='data.id' >{{ data.name }}</option>
                                    </select>
                                 </div>
                               <div class="form-floating mb-3 mt-4">
                                <input type="text" class="form-control" id="nama" placeholder="name"  v-model="name"  required>
                                <label for="nama">city</label>
                            </div><!-- end form-floating -->  
                                <button class="btn btn-dark w-100" data-bs-dismiss="modal" type="submit">update</button>
                            </div><!-- end modal-body -->
                        </div><!-- end modal-content -->
                    </div><!-- end modal-dialog -->
                </div><!-- end modal-->
            </form>
        </div><!-- end col-lg-8 -->          
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Pagination from 'v-pagination-3';
import axios from 'axios';
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
      provinsis: [],
      name:[],
      cities:[],
      provinsi:[]
    }
  },
  
  methods: {
    resetnama() {
        this.name=null;
    },
      postCities(){
            axios.post('http://127.0.0.1:8000/api/cities', {
                name: this.name,
                provinsiId:this.provinsi,
            }).then(response => {
                
            this.getCities()
            this.$toast.show("berhasil ditambahkan");
            console.log(response);
            }).catch(error => {
            this.$toast.show("Cities sudah ada");
            console.log(error);
            })
            this.name = '';
            this.provinsi='';
        },
        deleteCities (id){
    // alert(id);
            axios.delete('http://127.0.0.1:8000/api/cities/'+id)
            .then(function () {
                     
                         this.getCities()
                          this.$toast.show("berhasil delete");
                    }.bind(this));
        },
       putCities(id){
            axios.post('http://127.0.0.1:8000/api/cities/'+id, {
                name: this.name,
                provinsiId:this.provinsi,
            }).then(response => {
                
            this.getCities()
            this.$toast.show("berhasil update");
            console.log(response);
            }).catch(error => {
            this.$toast.show("gagal update");
            console.log(error);
            })
            this.name = '';
            this.provinsi='';
        },
       
         getProvinsis : function(){
            axios.get('http://127.0.0.1:8000/api/provinsi')
            .then(function (response) {
                        this.provinsis = response.data;
                    }.bind(this));
        },
          showCities (){
            // alert(id);
            axios.get('http://127.0.0.1:8000/api/cities/9')
            .then(function (response) {
                // alert(response);
                // console.log(response.data.data.id);
                this.id = response.data.data.id;
                this.provinsi = response.data.data.provinsi.id;
                this.name = response.data.data.name;
             }.bind(this));
        },
          getCities : function(){
            axios.get('http://127.0.0.1:8000/api/cities')
            .then(function (response) {
                        this.cities = response.data;
                    }.bind(this));
        },
        },
 created: function(){
            this.getProvinsis()
             this.getCities()
             
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

       