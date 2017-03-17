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
---
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
------
```js
let a='hello',b='中文测试',c='!@#$%^&*(()';
// console.log( Array.prototype.reverse.call(a))
console.log(a.split('').reverse().join(''));
console.log(b.split('').reverse().join(''));
console.log(c.split('').reverse().join(''));


//?你不知道的Js 15页的提示：上述方法对于包含复杂字符（Unicode，如星号、多字节字符等）的 字符串并不适用
//好像可以用啊？？？

```

-------

```js
 const obj={
     a:1
 },obj1={
     obj:obj
 },obj2=Object.create(obj1);
 obj1.a=3;
 obj2.obj.a=2
 console.log(obj1);
 ```
1. 如果在 [[Prototype]] 链上层存在名为 foo 的普通数据访问属性并且没 有被标记为只读（writable:false） ，那就会直接在 myObject 中添加一个名为 foo 的新 属性，它是屏蔽属性。 
2. 如果在 [[Prototype]] 链上层存在 foo，但是它被标记为只读（writable:false） ，那么 无法修改已有属性或者在 myObject 上创建屏蔽属性。如果运行在严格模式下，代码会 抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。 
3. 如果在 [[Prototype]] 链上层存在 foo 并且它是一个 setter（参见第 3 章） ，那就一定会 调用这个 setter。foo 不会被添加到（或者说屏蔽于）myObject，也不会重新定义 foo 这 个 setter。

---

```js
let a = null, b = undefined, c = false, d = 7889, e = { a: 12 }, f = [1, 2, 3], g = a => a,
    h = function () {
        let a = 1
    };
// console.log(a.toString());//TypeError
// console.log(b.toString());//TypeError
console.log(c.toString());//false
console.log(d.toString());//7889
console.log(e.toString());//[object Object]
console.log(f.toString());//1,2,3
console.log(g.toString());//a => a
console.log(h.toString());//function () {let a = 1}
```
1. 基本类型toString()后是字面量；
2. 普通对象返回的是内部属性`[[class]]`的值
1. 数组的toString方法经过重新定义，将所有单元字符串化以后再用 "," 连接起来
1. 函数会返回函数体

