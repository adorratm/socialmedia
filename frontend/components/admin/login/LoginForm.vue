<template>
  <div>
    <form @submit.prevent="login">
      <h1 class="display-4 mb-10">Tekrar Hoşgeldiniz :)</h1>
      <p class="mb-30">Bilgilerinizle Panele Giriş Yapın.</p>
      <div class="form-group">
        <input
          class="form-control form-control-sm rounded-0"
          placeholder="Email Adresiniz"
          type="email"
          v-model="loginData.email"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control form-control-sm rounded-0"
          placeholder="Şifreniz"
          type="password"
          v-model="loginData.password"
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
import { ValidationProvider } from 'vee-validate';

export default {
  components:{
    ValidationProvider
  },
  data() {
    return {
      loginData: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData,
        });
        this.$router.replace("/panel");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>