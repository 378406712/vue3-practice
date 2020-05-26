<template>
  <div>
    <input type="text" v-model="keyword" />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  setup() {
    const keyword = ref('')
    const AsyncPrint = (val) => {
      return setTimeout(() => {
       // console.log(val)
      }, 1000)
    }
    watch(keyword, (newVal, oldVal, clean) => {
      const timer = AsyncPrint(newVal)
      clean(() => clearTimeout(timer))
    })

    return {
      keyword
    }
  }
}
</script>

<style></style>
