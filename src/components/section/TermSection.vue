<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>Syarat Keanggotaan</h3>
    </div>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap">
      <h3 class="mb-3 fw-semibold">
        Kami adalah Perkumpulan Pelaku Logistik Indonesia
      </h3>
      <p class="fs-14 mb-4">
        PPLI adalah organisasi di bidang Supply Chain & Logistics Management
        khususnya UKM Logistik di Indonesia. Keanggotaan PPLI terbuka bagi
        individu Warga Negara Indonesia yang berkarya sbg Praktisi, Akademisi,
        Pembuat Regulasi, Owner, IT, logistik konsultan, financial logistik,
        operational Logistik lainnya.
      </p>
      <p class="fs-14 mb-4">
        PPLI didirikan pada Tahun 2019 & mulai diperkenalkan ke publik pada
        Januari 2020. Situs web ini (www.ppliofficial.com) adalah situs resmi
        milik PPLI yang berfungsi sebagai media komunikasi PPLI ke publik di
        dalam maupun eksternal.
      </p>
      <p class="fs-14 mb-4">
        Besar harapan kami untuk anda dapat berpartisipasi dalam turut
        menyebarkan informasi tentang PPLI ini ke rekan dan relasi anda.
      </p>

      <h6 class="mb-3 fw-semibold mt-3">
        Bagaimana kami membangun, mengelola secara bersama dengan sinergi para
        member sehingga meningkatkan citra bisnis anda.
      </h6>
      <p class="fs-14 mb-4">
        Untuk mendukung hal tersebut dibutuhkan sarana dan prasarana yang efektif dan efisien khususnya logistik yang sesuai dengan pasar market tersebut. Untuk itu sangat dibutuhkan peran asosiasi untuk menyiapkan SDM, sarana dan prasarana guna menunjang kegiatan logistik kedepan agar dapat bersaing dengan pengusaha asing dan selain itu keberadaan asosiasi ini dapat mempermudah Pemerintah dalam konsolidasi dan melakukan pembinaan.
      </p>
      <p class="fs-14 mb-4">
        Kami memiliki integritas dalam membangun negeri ini sehingga tercapainya visi dan misi PPLI.
      </p>
      <p class="fs-14 mb-4">
        Harapan kami ppli yang beranggotakan UKM dibidang logistik menjadi kan kesetaraan yang merata di anggota PPLI dengan unit usaha ppli yang ada serta bisa menjadi solusi dengan keadaan logistik Indonesia yang menyumbang ekonomi biaya tinggi, alasan utama perlunya suatu wadah yang menghimpun berbagai unsur-unsur kekuatan bangsa dibidang logistik .
      </p>
      <h6>Untuk Syarat yang lebih jelas bisa pergi ke halaman <a href="https://www.ppliofficial.com/syarat-keanggotaan/#1569835939679-f9fcfad6-abfc8b0d-a6fa">Disini</a></h6>
      
    </div>
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
  <Termletter></Termletter>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "TermSection",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
