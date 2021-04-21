<template>
  <section id="add-task" style="overflow-x: hidden; background-color: white">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <form>
            <hr />
            <h1 class="h3 mb-3 fw-normal">Edit tasks</h1>
            <br />
            <label for="title">Title</label><br />
            <input
              class="w-100"
              type="text"
              v-model="dataTask.title"
              placeholder="Kelarin tugas"
              required
              autofocus
            ><br /><br>
            <label for="description">Description</label><br />
            <input
              class="w-100"
              type="text"
              v-model="dataTask.description"
              placeholder="Jangan deket deadline"
              required
            /><br /><br>
            <hr />
            <button
              class="w-100 btn btn-lg btn-success mb-2"
              type="submit"
              @click.prevent="editTask()"
            >
              Update
            </button>
            <button
              class="w-100 btn btn-lg btn-danger"
              type="submit"
              @click.prevent="changePage"
            >
              Back to Home
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "editPage",
  props: ['dataTask'],
  methods: {
    editTask() {
      let data = {
        id : this.dataTask.id,
        title: this.dataTask.title,
        description: this.dataTask.description,
      };
      this.$emit("editTask", data);
    },
    changePage() {
            this.$emit('changePage','homepage')
        },
  },
};
</script>

<style>
</style>