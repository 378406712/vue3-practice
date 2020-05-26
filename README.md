# vue3

## myNotes

1.  setup 的返回值会作为 render 的上下文.
    setup 在整个生命周期中只执行 1 次.
2.  setup 在 beforeCreate 之前执行.
3.  setup 函数有 2 个参数,props 和 context.

    - 在 setup 同级的 props 中定义当前组件允许传递的值,
      通过 setup 的第一个形参可以来接收 props 数据
    - context 是一个上下文对象,包含了一些属性,在 vue2 中需要用 this 来访问到,
      在 vue3 中访问的方式:

      ```
          setup(props,context){
              context.attrs
              context.slots
              context.emit
              ~~context.root~~
              ~~context.refs~~
              ~~context.parent~~

            }
      ```

4.  在 setup 中无法访问到 this,使用 context 代替.
5.  reactive()函数接收**一个普通对象**，返回一个响应式的数据,
    需要在 setup 中 return 出 reactive().
6.  ref()函数用来根据给定的值创建一个响应式的数据对象,
    ref()函数调用的返回值 是一个对象,这个对象只包涵一个.value 属性,
    .value 仅在 setup 内部生效,模板上可直接写 return 出的那个对象.
7.  当把 ref()创建出的响应式数据对象，挂载到 reactive()上，
    会自动把响应式数据对象展开为原始值,即不需要通过.value 就可以直接被访问,
    **不要重名,新的 ref 会覆盖旧的 ref**.
8.  reactive()和 ref()区别:
    - reactive()创建的是一个对象，可包含很多值;
    - ref()创建的是单个显示数据,一次只能创建一个.
9.  isRef()用来判断某个值是否是 ref()所创建的.
    使用场景:当需要展开某个可能是 ref()创建的值的时候:
    ```
      const unwrapped = isRef(foo)?foo.value:foo
    ```
10. toRefs 可以将 reactive()创建出的响应式对象转化为普通对象,
    这个对象上的每个属性节点都是**ref()类型的响应数据**.

    ```
    import { toRefs, reactive } from 'vue'
    export default {
    setup() {
    const state = reactive({ count: 0, foo: 'bar' })
    //定义自增+1的函数
    const add = () => {
      state.count += 1
      console.log(state.count)
    }
    return { ...toRefs(state), add }//用toRefs包裹,将state重新变为响应式数据
    }
    }
    ```

11. computed()用来创建计算属性,返回值是一个 ref 实例,使用 computed 需要按需导入.默认为只读属性,创建可读可写的 computed：传入 get 与 set 函数对象:

```
  const plusTwo = computed({
    get() {
      count.value + 2
    },
    set(val) {
      count.value = val - 2
    }
  })
```

12. watch()函数用来监听某数据项的变化,从而触发某些特定的操作,需要按需导入,
    可监视单个 reactive,ref,也可以监视多个 reactive,ref
13. 清除监视:在 setup 函数内创建 watch 监视,会在当前组件销毁时自动停止。若想明确地停止
    某个监视,可以调用 watch()函数的返回值即可.
14. 可以清除 watch 中无效的异步任务,有时候当 watch 监视的值发生变化时或 watch 被 stop 后我们期望清除那些无效的异步任务,watch 回调函数提供了 cleanup registrator function 来执行清除任务,调用情况:

- watch 被重复执行了
- watch 被强制 stop 了

15. **生命周期钩子**:beforeCreated,created => setup(),最先执行,其他钩子命名相比 Vue2 只在原钩子名前加了 on,如 mounted => onMounted,beforeDestroy => onBeforeMount,destoryed => onUnmounted,errorCaptured => onErrorCaptured.
    这些钩子都要写在 setup 函数内.
16. provide & inject:provide()和 inject()可以实现嵌套组件之间的数据共享,写在 setup 中.父级组件使用 provide 函数向下传递数据,子组件使用 inject 获取上层传递的数据.
    provide('要共享数据的名称',被共享的数据),才传递过程中,后面传递的数据会覆盖前面的同名数据.
17. 通过 ref()还能引用页面上的组件,同 Vue2.
    定义方式：在 setup 下定义标签 let h1Ref= ref(null),在 onMounted 中给它赋值,如
    ```
     h1Ref.value.style.color = 'gold'
    ```
    然后 return 出 h1Ref,在模板标签中定义 ref="h1Ref".
    同时也能调用子组件 setup 中定义的值与方法
18. createComponent 提供了类型推断,方便结合 TS 书写代码时,能为 setup()中的 props 提供完整的类型推断.

        ```
        import {createComponent} from 'vue'
        export default createComponent({
          porps:{
            foo:String
          },
          setup(props){
            props.foo //type：string
          }
        })
        ```
