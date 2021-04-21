<template>
  <div>
    <!-- Login -->
    <loginPage v-if="!isLogin && page == 'login'" 
    @goLogin="login"
    @changePage="changePage"
    @googleLogin="googleLogin"
    ></loginPage>
    <!-- End of Login -->

    <!-- Register -->
    <registerPage v-else-if="!isLogin && page == 'register'" 
    @goRegister="register" 
    @changePage="changePage"
    ></registerPage>
    <!-- End of Register -->

    <!-- homepage  -->
    <homepage v-else-if="isLogin && page == 'homepage'" :task="listTask" 
    :user="user"
    @changePage="changePage"
    @logout="logout"
    @remove="remove"
    @statusUp="statusUp"
    @statusDown="statusDown"
    @findTaskById="findTaskById"
    @fetchTask="fetchTask"
    ></homepage>
    <!-- End of homepage  -->

    <addPage v-else-if="page == 'addPage' && isLogin"
    @addTask="addTask"
    @changePage="changePage"
    ></addPage>

    <editPage v-else-if="page == 'editPage' && isLogin"
    :dataTask="dataTask"
    @editTask="editTask"
    @changePage="changePage"
    ></editPage>
  </div>
</template>

<script>
import loginPage from "../src/views/login";
import registerPage from "../src/views/register";
import Homepage from "./views/homepage.vue";
import addPage from "./views/addpage.vue";
import editPage from "./views/editpage";
import axios from "axios";
// const baseURL = "https://kanban-ahmad.herokuapp.com/";
const baseURL = "http://localhost:3000/";
export default {
  name: "App",
  components: {
    loginPage,
    registerPage,
    Homepage,
    addPage,
    editPage
  },
  data() {
      return {
      page: "login", // buat nandain page
      isLogin: false,
      user: '',
      dataTask: "",
      listTask: {
        backlog: [],
        todo: [],
        doing: [],
        done: [],
      },
    };
  },
  methods: {
    googleLogin(idToken) {
        axios({
        url: baseURL + 'loginGoogle',
        method: "POST",
        data: {
            token: idToken
        }
      }).then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        this.isLogin = true;
        this.user = response.data.name
        this.page = 'homepage'
        this.fetchTask();
      });
    },
    findTaskById(id) {
        axios({
            url: baseURL + `tasks/${id}`,
            method: "GET",
            data: {
                id: id
            },
            headers: {
            access_token: localStorage.getItem("access_token")
            }
        })
        .then((response) => {
            this.dataTask = response.data
            this.page = 'editPage'
        })
    },
    login(userData) {
      axios({
        url: baseURL + "login",
        method: "POST",
        data: {
          email: userData.email,
          password: userData.password,
        },
      }).then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        this.isLogin = true;
        this.user = response.data.name
        this.page = 'homepage'
        this.fetchTask();
      });
    },
    register(userData) {
      axios({
        url: baseURL + "register",
        method: "POST",
        data: {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        },
      }).then((response) => {
        this.page = 'login'
      });
    },
    logout() {
        localStorage.removeItem("access_token");
        this.isLogin = false;
        this.page = 'login'
    },
    fetchTask() {
      this.listTask = {
        backlog: [],
        todo: [],
        doing: [],
        done: [],
      }
      axios({
        url: baseURL + "tasks",
        method: "GET",
      })
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            const category = response.data[i].category;
            if (category.toLowerCase() === "backlog") {
              this.listTask.backlog.push(response.data[i]);
            } else if (category.toLowerCase() === "todo") {
              this.listTask.todo.push(response.data[i]);
            } else if (category.toLowerCase() === "doing") {
              this.listTask.doing.push(response.data[i]);
            } else if (category.toLowerCase() === "done") {
              this.listTask.done.push(response.data[i]);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePage(pageName) {
        this.page = pageName
    },
    remove(id) {
        axios({
        url: baseURL + `tasks/${id}`,
        method: "DELETE",
        data: {
          id,
        },
        headers: {
            access_token: localStorage.getItem("access_token")
        }
      }).then((response) => {
        this.page = 'homepage'
        this.fetchTask();
      });
    },
    statusUp(data) {
        const id = data.id
        let updateCategory
        if (data.category == 'Backlog') {
            updateCategory = 'Todo'
        } else if (data.category == 'Todo') {
            updateCategory = 'Doing'
        } else if (data.category == 'Doing') {
            updateCategory = 'Done'
        }
        axios({
        url: baseURL + `tasks/${id}`,
        method: "PATCH",
        data: {
          id: id,
          category: updateCategory
        },
        headers: {
            access_token: localStorage.getItem("access_token")
        }
      }).then((response) => {
        this.changePage('homepage')
        this.fetchTask();
      });
    },
    statusDown(data) {
        const id = data.id
        let updateCategory
        if (data.category == 'Done') {
            updateCategory = 'Doing'
        } else if (data.category == 'Doing') {
            updateCategory = 'Todo'
        } else if (data.category == 'Todo') {
            updateCategory = 'Backlog'
        }
        axios({
        url: baseURL + `tasks/${id}`,
        method: "PATCH",
        data: {
          id: id,
          category: updateCategory
        },
        headers: {
            access_token: localStorage.getItem("access_token")
        }
      }).then((response) => {
        this.page = 'homepage'
        this.fetchTask();
      });
    },
    addTask(data) {
        axios({
        url: baseURL + `tasks`,
        method: "POST",
        data: {
          title: data.title,
          description: data.description
        },
        headers: {
            access_token: localStorage.getItem("access_token")
        }
      }).then((response) => {
        this.page = 'homepage'
        this.fetchTask();
      })
    },
    editTask(data) {
        axios({
        url: baseURL + `tasks/${data.id}`,
        method: "PUT",
        data: {
          id: data.id,
          title: data.title,
          description: data.description
        },
        headers: {
            access_token: localStorage.getItem("access_token")
        }
      }).then((response) => {
        this.page = 'homepage'
        this.fetchTask();
      })
    }
  },
  created() {
      if(localStorage.access_token) {
          this.isLogin = true
          this.page = 'homepage'
          this.fetchTask()
      } else {
          this.isLogin = false
          this.page = 'login'
      }
  }
};
</script>

<style>
</style>