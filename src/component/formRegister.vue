<template>
  <form>
            <hr />
            <h1 class="h3 mb-3 fw-normal">Join Us Now !</h1>
            <br />
            <label for="email">Your name</label><br />
            <input
              type="text"
              v-model="name"
              class="form-control"
              placeholder="Udin"
              required
              autofocus
            /><br />
            <label for="email">Email address</label><br />
            <input
              type="email"
              v-model="email"
              class="form-control"
              placeholder="udin@mail.com"
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
            <button
              class="w-100 btn btn-lg btn-primary"
              type="submit"
              @click.prevent="register()"
            >
              Sign Up</button
            ><br />
            <hr />
          </form>
</template>

<script>
export default {
    name: "formLogin",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            const user = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            this.$emit("register", user)
        }
    }
}
</script>

<style>

</style>