// var ddd = (n) => {
//             if (n == 1) return 1;
//             if (n == 0) return 0;
//             return ddd(n - 1) + ddd(n - 2)
//         };
// let a=1,
//     f1=()=> a=ddd(42);
//     f2=()=> console.log(a);
//     const f3 = (fn,delay) => {
//         setTimeout(function(){
//             a=ddd(43);
//             fn()
//         },delay)
//     }
//     f3(f2,300)
//     f3(f2,100)
//     setTimeout(f2,200);
//     f2()



    // const ssss = (...arg) => {
    //    return Array.prototype.slice.call(arg,0)
    // }
    // console.log(ssss(1,2,3,45,456)) 
    // // //TypeError: arguments.slice is not a function
    
    //    function ssss() {
    //         return Array.prototype.slice.call(arguments, 0)
    //     }
    //     console.log(ssss(1, 2, 3, 45, 456))



// typeof  instanceof 操作符测试

// let arr=[],obj={};

// console.log(typeof arr,typeof shadowCopy,typeof obj,arr instanceof Array);


/**
 * 
 */





/**
 * 浅复制测试
 */


let arr=[1,2,3,4];
function test (name) {
    this.name=name;
    this.family={
        father:'papa',
        mother:'mama'
    }
}
test.prototype.age=19;
let obj= new test('ss');
// obj.__proto__.age='proto';
// console.log(obj.__proto__);
for (key in obj){
    console.log(obj[key]);
}




const shallowCopy = (source) => {
    let temp;
    if(!source || typeof souce !== 'object'){
        return
    };
    source instanceof Array?temp=[]:temp={};
    for(key in source){
        if(souce.hasOwnProperty(key)){
            temp[key]=souce[key]
        }
    }
    return temp
}

let objCopy=shallowCopy(obj)
console.log(objCopy,objCopy.age);
//{ name: 'ss', family: { father: 'papa', mother: 'mama' } } undefined
objCopy.name='c';
objCopy.family.father='baba';
console.log(obj);
//test { name: 'ss', family: { father: 'baba', mother: 'mama' } }

/**
 * 
 */

/**
 * 深复制测试
 */


function test (name) {
    this.name=name;
    this.family={
        father:'papa',
        mother:'mama'
    }
}
test.prototype.age=19;



const deepCopy = (source) => {
    let temp;
    if(!source || typeof source !== 'object'){
        return
    };
    source instanceof Array?temp=[]:temp={};
    for(key in source){
        if(source.hasOwnProperty(key)){
            if(typeof source[key]==='object'){
                temp[key]=deepCopy(source[key])
            }else{
                temp[key]=source[key]
            }
        }
    }
    return temp
}
let obj=new test('sss'),arr=[
    1,2,3,[
        7,8,9
    ]
]
objCopy=deepCopy(obj)
console.log(objCopy);
//{ name: 'sss', family: { father: 'papa', mother: 'mama' } }
objCopy.name='ddd';
objCopy.family.father='baba'
console.log(obj);
//test { name: 'sss', family: { father: 'papa', mother: 'mama' } }


/**
 *  
 */
 const obj={
     a:1
 },obj1={
     obj:obj
 },obj2=Object.create(obj1);
 obj1.a=3;
 obj2.obj.a=2
 console.log(obj1);
 /**1. 如果在 [[Prototype]] 链上层存在名为 foo 的普通数据访问属性并且没 有被标记为只读（writable:false） ，那就会直接在 myObject 中添加一个名为 foo 的新 属性，它是屏蔽属性。 
  * 
  
  2. 如果在 [[Prototype]] 链上层存在 foo，但是它被标记为只读（writable:false） ，那么 无法修改已有属性或者在 myObject 上创建屏蔽属性。如果运行在严格模式下，代码会 抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。 
  * 3. 如果在 [[Prototype]] 链上层存在 foo 并且它是一个 setter（参见第 3 章） ，那就一定会 调用这个 setter。foo 不会被添加到（或者说屏蔽于）myObject，也不会重新定义 foo 这 个 setter。 
  * 
  */


/**
 * 
 */


  const obj={
      set a (val){
        this._a_=val
      },
      get a(){
          return this._b_
      },
      set b(val){
          this._b_=val
      }
  }
  obj.a=1;
  obj.b=2
  console.log(obj.a);


/**
 * 
 */

const obj={
    log:()=>console.log('obj')
},obj1={
    log:()=>{
        obj.log.call(this)
    }
}

/**
 * 
 */

// es6  箭头函数 argument对象缺失  使用剩余参数

const test =(...args)=>{
    console.log(args[0],args[1]);
}
 
 test('sd','er')

 function test1(){
     console.log( arguments[0],arguments[1])
 }
  test1('sd','er')