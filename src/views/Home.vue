<template>
  <div class="home">
    <clearAsync />
    <LifeCircle />
    <div>
      <br />
      <h1 ref="h1Ref">
        父组件Home:
        <button @click="changeColor">字体变蓝色</button>
        <button @click="changeSize">字体变为30px</button>
      </h1>
      <hr />
      <InjectA />
    </div>
  </div>
</template>

<script>
import clearAsync from './components/clearAsync'
import LifeCircle from './components/LifeCircleHook'
import InjectA from './components/injectA'
import { provide, ref, onMounted } from 'vue'
export default {
  name: 'Home',
  components: {
    clearAsync,
    LifeCircle,
    InjectA
  },
  setup() {
    const size = ref('12px')
    const color = ref('red')
    const h1Ref = ref(null)
    const changeColor = () => {
      color.value = 'blue'
    }
    const changeSize = () => {
      size.value = '40px'
    }
    onMounted(() => {
      h1Ref.value.style.color = 'gold'
    })
    provide('color', color)
    provide('size', size)
    return { color, size, changeColor, changeSize, h1Ref }
  }
}
</script>
