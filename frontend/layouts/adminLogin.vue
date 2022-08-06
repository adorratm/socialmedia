<template>
  <div>
    <!-- Preloader -->
    <div class="preloader-it">
        <div class="loader-pendulums"></div>
    </div>
    <!-- /Preloader -->
   
	<!-- HK Wrapper -->
	<div class="hk-wrapper">

        <!-- Main Content -->
        <div class="hk-pg-wrapper hk-auth-wrapper">
        <Header />
        <Nuxt />
        </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/admin/login/Header.vue'
export default {
    components:{
        Header
    },
    head: {
    title: "Mutfak Yapım Dijital Reklam Ajansı | Admin Paneli Girişi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Mutfak Yapım Dijital Reklam Ajansı Sosyal Medya Yönetim Platformu",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/css/style.css" },
    ],
    script: [
      { src: "/vendor/plugins/jquery/dist/jquery.min.js", body: true },
      {
        src: "/vendor/plugins/bootstrap/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
      { src: "/vendor/js/all.min.js", body: true },
      { src: "/vendor/js/v4-shims.min.js", body: true },
      { src: "/vendor/js/jquery.slimscroll.js", body: true },
      { src: "/vendor/js/dropdown-bootstrap-extended.js", body: true },
      {
        src: "/vendor/plugins/owl.carousel/dist/owl.carousel.min.js",
        body: true,
      },
      { src: "/vendor/js/feather.min.js", body: true },
      { src: "/vendor/js/init.js", body: true },
      { src: "/vendor/js/login-data.js", body: true },
      { src: "/vendor/js/owl-data.js", body: true },
    ],
  },
};
</script>