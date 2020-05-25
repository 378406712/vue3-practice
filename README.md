# vue3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### myNotes

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
