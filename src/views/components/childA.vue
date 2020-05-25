<template>
  <div>
    Father: {{ person.name }}

    <p>{{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: {
    person: Object
  },
  setup(props, context) {
    // console.log(context)
    // console.log(this)
    const state = reactive({ count: 1 })
    // console.log(state)
    return state
  }
}
</script>

<style></style>
