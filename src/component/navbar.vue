<template>
  <nav id="navbar" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <a id="nav-home" class="navbar-brand" href="#"><i class="fab fa-korvue"></i>Kanban Clone</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a id="nav-add" class="nav-link" href="#" @click.prevent="changePage"><i class="far fa-calendar-plus"></i> Add Task</a>
                    </li>
                </ul>
                <span class="navbar-text mr-3">
                    <i class="far fa-user"></i> Hai {{user}}
                </span>

                <button class="btn btn-outline-danger my-2 my-sm-0 mr-1" @click.prevent="logout"><i
                        class="fas fa-sign-out-alt"></i> Logout</button>
            </div>
        </nav>
</template>

<script>
export default {
   name: "navbar",
   props: ['user'],
    methods: {
        changePage(){
          this.$emit('changePage', 'addPage')
        },
        logout(){
          this.$emit('logout')
        }
    }
}
</script>

<style>

</style>