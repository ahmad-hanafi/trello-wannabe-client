import Vue from 'vue';
import App from './App.vue';
import GoogleSignInButton from 'vue-google-signin-button-directive'

new Vue({
  GoogleSignInButton,
  render: h => h(App),
}).$mount('#app');

// new Vue({
//     el: "#app",
//     data: {
//         user: "Ahmad Hanafi",
//         description: "Kalau gak salah itu disuruh bikin apa gitu",
//         title: "Liat list Project"
//     },
//     methods: {

//     }
// })