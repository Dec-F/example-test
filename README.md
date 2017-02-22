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
