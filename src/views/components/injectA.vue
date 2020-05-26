<template>
  <div>
    <h3 :style="{ color: color }">子组件A:{{ color }}</h3>
    <hr />
    <InjectB ref="refB" />
    <button @click="getValueB">A拿到B中的值:</button>
  </div>
</template>

<script>
import InjectB from './components/injectB'
import { inject, provide, ref } from 'vue'
export default {
  components: { InjectB },
  setup() {
    let color = inject('color')
    const refB = ref(null)
    const getValueB = () => {
      console.log(refB.value.str)
      console.log(refB.value)
      refB.value.setStr()
    }
    return { color, refB, getValueB, getValueB }
  }
}
</script>

<style></style>
