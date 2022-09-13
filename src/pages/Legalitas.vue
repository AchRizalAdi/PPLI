<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderDashboard></HeaderDashboard>
    </header>
    <!-- Register section -->
    <LegalitasSection></LegalitasSection>
    <!-- Blog  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeaderDashboard from '../components/common/HeaderDashboard.vue';
import LegalitasSection from '../components/section/LegalitasSection.vue';

export default {
    name: "Legalitas",
    data() {
        return {
            SectionData
        };
    },
    components: { HeaderDashboard, LegalitasSection }
}
</script>
