<template>
  <div>
    <div>生命周期</div>
    <input type="text" v-model="state" />
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
export default {
  setup() {
    const state = ref('')
    onBeforeMount(() => {
      // console.log('onBeforeMount')
    })
    onMounted(() => {
      // console.log('onMounted')
    })
    onBeforeUpdate(() => {
      //   console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      //   console.log('onUpdated')
    })
    //  console.log('setup')
    return {
      state
    }
  }
}
</script>

<style></style>
