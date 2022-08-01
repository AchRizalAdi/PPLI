<template>
<section class="author-section section-space">
    <div class="container">
        <div class="row">
            <div class="col-xl-3">
                <AuthorSidebar
                :links="SectionData.authorSidebarData.sidebarWidgetTwo.links"
                ></AuthorSidebar>
            </div><!-- end col -->
            <!-- isi Content -->
            <div class="col-xl-9 ps-xl-4">
                <DashboardSection></DashboardSection>
            </div><!-- end col -->
                <div>        
            </div>
        </div><!-- end row -->
    </div><!-- .container -->
        <!-- Modal -->  
    <div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="reportModalLabel">PT MENDAYUNG SENJA</h4>
                    <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                        <em class="ni ni-cross"></em>
                    </button>
                </div>
                        <p class="ms-4">JAKARTA , JAKARTA UTARA</p>
                <div class="modal-body">
                    <h5 class="modal-text mb-2">Receive</h5>
                        <p class="modal-text mb-3 alert alert-success">PT MENDAYUNG SENJA</p>
                        <!-- v-html="SectionData.reportModalData.contentTwo" -->
                    <form action="#">
                        <h5 class="modal-text mb-2">Your Message</h5>
                        <!-- <input type="email" class="form-control form-control-s1 mb-3" placeholder="Enter your email"> -->
                        <textarea name="message" rows="6" class="form-control form-control-s1 mb-3"></textarea>
                        <button class="btn btn-dark w-100" type="submit">Send</button>
                    </form>
                </div><!-- end modal-body -->
            </div><!-- end modal-content -->
        </div><!-- end modal-dialog -->
    </div><!-- end modal-->
</section><!-- end author-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'AuthorSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>

<style lang="css" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
 }
 .author-link,
 .card-price-wrap {
   z-index: 2;
   position: relative;
 }
</style>