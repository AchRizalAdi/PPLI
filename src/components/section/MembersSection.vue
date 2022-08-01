<template>
    <div class="col-lg-9">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.membersData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                            <form >
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <table class="table mb-0 table-s2">
                                    <thead class="fs-14">
                                        <tr>
                                            <th scope="col" v-for="(list, i) in SectionData.membersData.membersTableHead" :key="i">{{ list }}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-13">
                                        <tr v-for="item in registers.data" :key="item.id">
                                            <th scope="row"><a href="#">{{ item.id }}</a></th>
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.email }}</td>
                                            <td>{{ item.username }}</td>
                                            <td>{{ item.NamaPerushaan }}</td>
                                            <td>{{ item.PhoneNumber }}</td>
                                            <td>{{ item.CompanyIndustryId }}</td>
                                            <td>{{ item.WilayahId }}</td>
                                            <td>{{ item.KotaId }}</td>
                                            <td>{{ item.BentukBadanUsaha }}</td>
                                            <td>{{ item.AlasanBergabung }}</td>
                                            <td><span class="badge fw-medium" :class="item.badgeClass">{{ item.badgeText }}</span></td> 
                                            <td><a href="#" class="icon-btn ms-auto" title="Show"><em class="ni ni-file"></em></a></td>
                                            <td><a href="#" class="icon-btn ms-auto" title="Remove"><em class="ni ni-trash"></em></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div><!-- end table-responsive -->
                            <!-- pagination -->
                            <div class="text-center mt-4 mt-md-5">
                                <Pagination :records="records.length" v-model="page" :per-page="perPage"></Pagination>
                            </div>
                        </div><!-- end profile-setting-panel-wrap-->
                        </form>
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Pagination from 'v-pagination-3';
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    setup (){
        let registers= ref([]);

        onMounted(() => {
            axios.get('http://127.0.0.1:8000/api/userRegister')
            .then((result) => {
                registers.value = result.data
            }).catch((err)=>{
                console.log(err.response)
            });
        });
        return {
            registers
        }
    },
  name: 'MembersSection',
   components: {
    Pagination
  },
  data () {
    return {
      SectionData,
      page: 1,
      perPage: 6,
      records: [

      ],
    }
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
