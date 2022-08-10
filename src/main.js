import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Axios from 'Axios'

// vue app
const app = createApp(App);

  // Require Froala Editor js file.
  require('froala-editor/js/froala_editor.pkgd.min.js')
  
  // Require Froala Editor css files.
  require('froala-editor/css/froala_editor.pkgd.min.css')
  require('froala-editor/css/froala_style.min.css')
  
import VueFroala from 'vue-froala-wysiwyg'
app.use(VueFroala)

//VueQuill
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
app.component('QuillEditor', QuillEditor)

// datatable
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

// toaster
import Toaster from "@meforma/vue-toaster";
app.use(Toaster)

// import Select2Component
import Select2 from 'vue3-select2-component';

// Define a new global component called button-counter
app.component('Select2', Select2)

// vue lodash
import VueLodash from 'vue-lodash'
app.use(VueLodash)

// bootstrap
import "bootstrap"

// vue select
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";

app.component('v-select', vSelect)

// clipboard
import VueClipboard from 'vue3-clipboard'
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})

// template custom css
import './assets/scss/bundles.scss'
import './assets/scss/style.scss'

// import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

app.component('font-awesome-icon', FontAwesomeIcon)


// Global page components imported
import HeaderMain from './components/common/HeaderMain.vue';
import UsersSection from './components/section/UsersSection.vue';
import IuranSection from './components/section/IuranSection.vue';
import LogSection from './components/section/LogSection.vue';
import EditTransaksiSection from './components/section/EditTransaksiSection.vue';
import KhasSection from './components/section/KhasSection.vue';
import LaporanPembukuanSection from './components/section/LaporanPembukuanSection.vue';
import RekapBulananSection from './components/section/RekapBulananSection.vue';
import AddTransaksiSection from './components/section/AddTransaksiSection.vue';
import DaftarMitraSection from './components/section/DaftarMitraSection.vue';
import KegiatanSection from './components/section/KegiatanSection.vue';
import HomeAdminSection from './components/section/HomeAdminSection.vue';
import UserManaSection from './components/section/UserManaSection.vue';
import EditAccSection from './components/section/EditAccSection.vue';
import GroupSection from './components/section/GroupSection.vue';
import PrivilageSection from './components/section/PrivilageSection.vue';
import PrivilegeSection from './components/section/PrivilegeSection.vue';
import AddContactSection from './components/section/AddContactSection.vue';
import AddKegiatanSection from './components/section/AddKegiatanSection.vue';
import HeaderMainSec from './components/common/HeaderMainSec.vue';
import HeaderDashboard from './components/common/HeaderDashboard.vue';
import HeaderAdminDashboard from './components/common/HeaderAdminDashboard.vue';
import SectionHeading from './components/common/SectionHeading.vue';
import SectionHeadingTwo from './components/common/SectionHeadingTwo.vue';
import ProductsContainer from './components/section/ProductsContainer.vue';
import FeaturedCreators from './components/section/FeaturedCreators.vue';
import BlogSection from './components/section/BlogSection.vue';
import BlogSectionSlider from './components/section/BlogSectionSlider.vue';
import PengurusSection from './components/section/PengurusSection.vue';
import DashboardSection from './components/section/DashboardSection.vue';
import PengurusSectionSlider from './components/section/PengurusSectionSlider.vue';
import Cta from './pages/Cta.vue';
import CtaSection from './components/section/CtaSection.vue';
import Footer from './pages/Footer.vue';
import FooterSection from './components/section/FooterSection.vue';
import ButtonLink from './components/common/ButtonLink.vue';
import ButtonGroup from './components/common/ButtonGroup.vue';
import LogoLink from './components/common/LogoLink.vue';
import Tab from './components/common/Tab.vue';
import Featured from './components/section/Featured.vue';
import HowItWork from './components/section/HowItWork.vue';
import HowItWork2 from './components/section/HowItWork2.vue';
import HowItWorkTwo from './components/section/HowItWorkTwo.vue';
import HowItWorkThree from './components/section/HowItWorkThree.vue';
import HowItWorkItem from './components/common/HowItWorkItem.vue';
import HowItWorkFour from './components/section/HowItWorkFour.vue';
import HowItWorkSlider from './components/common/HowItWorkSlider.vue';
import Category from './components/section/Category.vue';
import Newsletter from './components/section/Newsletter.vue';
import Termletter from './components/section/Termletter.vue';
import Privacyletter from './components/section/Privacyletter.vue';
import Faqletter from './components/section/Faqletter.vue';
import FeaturedCreatorSlider from './components/common/FeaturedCreatorSlider.vue';
import FeaturedItemSlider from './components/common/FeaturedItemSlider.vue';
import RecentItemSection from './components/section/RecentItemSection.vue';
import RecentItemSlider from './components/common/RecentItemSlider.vue';
import RecentItemSection1 from './components/section/RecentItemSection1.vue';
import RecentItemSlider1 from './components/common/RecentItemSlider1.vue';
import RecentItemSection2 from './components/section/RecentItemSection2.vue';
import RecentItemSlider2 from './components/common/RecentItemSlider2.vue';
import RecentItemSection3 from './components/section/RecentItemSection3.vue';
import RecentItemSlider3 from './components/common/RecentItemSlider3.vue';
import FullScreenSlider from './components/common/FullScreenSlider.vue';
import FunFactSection from './components/section/FunFactSection.vue';
import ExploreSection from './components/section/ExploreSection.vue';
import ExploreSectionTwo from './components/section/ExploreSectionTwo.vue';
import ExploreSectionThree from './components/section/ExploreSectionThree.vue';
import ExploreSectionFour from './components/section/ExploreSectionFour.vue';
import ExploreSectionFive from './components/section/ExploreSectionFive.vue';
import ExploreSectionSix from './components/section/ExploreSectionSix.vue';
import Filters from './components/common/Filters.vue';
import TopCreators from './components/section/TopCreators.vue';
import Creators from './components/common/Creators.vue';
import CreatorsTwo from './components/common/CreatorsTwo.vue';
import CreatorsThree from './components/common/CreatorsThree.vue';
import CreatorsFour from './components/common/CreatorsFour.vue';
import Collections from './components/section/Collections.vue';
import CollectionsTwo from './components/section/CollectionsTwo.vue';
import CollectionSlider from './components/common/CollectionSlider.vue';
import ItemDetailSection from './components/section/ItemDetailSection.vue';
import RelatedProduct from './components/section/RelatedProduct.vue';
import RelatedProductTwo from './components/section/RelatedProductTwo.vue';
import ProductsContainerTwo from './components/section/ProductsContainerTwo.vue';
import ProductsContainerThree from './components/section/ProductsContainerThree.vue';
import ProductsContainerFour from './components/section/ProductsContainerFour.vue';
import ProductsContainerFive from './components/section/ProductsContainerFive.vue';
import ProductsContainerSix from './components/section/ProductsContainerSix.vue';
import AuthorHero from './components/section/AuthorHero.vue';
import AuthorHeroSec from './components/section/AuthorHeroSec.vue';
import PengurusDataSection  from './components/section/PengurusDataSection.vue';
import AuthorSection  from './components/section/AuthorSection.vue';
import AuthorSectionSec  from './components/section/AuthorSectionSec.vue';
import AuthorSidebar from './components/common/AuthorSidebar.vue';
import AboutSection from './components/section/AboutSection.vue';
import BrandSection from './components/section/BrandSection.vue';
import BrandSectionTwo from './components/section/BrandSectionTwo.vue';
import TeamSection from './components/section/TeamSection.vue';
import ActivitySection  from './components/section/ActivitySection.vue';
import RankingSection from './components/section/RankingSection.vue';
import WilayahSection from './components/section/WilayahSection.vue';
import WalletSection from './components/section/WalletSection.vue';
import WalletSectionTwo from './components/section/WalletSectionTwo.vue';
import Pagination from './components/common/Pagination.vue';
import BlogDetailSection from './components/section/BlogDetailSection.vue';
import PengurusDetailSection from './components/section/PengurusDetailSection.vue';
import Comments from './components/common/Comments.vue';
import Form from './components/common/Form.vue';
import Sidebar from './components/common/Sidebar.vue';
import ForgotSection from './components/section/ForgotSection.vue';
import TransaksiSection from './components/section/TransaksiSection.vue';
import ResetSection from './components/section/ResetSection.vue';
import LoginSection from './components/section/LoginSection.vue';
import LoginSectionTwo from './components/section/LoginSectionTwo.vue';
import RegisterSection from './components/section/RegisterSection.vue';
import MitraSection from './components/section/MitraSection.vue';
import ContactSection from './components/section/ContactSection.vue';
import GoogleMap from './components/common/GoogleMap.vue';
import UserSidebar from './components/common/UserSidebar.vue';
import OfferSection from './components/section/OfferSection.vue';
import JabatanSection from './components/section/JabatanSection.vue';
import CitySection from './components/section/CitySection.vue';
import ProvSection from './components/section/ProvSection.vue';
import AdminSection from './components/section/AdminSection.vue';
import UserActivitySection from './components/section/UserActivitySection.vue'
import PurchasesSaleSection from './components/section/PurchasesSaleSection.vue';
import TransactionsSection from './components/section/TransactionsSection.vue';
import DisplaySection from './components/section/DisplaySection.vue';
import RedeemSection from './components/section/RedeemSection.vue';
import DepositSection from './components/section/DepositSection.vue';
import ProfileSection from './components/section/ProfileSection.vue';
import AccountSection from './components/section/AccountSection.vue';
import PengaturanSection from './components/section/PengaturanSection.vue';
import PaymentMethodSection from './components/section/PaymentMethodSection.vue';
import SellerSettingSection from './components/section/SellerSettingSection.vue';
import NotificationSection from './components/section/NotificationSection.vue';
import SecuritySection from './components/section/SecuritySection.vue';
import SellBuy from './components/section/SellBuy.vue';
import ThemeSwitcher from './components/common/ThemeSwitcher.vue';
import ModalSection1 from './components/section/ModalSection1.vue';
import TermSection from './components/section/TermSection.vue';
import PrivacySection from './components/section/PrivacySection.vue';
import FaqSection from './components/section/FaqSection.vue';
import MembersSection from './components/section/MembersSection.vue';
import DPWSection from './components/section/DPWSection.vue';
import MemberSection from './components/section/MemberSection.vue';
import EditCompany1Section from './components/section/EditCompany1Section.vue';
import TipeMitraSection from './components/section/TipeMitraSection.vue';
import IndustrySection from './components/section/IndustrySection.vue';
import EditKegiatanSection from './components/section/EditKegiatanSection.vue';
import EditContactSection from './components/section/EditContactSection.vue';
import ShowContactSection from './components/section/ShowContactSection.vue';
import VirtualCardSection from './components/section/VirtualCardSection.vue';
import ShowRegisterSection from './components/section/ShowRegisterSection.vue';
import ShowMemberSection from './components/section/ShowMemberSection.vue';
import BankSection from './components/section/BankSection.vue';
import PengumumanSection from './components/section/PengumumanSection.vue';
import KategoriAkunSection from './components/section/KategoriAkunSection.vue';
import SettingEmailSection from './components/section/SettingEmailSection.vue';



// Global page components register
app.component('HeaderMain', HeaderMain);
app.component('UsersSection', UsersSection);
app.component('BankSection', BankSection);
app.component('IuranSection', IuranSection);
app.component('LogSection', LogSection);
app.component('TransaksiSection', TransaksiSection);
app.component('SettingEmailSection', SettingEmailSection);
app.component('KhasSection', KhasSection);
app.component('LaporanPembukuanSection', LaporanPembukuanSection);
app.component('RekapBulananSection', RekapBulananSection);
app.component('AddTransaksiSection', AddTransaksiSection);
app.component('DaftarMitraSection', DaftarMitraSection);
app.component('PengumumanSection', PengumumanSection);
app.component('KategoriAkunSection', KategoriAkunSection);
app.component('EditKegiatanSection', EditKegiatanSection);
app.component('EditTransaksiSection', EditTransaksiSection);
app.component('IndustrySection', IndustrySection);
app.component('DPWSection', DPWSection);
app.component('MemberSection', MemberSection);
app.component('KegiatanSection', KegiatanSection);
app.component('HomeAdminSection', HomeAdminSection);
app.component('VirtualCardSection', VirtualCardSection);
app.component('EditContactSection', EditContactSection);
app.component('ShowContactSection', ShowContactSection);
app.component('ShowRegisterSection', ShowRegisterSection);
app.component('ShowMemberSection', ShowMemberSection);
app.component('UserManaSection', UserManaSection);
app.component('EditCompany1Section', EditCompany1Section);
app.component('EditAccSection', EditAccSection);
app.component('GroupSection', GroupSection);
app.component('PrivilageSection', PrivilageSection);
app.component('PrivilegeSection', PrivilegeSection);
app.component('AddContactSection', AddContactSection);
app.component('AddKegiatanSection', AddKegiatanSection);
app.component('HeaderMainSec', HeaderMainSec);
app.component('HeaderDashboard', HeaderDashboard);
app.component('HeaderAdminDashboard', HeaderAdminDashboard);
app.component('SectionHeading', SectionHeading);
app.component('SectionHeadingTwo', SectionHeadingTwo);
app.component('ProductsContainer', ProductsContainer);
app.component('FeaturedCreators', FeaturedCreators);
app.component('BlogSection', BlogSection)
app.component('BlogSectionSlider', BlogSectionSlider)
app.component('PengurusSection', PengurusSection)
app.component('DashboardSection', DashboardSection)
app.component('PengurusSectionSlider', PengurusSectionSlider)
app.component('Cta', Cta)
app.component('CtaSection', CtaSection)
app.component('Footer', Footer)
app.component('FooterSection', FooterSection)
app.component('ButtonLink', ButtonLink)
app.component('ButtonGroup', ButtonGroup)
app.component('LogoLink', LogoLink)
app.component('Tab', Tab)
app.component('Featured', Featured)
app.component('HowItWork', HowItWork)
app.component('HowItWork2', HowItWork2)
app.component('HowItWorkTwo', HowItWorkTwo)
app.component('HowItWorkThree', HowItWorkThree)
app.component('HowItWorkItem', HowItWorkItem)
app.component('HowItWorkFour', HowItWorkFour)
app.component('HowItWorkSlider', HowItWorkSlider)
app.component('Category', Category)
app.component('Newsletter', Newsletter)
app.component('Termletter', Termletter)
app.component('Privacyletter', Privacyletter)
app.component('Faqletter', Faqletter)
app.component('FeaturedCreatorSlider', FeaturedCreatorSlider)
app.component('FeaturedItemSlider', FeaturedItemSlider)
app.component('RecentItemSection', RecentItemSection)
app.component('RecentItemSlider', RecentItemSlider)
app.component('RecentItemSection1', RecentItemSection1)
app.component('RecentItemSlider1', RecentItemSlider1)
app.component('RecentItemSection2', RecentItemSection2)
app.component('RecentItemSlider2', RecentItemSlider2)
app.component('RecentItemSection3', RecentItemSection3)
app.component('RecentItemSlider3', RecentItemSlider3)
app.component('FullScreenSlider', FullScreenSlider)
app.component('FunFactSection', FunFactSection)
app.component('ExploreSection', ExploreSection)
app.component('ExploreSectionTwo', ExploreSectionTwo)
app.component('ExploreSectionThree', ExploreSectionThree)
app.component('ExploreSectionFour', ExploreSectionFour)
app.component('ExploreSectionFive', ExploreSectionFive)
app.component('ExploreSectionSix', ExploreSectionSix)
app.component('Filters', Filters)
app.component('TopCreators', TopCreators)
app.component('Creators', Creators)
app.component('CreatorsTwo', CreatorsTwo)
app.component('CreatorsThree', CreatorsThree)
app.component('CreatorsFour', CreatorsFour)
app.component('Collections', Collections)
app.component('CollectionsTwo', CollectionsTwo)
app.component('CollectionSlider', CollectionSlider)
app.component('ItemDetailSection', ItemDetailSection)
app.component('RelatedProduct', RelatedProduct)
app.component('RelatedProductTwo', RelatedProductTwo)
app.component('ProductsContainerTwo', ProductsContainerTwo)
app.component('ProductsContainerThree', ProductsContainerThree)
app.component('ProductsContainerFour', ProductsContainerFour)
app.component('ProductsContainerFive', ProductsContainerFive)
app.component('ProductsContainerSix', ProductsContainerSix)
app.component('AuthorHero', AuthorHero)
app.component('AuthorHeroSec', AuthorHeroSec)
app.component('AuthorSection', AuthorSection)
app.component('PengurusDataSection', PengurusDataSection)
app.component('AuthorSectionSec', AuthorSectionSec)
app.component('AuthorSidebar', AuthorSidebar)
app.component('AboutSection', AboutSection)
app.component('BrandSection', BrandSection)
app.component('BrandSectionTwo', BrandSectionTwo)
app.component('TeamSection', TeamSection)
app.component('ActivitySection', ActivitySection)
app.component('RankingSection', RankingSection)
app.component('WilayahSection', WilayahSection)
app.component('WalletSection', WalletSection)
app.component('WalletSectionTwo', WalletSectionTwo)
app.component('Pagination', Pagination)
app.component('BlogDetailSection', BlogDetailSection)
app.component('PengurusDetailSection', PengurusDetailSection)
app.component('Comments', Comments)
app.component('Form', Form)
app.component('Sidebar', Sidebar)
app.component('ForgotSection', ForgotSection)
app.component('ResetSection', ResetSection)
app.component('LoginSection', LoginSection)
app.component('LoginSectionTwo', LoginSectionTwo)
app.component('RegisterSection', RegisterSection)
app.component('MitraSection', MitraSection)
app.component('ContactSection', ContactSection)
app.component('GoogleMap', GoogleMap)
app.component('UserSidebar', UserSidebar)
app.component('OfferSection', OfferSection)
app.component('CitySection', CitySection)
app.component('ProvSection', ProvSection)
app.component('JabatanSection', JabatanSection)
app.component('AdminSection', AdminSection)
app.component('UserActivitySection', UserActivitySection)
app.component('PurchasesSaleSection', PurchasesSaleSection)
app.component('TransactionsSection', TransactionsSection)
app.component('DisplaySection', DisplaySection)
app.component('RedeemSection', RedeemSection)
app.component('DepositSection', DepositSection)
app.component('ProfileSection', ProfileSection)
app.component('AccountSection', AccountSection)
app.component('PengaturanSection', PengaturanSection)
app.component('PaymentMethodSection', PaymentMethodSection)
app.component('SellerSettingSection', SellerSettingSection)
app.component('NotificationSection', NotificationSection)
app.component('SecuritySection', SecuritySection)
app.component('SellBuy', SellBuy)
app.component('ThemeSwitcher', ThemeSwitcher)
app.component('ModalSection1', ModalSection1)
app.component('TermSection', TermSection)
app.component('PrivacySection', PrivacySection)
app.component('FaqSection', FaqSection)
app.component('MembersSection', MembersSection)
app.component('TipeMitraSection', TipeMitraSection)

// vue app
app.use(router).mount('#app')
