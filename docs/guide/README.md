# 首页

点击菜单，默认打开该 README.md

## 代码块

> 代码块语法: [https://vuepress.vuejs.org/zh/guide/markdown](https://vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE)

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## 提示

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

## 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 二级标题

这是二级标题下的内容

### 三级标题

notes > 侧边栏