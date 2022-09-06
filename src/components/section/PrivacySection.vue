<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box"> 
            <h3>Privacy policy</h3>
        </div><!-- end user-panel-title-box -->
        <div class="profile-setting-panel-wrap">
            <p class="fs-14 mb-4" > PPLI Official memperlakukan privasi Anda dengan sungguh-sungguh. Bacalah uraian berikut untuk mengetahui lebih jauh mengenai kebijakan privasi kami.</p>
            <h3 class="mb-3 fw-semibold">Yang Dicakup oleh Kebijakan Privasi ini:</h3>
            <li class="mb-2">
                <ul>Kebijakan Privasi ini mencakup perlakuan kami atas informasi yang dapat mengidentifikasi diri (data pribadi) Anda saat sedang berada di situs ppliofficial.com, dan saat Anda menggunakan layanan kami. Kebijakan ini juga mencakup perlakukan kami atas data pribadi yang digunakan bersama oleh kami.</ul>
            </li>
            <li>
                <ul>Kebijakan ini tidak berlaku pada praktik perusahaan yang bukan grup unit usaha milik kami atau di luar kendali kami atau pada orang-orang yang bukan karyawan kami atau di luar pengelolaan kami.</ul>
            </li>
            <h5 class="mb-3 fw-semibold mt-3">Pengumpulan dan Penggunaan Informasi</h5>
            <li class="mb-2">
                <ul>Saat Anda mendaftar pada kami, kami menanyakan nama, alamat email, alamat tempat tinggal, tanggal lahir, kode pos, dan nomor telepon. Setelah Anda mendaftar dan masuk ke layanan kami, Anda bukanlah orang yang anonim bagi kami.</ul>
            </li>
            <li>
                <ul>Kami menggunakan informasi untuk memenuhi permintaan Anda akan produk dan layanan tertentu, dan untuk menghubungi Anda mengenai tawaran khusus dan produk baru.</ul>
            </li>
            <h5 class="mb-3 fw-semibold mt-3">Perubahan terhadap Kebijakan Privasi ini</h5>
            <li class="mb-2">
                <ul>Kami dapat mengubah kebijakan ini dari waktu ke waktu. Jika kami melakukan perubahan besar dalam cara penggunaan data pribadi Anda, kami akan memberi tahu Anda dengan memasang pengumuman yang tampak jelas di halaman kami. Anda setuju bahwa pemasangan pengumuman itu sudah cukup dan memadai untuk memberi tahu Anda mengenai perubahan tersebut.</ul>
            </li>
            <li>
                <ul>Anda setuju bahwa dengan terus menggunakan produk atau layanan kami setelah dilakukannya perubahan tersebut, Anda menerima dan setuju untuk terikat dengan ketentuan dalam kebijakan yang baru.</ul>
            </li>
            <h5 class="mb-3 fw-semibold mt-3">Pengungkapan informasi anda</h5>
            <li class="mb-2">
                <ul>Untuk memastikan bahwa isi dari situs kami disajikan dengan cara yang paling efektif untuk anda dan untuk komputer anda.</ul>
            </li>
            <li>
                <ul>Untuk memberikan kepada anda informasi, produk atau layanan yang anda minta dari kami atau yang kami rasa mungkin penting bagi anda, dimana anda setuju untuk dihubungi untuk tujuan tersebut.</ul>
            </li>
            <li>
                <ul>Untuk melaksanakan kewajiban kami yang timbul dari suatu kontrak yang diadakan antara anda dan kami.</ul>
            </li>
            <li>
                <ul>Untuk memungkinkan anda ambil bagian dalam fitur interaktif layanan kami, sewaktu anda memilih demikian.</ul>
            </li>
            <li>
                <ul>Untuk memberitahu anda mengenai perubahan terhadap layanan kami.</ul>
            </li>
            <h5 class="mb-3 fw-semibold mt-3">Hak anda</h5>  
            <p class="fs-14 mb-4" >Anda berhak meminta kami untuk tidak memproses data pribadi anda untuk tujuan pemasaran. Kami biasanya akan memberitahu anda (sebelum mengumpulkan data anda) apabila kami bermaksud menggunakan data anda untuk tujuan tersebut atau apabila kami bermaksud mengungkapkan informasi anda kepada pihak ketiga untuk tujuan tersebut. Anda dapat menggunakan hak anda untuk mencegah pemrosesan tersebut dengan menghubungi kami di <strong>support@ppliofficial.com</strong></p>
            <p class="fs-14 mb-4" >Situs kami, dari waktu ke waktu, dapat berisi link ke dan/atau dari situs web jaringan mitra, pengiklan dan afiliasi kami. Apabila anda mengikuti link ke salah satu dari situs-situs web ini, perlu diperhatikan bahwa situs-situs web ini memiliki kebijakan hak-pribadinya sendiri dan kami tidak memiliki tanggung jawab atau menanggung kewajiban atas kebijakan tersebut. Silakan periksa kebijakan ini sebelum anda menyerahkan data pribadi ke situs-situs web ini.</p>
            <h5 class="mb-3 fw-semibold mt-3">Perubahan atas kebijakan hak-pribadi kami</h5>  
            <p class="fs-14 mb-4" >Perubahan yang dapat kami lakukan atas kebijakan hak-pribadi kami di masa mendatang akan ditempatkan di halaman ini dan, bilamana dipandang tepat, akan diberitahukan kepada anda melalui e-mail.</p>
            <h5 class="mb-3 fw-semibold mt-3">Pihak yang dapat dihubungi</h5>
            <p class="fs-14 mb-4" >Pertanyaan, komentar dan permintaan mengenai kebijakan hak-pribadi ini akan disambut baik dan harus dialamatkan ke <strong>info@ppliofficial.com</strong></p>
          </div><!-- end profile-setting-panel-wrap-->
    </div><!-- end col-lg-8 -->
    <Privacyletter></Privacyletter>
</template>

<script>    
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'PrivacySection',
  data () {
    return {
      SectionData,
      
    }
  },
}
</script>
