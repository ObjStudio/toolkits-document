# 快速上手
::: tip 提示
从1.0.10版本起，tabelCols不再需要配置id，如果配置了也会被组件内部生成的id所替换
:::
## 1、引入组件并注册
```javascript
//引入Vue
import Vue from 'vue'
//引入必要的vxe-table 具体配置请查看官方文档
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)
//引入必要的elementUI 具体配置请查看官方文档
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'; 
Vue.use(ElementUI);
//引入表格
import objTablePlus from 'obj-table-plus';
Vue.use(objTablePlus);
```
如果要使用jsx功能，请在babel.config.js中配置
```javascript
module.exports = {
    /**
     * 新版vue-cli4中，已经默认集成了 JSX 语法对 v-model 的支持，可以直接使用 v-model
     * 如果使用了vue-cli4.x以上版本，就不用配置plugins
    */
    plugins:["@vue/babel-plugin-jsx"],
    //presets中的插件用于配置语法
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@vue/babel-preset-jsx',
            { 
                'injectH': false 
            }
        ]
    ]
}
```
项目依赖
```javascript
//配置语法
"@vue/babel-helper-vue-jsx-merge-props": "^1.2.1",
"@vue/babel-preset-jsx": "^1.2.4"
//只针对vue-cli4以下版本，不支持jsx要使用这个插件
"@vue/babel-plugin-jsx": "^1.1.1",
```
## 2、添加表格组件必要参数如下：
```javascript
(1) tableData:[
  {userId:"233",userName:"小明",userGender:"男",userAge:18},
  ...
  // 树型 其他的看文档中有关于tableData的参数 https://xuliangzhan_admin.gitee.io/vxe-table
  {userId:"234",userName:"小红",userGender:"女",userAge:19,children:[{...}]},
]
(2) tabelCols:[
    { id: "8", field: "createNumber",title:"生产批号", width: 120 },
    { id: "2", field: "patternCreateTime",title:"款号", width: 150 },
    ...
    // 具体参考文档中的 <vxe-column/> 属性
]
*(3)tableProp 参考文档中关于<vxe-table/> 的属性
*(4)tableEvent {click:this.funcA,tap:this.funcB} 具体事件参中的<vxe-table/> 的事件
```

示例代码：

1. 朴素表格——极致简单的表格

   ```vue
   <template>
   <obj-table-plus
        ref="oTable"
        @query="queryList"
        v-model="tableData"
        :tableCols="tableCols"
        >
    </obj-table-plus>
   </template>
   <script>
       export default{
           data(){
               return {
                   //表格数据
                   tableData:[],
                   //定义表格结构
                   tableCols:[
                       { id: "1", field: "name",title:"姓名", width: 120 },
                       { id: "2", field: "age",title:"年龄", width: 120 },
                       { id: "3", field: "gender",title:"性别", width: 120 },
                       { id: "4", field: "phone",title:"联系电话", width: 120 }
                   ]
               }
           },
           methods:{
               queryList(pageNo,pageSize){
                   request(pageNo,pageSize)
                       .then(res=>{
                       this.$refs.oTable.complete(res.list,res.total/*此处要传入一个数据量总数*/);
                   })
                       .catch(err=>{
                       this.$refs.oTable.complete(false);
                   })
               }
           }
       }
   </script>
   ```

   

2. 自定义表格——携带自定义参数、jsx语法

   ```vue
   <template>
   <obj-table-plus
        ref="oTable"
        @query="queryList"
        v-model="tableData"
        :tableCols="tableCols"
        :tableProp="tableProp"
        :tableEvent="tableEvent"
        >
    </obj-table-plus>
   </template>
   <script>
       export default{
           data(){
               return {
                   //表格数据
                   tableData:[],
                   //定义表格结构
                   tableCols:[
                       { id: "1", field: "name",title:"姓名", width: 120 },
                       { id: "2", field: "age",title:"年龄", width: 120 },
                       { id: "3", field: "gender",title:"性别", width: 120 },
                       { id: "4", field: "phone",title:"联系电话", width: 120 },
                       //自定义表格内容
                       {
                           id:"5",
                           field:"status",
                           title:"状态",
                           diy:true,//启用自定义渲染
                           type:"jsx",//类型是jsx渲染
                           render:({row})=>{
                               return (
                               	<el-button type={row.status==0?'danger':'primary'}>{row.status==0?'异常':'正常'}</el-button>
                               )
                           }
                       }
                   ],
                   //表格参数
                   tableProp:{
                       "auto-resize": true,
                       border: true,
                       "row-id": "id",
                       //带多选
                       "checkbox-config": { labelField: "", checkRowKeys: [10053, 23666] },
                       "max-height": "400px",
                       "highlight-current-row": true,
                       "show-overflow": true,
                   },
                   //表格事件
                   tableEvent:{
                       "checkbox-change": this.selectChangeEvent,
                   }
               }
           },
           methods:{
               queryList(pageNo,pageSize){
                   request(pageNo,pageSize)
                       .then(res=>{
                       this.$refs.oTable.complete(res.list,res.total/*此处要传入一个数据量总数*/);
                   })
                       .catch(err=>{
                       this.$refs.oTable.complete(false);
                   })
               },
               selectChangeEvent(e){
                   // TODO...选中事件
               }
           }
       }
   </script>
   ```

3. 多级表格

   ```vue
   <template>
   <obj-table-plus
        ref="oTable"
        @query="queryList"
        v-model="tableData"
        :tableCols="tableCols"
        :tableProp="tableProp"
        :tableEvent="tableEvent"
        >
    </obj-table-plus>
   </template>
   <script>
       export default{
           data(){
               return {
                   //表格数据
                   tableData:[],
                   //定义表格结构
                   tableCols:[
                       { id: "1", field: "name",title:"姓名", width: 120 },
                       { id: "2", field: "age",title:"年龄", width: 120 },
                       { id: "3", field: "gender",title:"性别", width: 120 },
                       { id: "4", field: "phone",title:"联系电话", width: 120 },
                       {id:"5",
                        field:"location",
                        title:"所在地区",
                        childTableCols:[
                           {id:"51",field:"province",title:"省份"},
                           {id:"52",field:"city",title:"城市"},
                           {id:"53",field:"area",title:"区"},
                         ]
                       }
                   ],
                   //表格参数
                   tableProp:{
                       "auto-resize": true,
                       border: true,
                       "row-id": "id",
                       //带多选
                       "checkbox-config": { labelField: "", checkRowKeys: [10053, 23666] },
                       "max-height": "400px",
                       "highlight-current-row": true,
                       "show-overflow": true,
                   },
                   //表格事件
                   tableEvent:{
                       "checkbox-change": this.selectChangeEvent,
                   }
               }
           },
           methods:{
               queryList(pageNo,pageSize){
                   request(pageNo,pageSize)
                       .then(res=>{
                       /*注意：这边的list要对应上children才可以正确渲染
                       具体参考vxe-table文档https://vxetable.cn/v3/#/table/grid/group*/
                       this.$refs.oTable.complete(res.list,res.total/*此处要传入一个数据量总数*/);
                   })
                       .catch(err=>{
                       this.$refs.oTable.complete(false);
                   })
               },
               selectChangeEvent(e){
                   // TODO...选中事件
               }
           }
       }
   </script>
   ```

   



## 3、表格可选参数/插槽
```javascript
(1)tableHandles 基于elementUI的表格操作按钮
(2)slot insert 表格上插槽 一般用于插入一个表单来进行检索
```

## 4、全局配置

在src目录下创建config文件夹，再config文件夹下创建obj-table.config.js作为配置文件，可以根据不同的项目自定义默认配置

```javascript
module.exports={
    //对应tableProp的默认值
    'table-prop':{
        "auto-resize": true,
        border: true,
        "row-id": "id",
        //带多选
        "checkbox-config": { labelField: "", checkRowKeys: [10053, 23666] },
        "highlight-current-row": true,
        "show-overflow": true,
        "tree-config": { children: "children" },
    },
    //工具栏配置
    'toolbar-prop':{custom:true},
    //是否自动查询
    'enable-auto-query':false,
    //是否分页
    'is-pagination':false
}
```