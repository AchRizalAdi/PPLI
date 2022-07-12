<template>
    <div class="col-lg-9">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.tipemitraData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="d-grid gap-2 d-md-block">
                            <button type="button" class="btn btn-primary btn-sm mb-2"><route-link class="ni ni-plus" to=""> Add Tipe Mitra</route-link></button>
                            <input v-model="search" type="text" class="form-control form-control-s1 w-25 mb-4" placeholder="Search here...">
                        </div>
                        <div class="profile-setting-panel-wrap">
                            <div class="table-responsive">
                                <table class="table mb-0 table-s2">
                                    <thead class="fs-14">
                                        <tr>
                                            <th scope="col" v-for="(list, i) in SectionData.tipemitraData.tipemitraTableHead" :key="i">{{ list }}</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-13">
                                        <tr v-for="item in displayedRecords" :key="item.id">
                                            <th scope="row"><a href="#">{{ item.id }}</a></th>
                                            <td>{{ item.title }}</td>
                                            <td class="row g-1 ">
                                                <router-link to="#" class="icon-btn me-1" title="Edit"><em class="ni ni-file"></em></router-link>    
                                                <router-link to="#" class="icon-btn ms-4" title="Remove"><em class="ni ni-trash "></em></router-link> 
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

export default {
  name: 'tipemitraSection',
   components: {
    Pagination
  },
  data () {
    return {
      SectionData,
      page: 1,
      perPage: 6,
      records: [
        {
            id: 4947,
            title: 'Patternlicious',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/visa.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
        {
            id: 4904,
            title: 'Alex Smith',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/paypal.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
        {
            id: 4840,
            title: 'Alex Smith',
            timeText: '10-05-2019',
            price: '$99.00',
            img: require('@/images/brand/a-express.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Declined',
            badgeClass: 'bg-danger'
        },
        {
            id: 4740,
            title: 'Patternlicious',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/visa.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
        {
            id: 4444,
            title: 'Kamran Media',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/paypal.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
        {
            id: 4144,
            title: 'Jisan Media',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/a-express.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Declined',
            badgeClass: 'bg-danger'
        },
        {
            id: 4145,
            title: 'Alok Kamali',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/paypal.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Declined',
            badgeClass: 'bg-danger'
        },
        {
            id: 4146,
            title: 'Patternlicious',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/paypal.png'),
            email: 'sadasdj@jfahfjkah.com',
            perusahaan: 'bojong',
            badgeText: 'Declined',
            badgeClass: 'bg-danger'
        },
        {
            id: 4147,
            title: 'KhanTech',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/paypal.png'),
            email: 'sadasdj@jfahfjkah.com',
        perusahaan: 'bojong',
            badgeText: 'Declined',
            badgeClass: 'bg-danger'
        },
        {
            id: 4148,
            title: 'Jhonatan Doe',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/a-express.png'),
            email: 'sadasdj@jfahfjkah.com',
        perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
        {
            id: 4149,
            title: 'John Doe',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/a-express.png'),
            email: 'sadasdj@jfahfjkah.com',
        perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
        {
            id: 4150,
            title: 'Petter',
            timeText: '10-05-2019',
            price: '$599.00',
            img: require('@/images/brand/a-express.png'),
            email: 'sadasdj@jfahfjkah.com',
        perusahaan: 'bojong',
            badgeText: 'Member',
            badgeClass: 'bg-success'
        },
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
