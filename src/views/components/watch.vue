<template>
  <div>
    <!-- <p>watch:{{count}}</p> -->
    <!-- <p>watch:{{ state }}</p> -->
    <!-- <button @click="state.count += 1">watch +1</button> -->
  </div>
</template>

<script>
import { watch, ref, reactive } from 'vue'
export default {
  setup() {
    // const count = ref(1)
    // setInterval(() => {
    //   count.value++
    // }, 1000)
    /**
     * 监听reactive
     */
    // watch(()=>{console.log(count.value)})
    // // return {count}
    // const state=  reactive({count:0})
    // watch(()=>state.count,(newVal,oldVal)=>{
    //     console.log(newVal,oldVal)
    // })
    /**
     * 监听ref
     */
    // const state = ref(1)
    // watch(state,(newVal,oldVal)=>{
    //     console.log(newVal,oldVal)
    // })
    //   setTimeout(() => {
    //   state.value+=1
    // }, 1500)
    // return {state}
    /**
     * 监听多个reactive数据源
     */
    // const state = reactive({ count: 1, foo: 'bar' })
    // watch(
    //   [() => state.count, () => state.foo],
    //   ([newCount, newName], [oldCount,oldName]) => {
    //     console.log(newCount)
    //     console.log(newName)
    //     console.log('-----')
    //     console.log(oldCount)
    //     console.log(oldName)
    //   },{lazy:true}
    // )
    /**
     * 监听多个ref数据源
     */
    const count = ref( 0 )
    const foo = ref('bar')
    watch([count, foo], ([newCount, newName], [oldCount, oldName]) => {
      console.log(newCount)
      console.log(newName)
      console.log('-----')
      console.log(oldCount)
      console.log(oldName)
    })
    setTimeout(() => {
      count.value+=1
      foo.value = 'chen'
    }, 1500)
  }
}
</script>

<style></style>
