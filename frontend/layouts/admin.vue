<template>
  <div>
    <!-- Preloader -->
    <div class="preloader-it">
      <div class="loader-pendulums"></div>
    </div>
    <!-- /Preloader -->
    <!-- HK Wrapper -->
    <div class="hk-wrapper hk-vertical-nav">
      <Header />
      <Sidebar />
      <!-- Main Content -->
      <div class="hk-pg-wrapper">
        <Nuxt />
        <Footer />
      </div>
    </div>
    <!-- /HK Wrapper -->
  </div>
</template>

<script>
import Header from "~/components/admin/Header.vue";
import Sidebar from "~/components/admin/Sidebar.vue";
import Footer from "~/components/admin/Footer.vue";
export default {
  name: "adminLayout",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>