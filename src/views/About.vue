<template>
  <div class="about">
    <p @click="change">name:{{ person.name }}</p>
    <p>age:{{ person.age }}</p>
    <ChildA :person="person" />
    <ChildB />
    <ToRefs />
  </div>
</template>

<script>
import { reactive } from 'vue'
import ChildA from './components/childA'
import ChildB from './components/childB'
import ToRefs from './components/toRef'
export default {
  components: { ChildA, ChildB, ToRefs },
  setup(props, context) {
    // console.log('setup')
    // console.log(context)
    //setup的返回值会作为render的上下文
    //setup在整个生命周期中只执行1次
    let oriPerson = {
      name: 'Clover',
      age: 23
    }
    let person = reactive(oriPerson)
    const changeName = () => {
      person.age = 24
    }

    return { person, changeName }
  },

  methods: {
    change() {
      this.changeName()
    }
  },

  beforeCreate() {
    // console.log('beforeCreate')
  },
  created() {
    //  console.log('created')
  }
}
</script>
