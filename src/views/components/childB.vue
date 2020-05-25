<template>
  <div>
    ref:{{ state.count }}
    <button @click="state.count += 2">+2</button>
    <p>
      <span>{{ name }}</span>
      <span>{{ Footitle }}</span>
      <br />
      <span>{{ state.bar }}</span>
      <span>{{ Bartitle }}</span>
    </p>
  </div>
</template>

<script>
import { ref, reactive, isRef } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const name = ref('foo')
    const state = reactive({ count, bar: 'bar' })
    const c2 = ref(9)
    state.count = c2
    const Footitle = isRef(name) ? '是Ref创建出的值' : '不是Ref创建出的值'
    const Bartitle = isRef(state.bar) ? '是Ref创建出的值' : '不是Ref创建出的值'
    return { state, name, Footitle, Bartitle }
  }
}
</script>

<style></style>
