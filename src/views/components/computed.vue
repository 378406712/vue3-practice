<template>
  <div>
    <p>ref值:{{ count }}</p>
    <!-- <p>computed值:{{ plusOne }}</p> -->
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    // const plusOne = computed(()=>count.value+1)
    // plusOne.value= 9
    // console.log(plusOne.value)//只读 computed value is readonly
    const plusTwo = computed({
      get() {
        count.value + 2
      },
      set(val) {
        // console.log(val)
        count.value = val - 2
      }
    })
    plusTwo.value = 9
    return { plusTwo, count }
  }
}
</script>

<style></style>
