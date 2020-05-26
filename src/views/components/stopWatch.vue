<template>
  <div>
    <p>stopWatch:{{ count }}</p>
    <span @click="stopWatch">清除监视</span>
  </div>
</template>

<script>
import { watch, ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const stop = watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })

    const stopWatch = () => {
      stop() //清除stop
    }
    setInterval(() => {
      count.value += 1
    }, 1500)
    return { count, stopWatch }
  }
}
</script>

<style></style>
