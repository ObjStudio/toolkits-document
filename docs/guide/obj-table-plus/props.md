# Props

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
| tableData(v-model)    | 表格内容数据 | Array | []     |        |
| tableCols    | 表格列的配置 | Array | []     |        |
| tableProp    | 表格配置项   | Object        | {}     |        |
| tableEvent   | 表格事件配置 | Object        | {}     |        |
| toolbarProp  | 工具栏配置   | Object        | {}     |        |
| toolbarEvent | 工具栏事件   | Object        | {}     |        |
| pagerStyle  | 底部分页器样式配置   | Object        | {}     |        |
| isPagination | 是否分页     | Boolean       | true   | false  |
| enableAutoQuery | 是否自动执行query事件     | Boolean       | true   | false  |
| enableCacheUuid | 是否启用缓存uuid，开启后每个表格在生成uuid后将会缓存起来，当表格列变化时不会重新获取一遍     | Boolean       | false   | true  |
| mode | 功能模式，可选值default(默认表格分页模式)，grid(宫格卡片布局模式,需要传入colNumber)     | String       | default   | grid  |
| colNumber | 当mode=grid时需要传入colNumber,默认是4列 |Number| 4   | 数字  |
| enableElementStyle | 是否与elementUI样式对齐 |Boolean| true  | false  |
| completeTime | 完成时间，用于控制动画。比如请求太快动画来不及展示，就限定个延时进行展示动画。单位：ms |Number| 0  | 数字  |
| height | 组件高度,这样就不用再在组件外加上style样式了。高度就是高度；若设置为auto将会自动盛满其父组件 |String| auto  | 500px等等  |
| width | 组件宽度 |String| 100%  | 100px等等  |
| enablePagerInterceptors<Badge text="1.2.0" type="tip"/> | 是否启用分页点击拦截器,默认不启用，若启用，当监听页码事件变化时，必须调用next方法，否则不会进行下去。 |Boolean| false  | true  |

## tableData

根据tableCols的配置项对应的表格数据，这边拿官网示例
官网示例
```vue
<template>
    <vxe-table
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="content" title="Html" type="html" show-overflow></vxe-column>
      <vxe-column field="role" title="Role" show-overflow></vxe-column>
    </vxe-table>
</template>
<script>
    export default {
      data () {
        return {
          tableData: [
            { name: 'Test2', age: 28, sex: '男', role: '后端', content: '<img height="40" src="https:/  /pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">' },
            { name: 'Test4', age: 26, sex: '男', role: '前端', content: '<a href="https://github.com/   x-extends/vxe-table">我是链接</a>' },
            { name: 'Test3', age: 20, sex: '女', role: '程序员鼓励师', content: '<img height="40"   src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">' },
            { name: 'Test1', age: 22, sex: '女', role: '设计师', content: '<div><span style="color:     red">我是 Htmp 片段</span></div>' }
          ]
        }
      }
    }
</script>       
```
使用组件
```vue
<template>
    <obj-table-plus
        v-model="tableData"
        :tableCols="tableCols">
    </obj-table-plus>
</template>
<script>
    export default {
      data () {
        return {
          tableData: [
            { name: 'Test2', age: 28, sex: '男', role: '后端', content: '<img height="40" src="https:/  /pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">' },
            { name: 'Test4', age: 26, sex: '男', role: '前端', content: '<a href="https://github.com/   x-extends/vxe-table">我是链接</a>' },
            { name: 'Test3', age: 20, sex: '女', role: '程序员鼓励师', content: '<img height="40"   src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">' },
            { name: 'Test1', age: 22, sex: '女', role: '设计师', content: '<div><span style="color:     red">我是 Htmp 片段</span></div>' }
          ],
          tableCols:[
              {type:"seq",width:"60"},
              {title:"Name",field:"name"},
              {title:"Sex",field:"sex"},
              {title:"Age",field:"age"},
              {title:"Html",field:"content",type:"html","show-overflow":true},
              {title:"Role",field:"role",'show-overflow':true},
          ]
        }
      }
    }
</script>   
```

## tableCols
<a href="https://vxetable.cn/v3/#/column/api" target="_blank">均参考vxe-column提供的参数</a>
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
| diy<Badge text="弃用" type="error"/> | 是否启用自定义，如果启用，将使用内部组件 | Boolean | false     |  true      |
| type    | 当diy为true时，使用表格内部组件及其功能；如果diy为false，则对应vxe-column组件的type | String | ""     |  jsx,button,input      |
| type<Badge text="1.1.0" type="tip"/>    | 合并了type | String | ""     |  jsx,button,input      |
| render<Badge text="1.0.10" type="tip"/>    | 当diy为true且type等于jsx时可以使用。要求函数要返回一个jsx对象 | Function | ()=>{}  |        |
| render<Badge text="1.1.0" type="tip"/>    | 当type等于jsx时可以使用。要求函数要返回一个jsx对象 | Function | ()=>{}  |        |

## tableProp
<a href="https://vxetable.cn/v3/#/table/api" target="_blank">均参考vxe-table提供的参数</a>
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
|  |  |  |      |        |

## tableEvent
<a href="https://vxetable.cn/v3/#/table/api" target="_blank">均参考vxe-table提供的事件</a>
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
|  |  |  |      |        |

## toolbarProp
<a href="https://vxetable.cn/v3/#/toolbar/api" target="_blank">均参考vxe-toolbar提供的参数</a>
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
|  |  |  |      |        |

## toolbarEvent
<a href="https://vxetable.cn/v3/#/toolbar/api" target="_blank">均参考vxe-toolbar提供的事件</a>
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
|  |  |  |      |        |

## pagerStyle
<a href="https://vxetable.cn/v3/#/pager/api" target="_blank">均参考vxe-pager提供的属性</a>
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
|  |  |  |      |        |