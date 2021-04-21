<template>
  <section
    id="page-register"
    style="overflow-x: hidden; background-color: white !important"
  >
    <div class="row" style="height: 100vh">
      <div class="col-md-5">
        <div class="form-register">
          <formRegister  @register="register"></formRegister>
          <p style="color: black">
            Have an Account ? <a href="#" id="link-login" @click.prevent="changePage">Login Now</a>
          </p>
        </div>
      </div>
      <div class="col-md-7">
        <img src="../assets/undraw_Updated_resume_re_q1or.svg" alt="" width="500" height="500">
      </div>
    </div>
  </section>
</template>

<script>
import formRegister from "../component/formRegister";
export default {
  name: "registerpage",
  components: {
    formRegister
  },
  methods: {
    register(data) {
      this.$emit("goRegister", data); // 'goregister' harus sama dengan yg ada di app.vue
    },
    changePage() {
      this.$emit("changePage", "login");
    },
  },
};
</script>

<style>
</style>