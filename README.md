- 练习
- 测试
- 源码阅读
- 知识点速记


```js
        let arr= null, arrr = 10;
        console.log(arr&&arrr); //null
        /*
        **
        */
        let arr= 1, arrr = 10;
        console.log(arr&&arrr);// 10
        /*
        **
        */
        let arr= 10, arrr = null;
        console.log(arr&&arrr); //null


        //两个都为真，且值由后面的变量决定

```

```js
        if (length===+length){}


        //‘+’是将type转换为Number
      //length === +length等价于typeof length === “number” && !isNaN(length)
```
```js
 const ssss = () => {
       return Array.prototype.slice.call(arguments,0)
    }
    console.log(ssss(1,2,3,45,456)) 
    //arguments is undefined
```
> 箭头函数不会在其内部暴露出  arguments 对象： arguments.length, arguments[0], arguments[1] 等等，都不会指向箭头函数的 arguments，而是指向了箭头函数所在作用域的一个名为 arguments 的值（如果有的话，否则，就是 undefined。——译者注）。

使用rest参数

```js
const ssss = (...arg) => {
       return Array.prototype.slice.call(arg,0)
    }
    console.log(ssss(1,2,3,45,456)) 
    // 1,2,3,45,456
```