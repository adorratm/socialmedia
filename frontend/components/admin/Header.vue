<template>
  <div>
    <!-- Top Navbar -->
    <nav class="navbar navbar-expand-xl navbar-dark fixed-top hk-navbar">
      <a
        id="navbar_toggle_btn"
        class="navbar-toggle-btn nav-link-hover"
        href="javascript:void(0);"
        ><i class="ion ion-ios-menu"></i
      ></a>
      <nuxt-link class="navbar-brand" to="/panel/">
        <img
          class="brand-img d-inline-block"
          src="~/assets/logo.webp"
          width="160"
          alt="Mutfak Yapım Dijital Reklam Ajansı"
        />
      </nuxt-link>
      <ul class="navbar-nav hk-navbar-content">
        <li class="nav-item dropdown dropdown-authentication">
          <a
            class="nav-link dropdown-toggle no-caret"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="media">
              <div class="media-img-wrap">
                <div class="avatar">
                  <img
                    src="/vendor/img/avatar12.jpg"
                    alt="user"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <span class="badge badge-success badge-indicator"></span>
              </div>
              <div class="media-body">
                <span>Madelyn Shane<i class="zmdi zmdi-chevron-down"></i></span>
              </div>
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            data-dropdown-in="flipInX"
            data-dropdown-out="flipOutX"
          >
            <a class="dropdown-item" href="profile.html"
              ><i class="dropdown-icon zmdi zmdi-account"></i
              ><span>Profile</span></a
            >
            <a class="dropdown-item" href="#"
              ><i class="dropdown-icon zmdi zmdi-card"></i
              ><span>My balance</span></a
            >
            <a class="dropdown-item" href="inbox.html"
              ><i class="dropdown-icon zmdi zmdi-email"></i
              ><span>Inbox</span></a
            >
            <a class="dropdown-item" href="#"
              ><i class="dropdown-icon zmdi zmdi-settings"></i
              ><span>Settings</span></a
            >
            <div class="dropdown-divider"></div>
            <div class="sub-dropdown-menu show-on-hover">
              <a href="#" class="dropdown-toggle dropdown-item no-caret"
                ><i class="zmdi zmdi-check text-success"></i>Online</a
              >
              <div class="dropdown-menu open-left-side">
                <a class="dropdown-item" href="#"
                  ><i class="dropdown-icon zmdi zmdi-check text-success"></i
                  ><span>Online</span></a
                >
                <a class="dropdown-item" href="#"
                  ><i class="dropdown-icon zmdi zmdi-circle-o text-warning"></i
                  ><span>Busy</span></a
                >
                <a class="dropdown-item" href="#"
                  ><i
                    class="
                      dropdown-icon
                      zmdi zmdi-minus-circle-outline
                      text-danger
                    "
                  ></i
                  ><span>Offline</span></a
                >
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"
              ><i class="dropdown-icon zmdi zmdi-power"></i
              ><span>Log out</span></a
            >
          </div>
        </li>
      </ul>
    </nav>
    <!-- /Top Navbar -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Mutfak Yapım Dijital Reklam Ajansı | Admin Paneli",
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
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/plugins/jquery-toggles/css/toggles.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/plugins/jquery-toggles/css/themes/toggles-light.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/plugins/jquery-toast-plugin/dist/jquery.toast.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/css/lightgallery.css",
      },
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
      { src: "/vendor/js/feather.min.js", body: true },
      { src: "/vendor/plugins/jquery-toggles/toggles.min.js", body: true },
      { src: "/vendor/js/toggle-data.js", body: true },
      {
        src: "/vendor/plugins/waypoints/lib/jquery.waypoints.min.js",
        body: true,
      },
      {
        src: "/vendor/plugins/owl.carousel/dist/owl.carousel.min.js",
        body: true,
      },
      {
        src: "/vendor/plugins/jquery-toast-plugin/dist/jquery.toast.min.js",
        body: true,
      },
      { src: "/vendor/js/init.js", body: true },
      { src: "/vendor/js/dashboard-data.js", body: true },
    ],
  },
};
</script>