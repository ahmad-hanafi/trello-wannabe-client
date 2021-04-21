<template>
  <div class="col">
    <div class="mt-2 shadow p-3 mb-5 bg-dark rounded">
      <h3 class="text-white mb-0 ml-2 mt-2">
        <i class="far fa-calendar-alt"></i> {{category}}
      </h3>
    </div>

    <!-- Get bored -->
    <div style="text-align: left" v-for="(e,i) in tasks" :key="i">
      <!-- {{e}} -->
      <li
        class="mt-2 shadow p-3 mb-5 bg-warning rounded"
        style="list-style-type: none"
      >
        <h4>
          {{ e.title }}
          <button
            class="btn btn-transparans mb-2"
            @click.prevent="remove(e.id)"
          >
            <i class="far fa-trash-alt"></i>
          </button>
        </h4>
        <h6>
          <small> by {{ e.User.name }} </small>
        </h6>
        <p style="text-align: left">
          <em>{{ e.description }}</em>
          <button class="btn btn-transparans mb-2">
            <i class="far fa-edit" @click.prevent="findTaskById(e.id)"></i>
          </button>
        </p>
        <div class="mt-2 mb-4">
          <button
						v-if="Previous == true"
            class="btn btn-danger mb-2"
            @click.prevent="statusDown(e.id, e.category)"
          >
            <i class="fas fa-arrow-left"></i> Previous
          </button>
          <button
						v-if="Next == true"
            class="btn btn-success mb-2"
            @click.prevent="statusUp(e.id, e.category)"
          >
            <i class="fas fa-arrow-right"></i> Next
          </button>
        </div>
      </li>
      
    </div>
  </div>
</template>

<script>
export default {
	props: ['category', 'task'],
	computed: {
		tasks() {
			let value
			switch (this.category) {
				case 'Backlog':
					value = this.task.backlog
					break;
			
			case 'Todo':
					value = this.task.todo
					break;
			
			case 'Doing':
					value = this.task.doing
					break;
			
			case 'Done':
					value = this.task.done
					break;
			
			}
			return value
		},
		Next() {
			let buttonNext
			if(this.category == 'Done') {
				return this.buttonNext = false
			} else {
				return this.buttonNext = true
			}
		},
		Previous() {
			let buttonPrevious
			if(this.category == 'Backlog') {
				return this.buttonPrevious = false
			} else {
				return this.buttonPrevious = true
			}
		}
	},
	methods: {
        findTaskById(id) {
            this.$emit("findTaskById", id)
        },
        remove(id) {
            this.$emit("remove", id)
        },
        statusDown(id, category) {
            const data = {
                id, category
            }
            this.$emit("statusDown", data)
        },
        statusUp(id, category) {
            const data = {
                id, category
            }
            this.$emit("statusUp", data)
        }
    }
};
</script>

<style>
</style>