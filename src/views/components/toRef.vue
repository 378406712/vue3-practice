<template>
  <div>
    <p>{{ count }}<button @click="add">+1</button></p>
    <p>{{ foo }}</p>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({ count: 0, foo: 'bar' })
    //定义自增+1的函数
    const add = () => {
      state.count += 1
      console.log(state.count)
    }
    return { ...toRefs(state), add }
  }
}
</script>

<style></style>
