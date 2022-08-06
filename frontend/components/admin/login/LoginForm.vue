<template>
  <div>
    <form>
      <h1 class="display-4 mb-10">Tekrar Hoşgeldiniz :)</h1>
      <p class="mb-30">Bilgilerinizle Panele Giriş Yapın.</p>
      <div class="form-group">
        <input
          class="form-control form-control-sm rounded-0"
          placeholder="Email Adresiniz"
          type="email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control form-control-sm rounded-0"
          placeholder="Şifreniz"
          type="password"
          v-model="password"
        />
      </div>
      <button class="btn btn-pink btn-block btn-sm rounded-0" type="submit">
        Giriş Yap
      </button>
      <p class="font-14 text-center mt-15">
        Oturum Açarken Problem Mi Yaşıyorsunuz?
      </p>
      <p class="text-center">
        <nuxt-link to="/panel/forgot-password">Şifremi Unuttum</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>