<template>
  <div>
    <form>
      <h1 class="h3 mb-3 fw-normal">Hai there, welcome !</h1>
      <br />
      <label for="email">Email address</label><br />
      <input
        type="email"
        v-model="email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      /><br />
      <label for="password">Password</label><br />
      <input
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
        required
      /><br />
      <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="login">
        Login</button
      ><br />
      <hr />
    </form>
  </div>
</template>

<script>
export default {
    name: "formLogin",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            const user = {
                email: this.email,
                password: this.password
            }
            this.$emit("login", user)
        }
    }
};
</script>

<style>
</style>