<template>
  <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>{{SectionData.pengaturanProfileData.title }}</h3>
        </div><!-- end user-panel-title-box -->
        <div class="profile-setting-panel-wrap">
            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                <li class="nav-item" role="presentation" v-for="list in SectionData.pengaturanProfileData.pengaturanProfileTabNav" :key="list.id">
                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }}</button>
                </li>
            </ul>
            <div class="tab-content mt-4" id="myTabContent">
                <div class="tab-pane fade show active" id="pengaturan-umum" role="tabpanel" aria-labelledby="pengaturan-umum-tab">
                    <div class="profile-setting-panel">
                        <!-- <h5 class="mb-4">Umum</h5> -->
                        
                        <section class="category-section" :class="classname">
                                    <div class="container mb-5">
                                        <!-- section heading -->
                                        <SectionHeading classname="" :text="SectionData.settingUmumData.title" :content="SectionData.settingUmumData.content" isMargin=""></SectionHeading>
                                        <div class="row g-gs">
                                            <div class="col-lg-3 col-6" v-for="item in SectionData.settingUmumData.settingUmumList" :key="item.id">
                                                <router-link :to="item.path" class="card card-cat text-center h-100" :class="item.class">
                                                    <div class="card-body card-body-s1">
                                                        <span :class="item.icon"></span>
                                                        <h5 class="card-cat-title">{{ item.title }}</h5>
                                                    </div>
                                                </router-link>
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                    </div><!-- end container -->
                                </section><!-- end category-section -->
                               
                                <section class="category-section" :class="classname">
                                    <div class="container">
                                        <!-- section heading -->
                                        <SectionHeading classname="" :text="SectionData.settingOrgData.title" :content="SectionData.settingOrgData.content" isMargin=""></SectionHeading>
                                        <div class="row g-gs">
                                            <div class="col-lg-3 col-6" v-for="item in SectionData.settingOrgData.settingOrgList" :key="item.id">
                                                <router-link :to="item.path" class="card card-cat text-center h-100" :class="item.class">
                                                    <div class="card-body card-body-s1">
                                                        <span :class="item.icon"></span>
                                                        <h5 class="card-cat-title">{{ item.title }}</h5>
                                                    </div>
                                                </router-link>
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                    </div><!-- end container -->
                                </section><!-- end category-section -->
                            </div><!-- end profile-setting-panel -->
                        </div><!-- end tab-pane -->
                        
                <div class="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                    <div class="profile-setting-panel">
                        <h5 class="mb-4">Change Password</h5>
                        <div class="mb-3">
                            <label for="oldPassword" class="form-label">Old Password</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="oldPassword" placeholder="Old password">
                                <a href="oldPassword" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="newPassword" class="form-label">New Password</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="newPassword" placeholder="New password">
                                <a href="newPassword" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="confirmNewPassword" placeholder="Confirm new password">
                                <a href="confirmNewPassword" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>
                        <button class="btn btn-dark mt-3" type="button">Update Password</button>
                    </div><!-- end profile-setting-panel -->
                </div><!-- end tab-pane -->
                <div class="tab-pane fade" id="validate-profile" role="tabpanel" aria-labelledby="validate-profile-tab">
                    <div class="profile-setting-panel">
                        <h5 class="mb-4">Verify your profile</h5>
                        <p class="mb-3 fs-14">Verify your unique identity by linking your phone number with your account. Once your profile is validated, you will be approved to participate in all drops that require profile validation to purchase.</p>
                        <p class="mb-4 fs-14">(Please note, profile validation is not 2fa and not used for security purposes.)</p>
                        <hr class="my-4">
                        <h6 class="mb-3 fw-semibold">Enter phone number to receive code</h6>
                        <ul class="btns-group">
                            <li>
                                <input type="text" class="form-control form-control-s1 phone-number" placeholder="Phone number">
                            </li>
                            <li>
                                <button class="btn btn-dark" type="button">Submit</button>
                            </li>
                        </ul>
                    </div><!-- end profile-setting-panel -->
                </div><!-- end tab-pane -->
            </div><!-- end tab-content -->
            
        </div><!-- end profile-setting-panel-wrap-->
    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'AccountSection',
  data () {
    return {
      SectionData,
    }
  },
  mounted () {
    /*===========SHOW UPLOADED IMAGE ================== */
    function uploadImage (selector) {
      let elem = document.querySelectorAll(selector)
      if (elem.length > 0) {
        elem.forEach(item => {
          item.addEventListener('change', function () {
            if (item.files && item.files[0]) {
              let img = document.getElementById(item.dataset.target)
              img.onload = function () {
                URL.revokeObjectURL(img.src)
              }
              img.src = URL.createObjectURL(item.files[0])

              let allowedExtensions = ['jpg', 'JPEG', 'JPG', 'png']
              let fileExtension = this.value.split('.').pop()
              var lastDot = this.value.lastIndexOf('.')
              var ext = this.value.substring(lastDot + 1)
              var extTxt = img.value = ext
              if (!allowedExtensions.includes(fileExtension)) {
                alert(extTxt + ' file type not allowed, Please upload jpg, JPG, JPEG, or png file')
                img.src = ' '
              }
            }
          })
        })
      }
    }

    uploadImage('.upload-image')

    /* =========== Show/Hide passoword ============== */
    function showHidePassword(selector){
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0){
        elem.forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            let target = document.getElementById(item.getAttribute("href"));
            if(target.type == "password") {
            target.type = "text";
            item.classList.add("is-shown");
            }else{
            target.type = "password";
            item.classList.remove("is-shown");
            }
        });

        });
    }
    }

    showHidePassword(".password-toggle");

  }
}
</script>
