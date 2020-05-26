<template>
  <div>
    <h5 :style="{ color: color, fontSize: size }">孙组件B</h5>
      <p>{{str}}</p>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
  setup() {
    let color = inject('color')
    let size = inject('size')
    const str = ref('这是孙组件B')
    const setStr = () => {
      str.value = '孙组件B被子组件A赋值了'
    }
    return { color, size, str, setStr }
  }
}
</script>

<style></style>
