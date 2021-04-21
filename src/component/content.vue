<template>
  <section class="container mb-2 mt-2">
    <div class="row shadow sm-3 mb-5 bg-white rounded">
      <Category v-for="(category,i) in categories" :key="i"
      :category="category"
      :task="task"
      @remove="remove"
    @statusDown="statusDown"
    @statusUp="statusUp"
    @findTaskById="findTaskById"
      ></Category>
    </div>
  </section>
</template>

<script>
import Category from './category'
export default {
    name: "content",
    props: ['task'],
    components: {
      Category
    },
    data() {
      return {
        categories: ['Backlog', 'Todo', 'Doing', 'Done']
      }
    },
    methods: {
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
};
</script>

<style>
</style>