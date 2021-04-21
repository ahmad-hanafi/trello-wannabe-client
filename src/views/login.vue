<template>
  <div>
    <!-- namanya sesuai dengan emit  -->
    <section
      id="page-login"
      style="overflow-x: hidden; background-color: white"
    >
      <div class="row" style="height: 100vh">
        <div class="col-md-7">
          <img src="../assets/undraw_Project_completed_re_pqqq.svg" alt="" width="500" height="500">
        </div>
        <div class="col-md-5">
          <div class="form-signin">
            <hr />
            <formLogin @login="login"></formLogin>

            <!-- google login -->
            <p>
              Not having account yet?
              <a href="#" id="link-register" @click.prevent="changePage">Register Now</a>
            </p>
            <hr />
            <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
            <hr />
            <!-- End of Google login  -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import formLogin from "../component/formLogin";
export default {
  name: "loginPage",
  components: {
    formLogin,
  },
  data() {
      return {
          cliendId: "209755170204-vp25vn3jtt47obnejmhl0qjr4u19vq92.apps.googleusercontent.com"
      }
  },
  methods: {
    login(data) {
      this.$emit("goLogin", data); // 'goLogin' harus sama dengan yg ada di app.vue
    },
    changePage() {
      this.$emit("changePage", "register");
    },
    OnGoogleAuthSuccess (idToken) {
      // console.log(idToken)
    this.$emit('googleLogin', idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  },
};
</script>

<style>
.google-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>