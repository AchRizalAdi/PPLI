import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home2',
    component: () => import('../pages/Home-v2.vue')
  },
  {
    path: '/homeadmin',
    name: 'homeadmin',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/HomeAdmin.vue')
  },
  {
    path: '/iuran',
    name: 'iuran',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Iuran.vue')
  },
  {
    path: '/log',
    name: 'log',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Log.vue')
  },
  {
    path: '/setting-email',
    name: 'setting-email',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/SettingEmail.vue')
  },
  {
    path: '/dpw',
    name: 'dpw',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/DPW.vue')
  },
  {
    path: '/daftar-mitra',
    name: 'daftar-mitra',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/DaftarMitra.vue')
  },
  {
    path: '/transaksi',
    name: 'transaksi',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Transaksi.vue')
  },
  {
    path: '/laporan-pembukuan',
    name: 'laporan-pembukuan',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/LaporanPembukuan.vue')
  },
  {
    path: '/edit-transaksi/:id',
    name: 'edit-transaksi',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/EditTransaksi.vue')
  },
  {
    path: '/edit-member/:id',
    name: 'edit-member',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/EditMember.vue')
  },
  {
    path: '/member',
    name: 'member',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Member.vue')
  },
  {
    path: '/industry',
    name: 'industry',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Industry.vue')
  },
  {
    path: '/kegiatan',
    name: 'kegiatan',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Kegiatan.vue')
  },
  {
    path: '/show-contact/:id',
    name: 'show-contact',
    component: () => import('../pages/ShowContact.vue')
  },
  {
    path: '/show-register/:id',
    name: 'show-register',
    component: () => import('../pages/ShowRegister.vue')
  },
  {
    path: '/show-member/:id',
    name: 'show-member',
    component: () => import('../pages/ShowMember.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true,
      isUser: true
    }, 
    component: () => import('../pages/Dashboard.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../pages/Users.vue')
  },
  {
    path: '/city',
    name: 'city',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/City.vue')
  },
  {
    path: '/provinsi',
    name: 'provinsi',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Prov.vue')
  },
  {
    path: '/khas',
    name: 'khas',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Khas.vue')
  },
  {
    path: '/rekap-bulanan',
    name: 'rekap-bulanan',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/RekapBulanan.vue')
  },
  {
    path: '/pengumuman',
    name: 'pengumuman',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Pengumuman.vue')
  },
  {
    path: '/bank',
    name: 'bank',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Bank.vue')
  },
  {
    path: '/kategori-akun',
    name: 'kategori-akun',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/KategoriAkun.vue')
  },
  {
    path: '/jabatan',
    name: 'jabatan',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Jabatan.vue')
  },
  {
    path: '/wilayah',
    name: 'wilayah',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Wilayah.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../pages/Admin.vue')
  },
  {
    path: '/tipe-mitra',
    name: 'tipe-mitra',
    component: () => import('../pages/TipeMitra.vue')
  },
  {
    path:'/product-details-v1-:id',
    name:'ProductDetail',
    component: () => import('../pages/ProductDetail.vue'),
    props: true
  },
  {
    path:'/product-details-v2-:id',
    name:'ProductDetail_v2',
    component: () => import('../pages/ProductDetail-v2.vue'),
    props: true
  },
  {
    path:'/product-details-v3-:id',
    name:'ProductDetail_v3',
    component: () => import('../pages/ProductDetail-v3.vue'),
    props: true
  },
  {
    path: '/item-details',
    name: 'itemDetails',
    component: () => import('../pages/ItemDetails.vue')
  },
  {
    path: '/item-details-v2',
    name: 'itemDetailsV2',
    component: () => import('../pages/ItemDetails-v2.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../pages/Explore.vue')
  },
  {
    path: '/explore-v2',
    name: 'exploreV2',
    component: () => import('../pages/Explore-v2.vue')
  },
  {
    path: '/explore-v3',
    name: 'exploreV3',
    component: () => import('../pages/Explore-v3.vue')
  },
  {
    path: '/explore-v4',
    name: 'exploreV4',
    component: () => import('../pages/Explore-v4.vue')
  },
  {
    path: '/explore-v5',
    name: 'exploreV5',
    component: () => import('../pages/Explore-v5.vue')
  },
  {
    path: '/explore-v6',
    name: 'exploreV6',
    component: () => import('../pages/Explore-v6.vue')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import('../pages/Author.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../pages/AboutUs.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../pages/Activity.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../pages/Ranking.vue')
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../pages/Wallet.vue')
  },
  {
    path: '/wallet-v2',
    name: 'wallet-v2',
    component: () => import('../pages/WalletTwo.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/Blog.vue')
  },
  {
    path: '/pengurus',
    name: 'pengurus',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Pengurus.vue')
  },
  {
    path: '/pengurusdata',
    name: 'pengurusdata',
    component: () => import('../pages/PengurusData.vue')
  },
  {
    path: '/blog-detail-:id',
    name:'NewsDetail',
    component: () => import('../pages/NewsDetail.vue'),
  },
  {
    path: '/blog-detail',
    name: 'blog-details',
    component: () => import('../pages/BlogDetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/login-v2',
    name: 'login v2',
    component: () => import('../pages/Login-v2.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/offers',
    name: 'Offer',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Offers.vue')
  },
  {
    path: '/activity-v2',
    name: 'activity-v2',
    component: () => import('../pages/Activity-v2.vue')
  },
  {
    path: '/purchases-sales',
    name: 'purchases-sales',
    component: () => import('../pages/PurchasesSales.vue')
  },
  {
    path: '/virtual-card',
    name: 'virtual-card',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/VirtualCard.vue')
  },
  {
    path: '/transactions',
    name: 'transactions',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Transactions.vue')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import('../pages/Display.vue')
  },
  {
    path: '/redeem',
    name: 'redeem',
    component: () => import('../pages/Redeem.vue')
  },
  {
    path: '/deposit-enfties',
    name: 'deposit-enfties',
    component: () => import('../pages/DepositEnfties.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/Profile.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../pages/Account.vue')
  },
  {
    path: '/payment-methods',
    name: 'payment-methods',
    component: () => import('../pages/PaymentMethods.vue')
  },
  {
    path: '/seller-settings',
    name: 'seller-settings',
    component: () => import('../pages/SellerSettings.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('../pages/Notifications.vue')
  },
  {
    path: '/security',
    name: 'security',
    component: () => import('../pages/Security.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../pages/Create.vue')
  },
  {
    path: '/create-single',
    name: 'create-single',
    component: () => import('../pages/CreateSingle.vue')
  },
  {
    path: '/create-multiple',
    name: 'create-multiple',
    component: () => import('../pages/CreateMultiple.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../pages/ForgotPassword.vue')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../pages/ResetPassword.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../pages/Terms.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../pages/Privacy.vue')
  },
  {
    path: '/faq',
    name: 'faqs',
    component: () => import('../pages/Faqs.vue')
  },
  {
    path: '/mitra',
    name: 'mitra',
    component: () => import('../pages/Mitra.vue')
  },
  {
    path: '/pengaturan',
    name: 'pengaturan',
    meta: {
      requiresAuth: true,
      isAdmin: true
   },
    component: () => import('../pages/Pengaturan.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../pages/Members.vue')
  },
  {
    path: '/baru',
    name: 'baru',
    component: () => import('../pages/Baru.vue')
  },
  {
    path: '/user-mana',
    name: 'user-mana',
    component: () => import('../pages/UserMana.vue')
  },  
  {
    path: '/group',
    name: 'group',
    component: () => import('../pages/Group.vue')
  },
  {
    path: '/add-contact',
    name: 'add-contact',
    component: () => import('../pages/AddContact.vue')
  },
  {
    path: '/add-transaksi',
    name: 'add-transaksi',
    component: () => import('../pages/AddTransaksi.vue')
  },
  {
    path: '/add-kegiatan',
    name: 'add-kegiatan',
    component: () => import('../pages/AddKegiatan.vue')
  },
  {
    path: '/edit-kegiatan/:id',
    name: 'edit-kegiatan',
    component: () => import('../pages/EditKegiatan.vue')
  },
  {
    path: '/privilage/:id',
    name: 'privilage',
    component: () => import('../pages/Privilage.vue')
  },
  {
    path: '/privilege/:id',
    name: 'privilege',
    component: () => import('../pages/Privilege.vue')
  },
  {
    path: '/edit-acc/',
    name: 'edit-acc',
    meta: {
      requiresAuth: true,
      isUser: true
    }, 
    component: () => import('../pages/EditAcc.vue')
  },
  {
    path: '/edit-company1/',
    name: 'edit-company1',
    meta: {
      requiresAuth: true,
      isUser: true
    }, 
    component: () => import('../pages/EditCompany1.vue')
  },
  {
    path: '/edit-contact/:id',
    name: 'edit-contact',
    component: () => import('../pages/EditContact.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('token') != null;
    if (!token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
        
      let user = JSON.parse(localStorage.getItem('user'))
      let roles = user.roles
      console.log(roles);
      if (to.matched.some(record => record.meta.isUser)) {
        if (roles.includes('member')) next()
        else if (roles !== 'member') {
          next({
            // name: 'admin'
          })
        } else next({
          name: 'home'
        })
      } else if (to.matched.some(record => record.meta.isAdmin)) {
        if (!roles.includes('member')) next()
          else if (roles === 'member') {
          next({
            name: 'member'
          })
        } else next({
          name: 'home'
        })
        
      } else {
        next()
      }
    }
  } else {
    next()
  }
});


export default router;