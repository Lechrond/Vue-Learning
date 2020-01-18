# Vue-Cli笔记：

## 组件定义和导入：
1. 定义：`.vue`中分成三个模块，`template`、`script`、`style`。然后在`script`中需要导出组件对象`export default`。
2. 导入：`import XXX from "XXX"`

## style的scoped属性：
1. 默认情况在`.vue`组件中定义的样式是全局可用的。绝大部分情况下我们是在某个组件中的样式只在当前组件中有效。那么这时候就可以通过在`style`上添加`scoped`属性，这样样式就只能作用到当前组件了。
2. 因为`App.vue`是作为一个主入口组件，因此我们一般情况下会在`App.vue`的`style`中写上一些全局样式，比如：清空默认浏览器的样式等。所以在`App.vue`中的`style`上，我们不会添加`scoped`属性。
