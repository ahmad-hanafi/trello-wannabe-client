<template>
  <div>
      <section>
        <Navbar @changePage="changePage" 
        @logout="logout"
        :user="user"
        ></Navbar>
      </section>

    <Content :task="task" 
    @remove="remove"
    @statusDown="statusDown"
    @statusUp="statusUp"
    @findTaskById="findTaskById"
    ></Content>
    <nav id="footer" class="navbar bottom navbar-light bg-light"> 
            <span class="navbar-brand">Created by : Ahmad Hanafi <i class="far fa-check-circle"
                    style="color: rgb(0, 153, 255);"></i></span>
        </nav>
  </div>
</template>

<script>
import Navbar from '../component/navbar.vue'
import Content from '../component/content.vue'


export default {
  name: "homepage",
  components: {
    Content,
    Navbar
    },
    props: ['task','user'],
    methods: {
        changePage() {
            this.$emit('changePage','addPage')
        },
        logout() {
            this.$emit('logout')
        },
        remove(id) {
            this.$emit("remove", id)
        },
        statusDown(data) {
            this.$emit("statusDown", data)
        },
        statusUp(data) {
            this.$emit("statusUp", data)
        },
        findTaskById(data) {
            this.$emit("findTaskById", data)
        }
    }
}
</script>

<style>

</style>