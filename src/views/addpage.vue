<template>
  <section id="add-task" style="overflow-x: hidden; background-color: white">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <form>
            <hr />
            <h1 class="h3 mb-3 fw-normal">Add tasks</h1>
            <br />
            <label for="title">Title</label><br />
            <input
              class="w-100"
              type="text"
              v-model="title"
              placeholder="Kelarin tugas"
              required
              autofocus
            /><br />
            <label for="description">Description</label><br />
            <input
              class="w-100"
              type="text"
              v-model="description"
              placeholder="Jangan deket deadline"
              required
            /><br />
            <hr />
            <div>
            <button
              class="w-100 btn btn-lg btn-success mb-2"
              type="submit"
              @click.prevent="addTask"
            >
              Add
            </button>
            <button
              class="w-100 btn btn-lg btn-danger"
              type="submit"
              @click.prevent="changePage"
            >
              Back to Home
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "addPage",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    addTask() {
      let data = {
        title: this.title,
        description: this.description,
      };
      this.$emit("addTask", data);
    },
    changePage() {
      this.$emit("changePage", "homepage");
    },
  },
};
</script>

<style>
</style>