<template>
  <div>
    <form>
      <h1 class="display-4 mb-10">Şifrenizi mi unuttunuz ?</h1>
      <p class="mb-30">Bilgilerinizle Şifrenizi Sıfırlayın.</p>
      <div class="form-group">
        <input
          class="form-control form-control-sm rounded-0"
          placeholder="Email Adresiniz"
          type="email"
          v-model="email"
        />
      </div>
      <button class="btn btn-pink btn-block btn-sm rounded-0" type="submit">
        Şifremi Sıfırla
      </button>
      <p class="font-14 text-center mt-15">
        Şifrenizi Hatırladınız Mı?
      </p>
      <p class="text-center">
        <nuxt-link to="/panel/login">Giriş Yapın</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
};
</script>