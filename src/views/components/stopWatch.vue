<template>
  <div></div>
</template>

<script>
import { watch, ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    watch(count, () => {})
  }
}
</script>

<style></style>
