<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box"> 
            <h3>Privacy policy</h3>
        </div><!-- end user-panel-title-box -->
        <div class="profile-setting-panel-wrap">
            <p class="fs-14 mb-4" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic beatae eveniet nesciunt laborum consequatur doloremque vel neque. Perspiciatis voluptatibus dolores numquam assumenda, ex vel veritatis delectus nisi unde maiores.</p>
            <p class="fs-14 my-3">In cases where authy cannot be installed, sms messaging can be used for 2fa. <strong>This is a last case scenario </strong> as sms provides a <strong>less secure</strong> experience and will prevent you from enabling advanced 2fa settings within the site. </p>
            <h6 class="mb-3 fw-semibold">Definitions:</h6>
            <li>
                <ul>Tera Logistics is a site owned by PT. Tera Logistik Internasional located in Jakarta, Indonesia. This site facilitiates the shippers to obtain various quotations from registered logistics provider.</ul>
            </li>
            <li>
                <ul>Website is https://www.teralogistics.com</ul>
            </li>
            <li>
                <ul>Users are logistics provider, shippers, and other parties who access the content of the website, or any parties that any material contained in the website directly and/or indirectly.</ul>
            </li>
            <li>
                <ul>Logistics Provider is a registered company that can be freight forwarder who responsible for delivering the cargo from one place to another (by using land, sea, or air transportation), and/or wareshouses company who have their own warehouses for rent, and/or trucking company who have their own trucks for charter.</ul>
            </li>
            <li>
                <ul>Shipper is the owner of the cargo or interested parties for the delivery of the cargo who access, signs up, and utilizes the service provided by this website to obtain various quotations from several logistics provider.</ul>
            </li>
            <li>
                <ul>Cargo is a physical tangible object and has a value that can be shipped legally in accordance with the applicable provisions where the object is located and/or will be delivered.</ul>
            </li>
            <li>
                <ul>Services is any action or effort made by logistics provider to deliver the cargo in accordance with the instructions provided by the shippers.</ul>
            </li>

            <h6 class="mb-3 mt-3 fw-semibold">Intellectual Property:</h6>

            <li>
                <ul>Users are prohibited to modify and use the intellectual properties on the website without prior consent from Tera Logistics as the owners of the copyrights, trademarks, and other intellectual properties.</ul>
            </li>
            <li>
                <ul >The name and logo used are registered trademarks protected by law</ul>
            </li>

             <h6 class="mb-3 mt-3 fw-semibold">Shippers General Provisions:</h6>

             <li>
                <ul>Shippers are required to register by providing a valid and accurate information of company name, address, telephone number, email, and other information correctly and accurately.</ul>
             </li>
             <li>
                <ul>Shippers are required to provide information of the type to be used, origin and destination of delivery, date of shipment, cargo specification, and other accurate and valid information prior to requesting the quotation to the logistics provider.</ul>
             </li>
             <li>
                <ul>Shippers agree to understand in advance the terms and conditions stipulated by logistics provider that prescribe the limitation of liability and maximum compensation to the shippers for any deprivation, damage, or any loss due to logistics provider’ negligence and omission. The shippers agree to comply with the terms and conditions of the appointed logistics provider. Shippers acknowledges the risks that may happen.</ul>
             </li>
             <li>
                <ul>Shippers understand the risk that may occur for not insuring the cargo to be shipped.</ul>
             </li>
             <li>
                <ul>Shippers have the right to review the logistics provider that can be seen by other shippers as a consideration when choosing the logistics provider in the future.</ul>
             </li>

              <h6 class="mb-3 mt-3 fw-semibold">Logistics Provider General Provisions:</h6>

              <li>
                <ul></ul>
              </li>

              <li>
                <ul></ul>
              </li>

              <li>
                <ul></ul>
              </li>

              <li>
                <ul></ul>
              </li>

              <h6 class="mb-3 mt-3 fw-semibold">Prohibited Cargo:</h6>

            <li>
                <ul></ul>
              </li>
              <li>
                <ul></ul>
              </li>
              <li>
                <ul></ul>
              </li>

            
            
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
