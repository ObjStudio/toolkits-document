# Events

| 事件名 | 说明     | 参数                             |
| ------ | -------- | -------------------------------- |
| @query  | 请求数据 | 返回一个分页信息 pageNo,pageSize |
| @handleCurrentChange  | 页码变化时触发 | 如果enablePagerInterceptors为true，且监听该事件，则第二个参数将会是一个next函数，通过调用next函数来实现控制拦截 |
| @handleSizeChange  | 每页数目变化时触发 | 如果enablePagerInterceptors为true，且监听该事件，则第二个参数将会是一个next函数，通过调用next函数来实现控制拦截 |

### 启用pager拦截器案例
::: warning 提示
从1.2.0版本起，若enablePagerInterceptors为false（默认为false）则回调函数没有第二个参数，若错误执行了next方法，则会引发next is not defined错误
:::
```javascript
handleCurrentChange(e,next){
  this.$confirm("确认跳转?","温馨提示")
  .then(()=>{
    next();
  })
  
},
handleSizeChange(e,next){
  this.$confirm("确认跳转?","温馨提示")
  .then(()=>{
    next();
  })
}
```