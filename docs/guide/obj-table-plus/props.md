# Props

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
| tableData    | 表格内容数据 | Array | []     |        |
| tableCols    | 表格列的配置 | Array | []     |        |
| tableProp    | 表格配置项   | Object        | {}     |        |
| tableEvent   | 表格事件配置 | Object        | {}     |        |
| toolbarProp  | 工具栏配置   | Object        | {}     |        |
| toolbarEvent | 工具栏事件   | Object        | {}     |        |
| isPagination | 是否分页     | Boolean       | true   | false  |

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
https://vxetable.cn/v3/#/column/api
除了vxe官方给的属性之外，本组件还提供了其他功能

| 参数         | 说明         | 类型          | 默认值 | 可选值 |
| ------------ | ------------ | ------------- | ------ | ------ |
| diy    | 是否启用自定义，如果启用，将使用内部组件 | Boolean | false     |  true      |
| type    | 当diy为true时，使用表格内部组件及其功能；如果diy为false，则对应vxe-column组件的type | String | ""     |  jsx,button,input      |
| render    | 当diy为true且type等于jsx时可以使用。要求函数要返回一个jsx对象 | Function | ()=>{}  |        |

## tableProp

## tableEvent

## toolbarProp

## toolbarEvent

## isPagination