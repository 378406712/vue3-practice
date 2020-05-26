<template>
  <div>
    <input ref="ipt" type="text" v-if="isShow" />
    <button @click="showIpt" v-else>显示文本框</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showIpt() {
      this.isShow = true
      this.$nextTick(() => {
        this.$refs.ipt.focus()
      })
      /**
       * nextTick
       * 定义：在下次 DOM 更新循环结束之后执行延迟回调。
       * 在修改数据之后立即使用这个方法，获取更新后的 DOM。
       * 什么时候需要用的Vue.nextTick()?
       * 1、Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中，
       * 原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。
       * 与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载已完成。
       * created(){
    let that=this;
    that.$nextTick(function(){  //不使用this.$nextTick()方法会报错
        that.$refs.aa.innerHTML="created中更改了按钮内容";  //写入到DOM元素
    });
  },
 2、当项目中你想在改变DOM元素的数据后基于新的dom做点什么，对新DOM一系列的js操作都需要放进Vue.nextTick()的回调函数中；
通俗的理解是：更改数据后当你想立即使用js操作新的视图的时候需要使用它
3、在使用某个第三方插件时 ，希望在vue生成的某些dom动态发生变化时重新应用该插件，也会用到该方法，
这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。

Vue.nextTick(callback) 使用原理：
原因是，Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。
当你设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

       *
       */
    }
  }
}
</script>

<style></style>
