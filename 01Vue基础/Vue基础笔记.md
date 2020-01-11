# Vue基础：

## v-once：
设置在模板中读取变量只读取一次，后续这个变量更改了，不会跟着变化。

## v-html：
读取变量的时候，不会把他当做普通字符串，而是当做一个`HTML`元素进行解析。

## v-bind属性绑定：
在`html`标签的属性上，如果想要读取`Vue.data`中的属性，那么需要使用`v-bind`指令。或者是`v-bind`省略，留下一个冒号即可。示例代码如下：
```html
<img v-bind:src="logo" alt="">
<img :src="logo" alt="">
```

## VSCode中添加自定义代码片段：
1. ctrl+shift+p：打开命令行窗口。
2. 搜索snippets关键字。选择Preferenece：Configure User Snippets
3. 选择html.json，打开这个文件。

## Style和Class属性绑定：
### Class绑定：
1. 通过数组的方式来实现： 
```html
<div id="app">
<p v-bind:class="[classname1,classname2]">你好，世界</p>
</div>
<script>
let vm = new Vue({
  el: "#app",
  data: {
    classname1: "pcolor",
    classname2: "pfont"
  }
});
</script>
```
2. 通过对象的方式来实现：
```html
 <div id="app">
     <p v-bind:class="{pcolor:isColor,pfont:isFont}">你好，世界</p>
 </div>
 <script>
     let vm = new Vue({
         el: "#app",
         data: {
             isColor: true,
             isFont: true
         }
     });
 </script>
 ```

 ### Style绑定：
 1. 通过对象：
 ```html
 <p :style="{backgroundColor: 'red'}">我爱你，中国！</p>
 ```
 2. 通过数组，通过数组是把多个style样式对象添加进去：
 ```html
 <p :style="[pStyle1,pStyle2]">我爱你，中国！</p>
 ```

## 执行JavaScript表达式：
在属性绑定和变量读取中。可以使用表达式。常见的表达式有：变量读取，变量运算，三目运算符，函数调用，取反等。
在属性绑定时，需要使用`{}`包裹表达式，在变量读取时需要使用`{{}}`。
示例代码如下：
```html
<div :style="{color:danger?'red':'black'}">{{message.split(" ").reverse().join(" ")}}</div>
<script>
  new Vue({
    el: '#app',
    data: {
      danger: false,
      message: "hello world"
    }
  })
</script>
```

## 条件判断：
1. `v-if`、`v-else-if`、`v-else`。
2. 如果想要在某个条件下渲染多个元素，那么可以使用`template`标签。
3. Vue默认情况下会重用相同的标签来提高性能，有时候我们不想让她重用，那么可以在不需要重用的元素上加一个`key`属性，不同的`key`就不会被重用。

## v-show和v-if：
1. v-show：一次性会把所有的标签都渲染出来，然后通过修改display值来决定是否显示。所以在需要频繁切换的情况下推荐使用。但是v-show不能在template标签上使用。
2. v-if：v-if是惰性的，如果在初始渲染时条件为假，则什么也不做，当判断条件条件变为真时，才会开始渲染条件块。如果条件更改了，那么会适当的做标签销毁和重建以及事件的绑定等。在不需要频繁切换的时候推荐使用。


## v-for循环：
语法就是`变量 in 需要循环的变量名`。
1. 数组循环：`<tr v-for="book in books">`，如果在循环的时候想要把下标也循环出来，那么可以加一个圆括号，并且永远记住，第一个值是对象，第二个才是下标，不管这个名字叫做什么。
2. 对象循环：跟数组循环是一样的。默认循环出来的是值，如果想要循环`key`和`value`，那么加一个圆括号。

## 循环状态保持：
默认情况下，如果数组中的顺序发生变化，或者个数发生变化导致重新渲染，那么vue会重新利用之前的元素，而不会重新排序，这样在某些情况下可能是想要的。但是大部分情况可能不是我们想要的，这时候可以添加`key`属性。`key`只能够是number和string类型，那么在循环的时候一般使用循环出来的对象的某个唯一的值，不要使用index来作为key，虽然用了，但是没有效果。在vue2.2.x以上，在自定义组件上使用v-for，key是必须要写的。

## 触发视图更新：
1. 更新的类型：
  * 直接赋值更新。this.heros=[]，模板会立即更新。
  * 通过函数更新。this.heros.push("xx)。
2. 针对数组中使用函数进行更新。有以下方法是可以直接触发更新：`push/pop/shift/unshift/splice/reverse/sort`，还有一些其他函数更新不会出发视图更新，这时候就可以通过修改后赋值的方式来实现。
3. 如果想要通过下标来修改数组中的某个值，是不会触发视图更新的，这时候通过`Vue.set`来实现。如果想要在对象上新增一个属性，那么也只能通过`Vue.set`更新才会触发视图更新。


## 事件绑定：
1. 绑定方式：
  * 可以直接把代码放到元素上。
  * 可以把代码放到函数中，然后在@事件后面写上函数名称。
2. 常规的写法是v-on:，简写是@+事件名。
3. 可以传递参数，也可以传递$event这个特殊参数。
4. 修饰符：.prevent,.stop,.catpure,.once,.self,.passive

## 计算属性：
1. 一些操作需要通过计算后才能得到的。需要放到computed属性中。
2. 计算属性默认情况下只有get，没有set，如果想实现set那么就必须要先实现get。get和set就写在计算属性的对象中。

## 监听属性：
监听属性需要放到watch中，可以获取到改变前后改变后的值。

## 表单输入绑定：
1. 使用的是v-model来实现的。
2. input,checkbox,radio,textarea,select都可以使用绑定。
3. 有一些常用的修饰符：
  * .lazy：只有输入框失去焦点时才更新。
  * .number：自动的将输入的值转化为数值类型。
  * .trim：自动的将用户输入首尾的空白字符删除。

## 自定义组件：
1. 语法：`Vue.component("组件的名字",{data,template})`。
  * `data`：必须为一个函数，这个函数中返回一个对象。用法跟Vue里面的data是一样的。
  * `template`：用来表示这个组件的渲染后的具体的代码。
2. 组件的属性，是通过`props`定义的。`props`可以是一个数组，也可以是一个对象。如果是数组，那么就直接写属性的名字，如果是对象，那么可以给每个属性定义一些约束，比如type，required，default。
3. 组件中的代码，必须只有一个根元素。

## 自定义组件-添加事件：
1. 在需要子组件传递事件到父组件的时候，调用`this.$emit(事件名称,参数....)`。
2. 在使用这个组件的时候，需要绑定事件，语法跟之前绑定原生`html`的事件是一样的。比如`@check-chenged`。

## 自定义组件v-model：
要实现`model`配置，在这个配置中，有两个属性需要配置。分别是：
1. `event`：代表什么情况下触发这个`v-model`行为，也就是给事件取名。
2. `prop`：代表传给`v-model`的那个变量，要绑定到哪个属性上。

然后调用`this.$emit(model.event,计算后的结果)`就可以了。


## 自定义组件-插槽：
1. 插槽的用法是在组件的模板代码中，在指定位置使用`slot`，那么以后在使用这个组件的时候，在组件中添加的任何内容，都会加到`slot`的位置。
2. 组件中的变量不能在插槽中使用：插槽中，不能够使用组件中的数据。只能从父组件中读取数据。
3. 默认值：可以在定义插槽的地方，先定义好默认值，这样以后不传递值，也会有一个默认值，当传递值时就会把默认值覆盖。
4. 命名插槽：如果想要在自定义组件中创建多个插槽，那么就需要给每个插槽取个名字。这个就是命名插槽。
  * 定义：`<slot name='header'></slot>`
  * 使用：`<template v-slot:header></template>`
5. 组件中的变量传给插槽：
  * 定义：把需要传给插槽的变量绑定到`slot`上。
    ```html
    <div>
      <div class="header">
        <slot name="header" :navs="navs"></slot>
      </div>
      <div class="footer">
        <slot name="footer" :address="address" :aboutus="aboutus"></slot>
      </div>
    </div>
    ```
  * 使用：在使用插槽的时候，指定名称后，加上一个名称，这个名称可以随便取，那么绑定到`slot`上所有的属性都可以通过这个名称获得。
    ```html
    <template v-slot:header="headerProps">
        这是头部区域
        {{headerProps.navs}}
      </template>
      <template v-slot:footer="footerProps">
        这是底部区域
        {{footerProps.address}}/{{footerProps.aboutus}}
      </template>
    </container>
    ```
  * 特例：如果只有一个插槽，或者这个插槽的名字是叫做default（不写的话默认就叫default），那么就可以把属性定义放到组件上。
    ```html
    <container v-slot="props">
      {{props.navs}}
    </container>
    ```

## 生命周期函数：
1. 创建阶段：
  * beforeCreate：Vue已经创建了，但是data和methods都还没有被创建好。
  * created：data和methods已经被创建好了。
  * beforeMount：模板经过编译，还没有挂载到网页中。
  * mounted：模板已经经过编译，并且已经挂载到网页中。创建阶段的事情都做好了，可以真正运行了。

2. 运行阶段：
  * beforeUpdate：data中的数据已经更新了，但是模板中并没有更新。
  * updated：data中和模板中的数据都已经更新了。

3. 销毁阶段：
  * beforeDestroy：在销毁之前调用。这个时候，所有的东西都是可以使用的。
  * destroyed：被销毁。绑定到vue上的事件，以及下面的组件等都会被销毁。

## 过滤器：
1. 使用：`{{username|strip}}`、`<a :href="url|strip">百度</a>`。
2. 定义：都是定义一个函数，这个函数的第一个参数永远都是被过滤的那个变量
  * 局部定义：在组件中添加一个`filters`，然后在`filters`中添加过滤器。
  * 全局定义：通过`Vue.filter('过滤器的名称',函数)`。
3. 传参：如果在使用过滤器的时候还需要传递额外的参数，那么可以在定义过滤器的时候，提供其他的参数。在使用的时候直接跟普通函数一样传递就可以了。