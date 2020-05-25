import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
// import { createApp, h, reactive } from 'vue'

// const App = {
//   setup() {
//     let oriPerson = {
//       name: 'liu',
//       age: 23
//     }
//     let changeName = () => {
//       person.age = 24
//     }
//     let person = reactive(oriPerson)
//     return { person, changeName }
//   },
//   render() {
//     return h(
//       'div',
//       {
//         onClick: () => {
//           this.changeName()
//         }
//       },
//       [
//         'name: ',
//         h('span', [this.person.name, h('p', 'age:' + this.person.age)])
//       ]
//     )
//   }
// }
// createApp(App).mount('#app')
