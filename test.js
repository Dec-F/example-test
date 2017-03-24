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


let arr = [1, 2, 3, 4];
function test(name) {
    this.name = name;
    this.family = {
        father: 'papa',
        mother: 'mama'
    }
}
test.prototype.age = 19;
let obj = new test('ss');
// obj.__proto__.age='proto';
// console.log(obj.__proto__);
for (key in obj) {
    console.log(obj[key]);
}




const shallowCopy = (source) => {
    let temp;
    if (!source || typeof souce !== 'object') {
        return
    };
    source instanceof Array ? temp = [] : temp = {};
    for (key in source) {
        if (souce.hasOwnProperty(key)) {
            temp[key] = souce[key]
        }
    }
    return temp
}

let objCopy = shallowCopy(obj)
console.log(objCopy, objCopy.age);
//{ name: 'ss', family: { father: 'papa', mother: 'mama' } } undefined
objCopy.name = 'c';
objCopy.family.father = 'baba';
console.log(obj);
//test { name: 'ss', family: { father: 'baba', mother: 'mama' } }

/**
 * 
 */

/**
 * 深复制测试
 */


function test(name) {
    this.name = name;
    this.family = {
        father: 'papa',
        mother: 'mama'
    }
}
test.prototype.age = 19;



const deepCopy = (source) => {
    let temp;
    if (!source || typeof source !== 'object') {
        return
    };
    source instanceof Array ? temp = [] : temp = {};
    for (key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object') {
                temp[key] = deepCopy(source[key])
            } else {
                temp[key] = source[key]
            }
        }
    }
    return temp
}
let obj = new test('sss'), arr = [
    1, 2, 3, [
        7, 8, 9
    ]
]
objCopy = deepCopy(obj)
console.log(objCopy);
//{ name: 'sss', family: { father: 'papa', mother: 'mama' } }
objCopy.name = 'ddd';
objCopy.family.father = 'baba'
console.log(obj);
//test { name: 'sss', family: { father: 'papa', mother: 'mama' } }


/**
 *  
 */
const obj = {
    a: 1
}, obj1 = {
    obj: obj
}, obj2 = Object.create(obj1);
obj1.a = 3;
obj2.obj.a = 2
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


const obj = {
    set a(val) {
        this._a_ = val
    },
    get a() {
        return this._b_
    },
    set b(val) {
        this._b_ = val
    }
}
obj.a = 1;
obj.b = 2
console.log(obj.a);


/**
 * 
 */

const obj = {
    log: () => console.log('obj')
}, obj1 = {
    log: () => {
        obj.log.call(this)
    }
}

/**
 * 
 */

// es6  箭头函数 argument对象缺失  使用剩余参数

const test = (...args) => {
    console.log(args[0], args[1]);
}

test('sd', 'er')

function test1() {
    console.log(arguments[0], arguments[1])
}
test1('sd', 'er')


//+ 的强制类型转换
let d = 'sd', s = + d;
console.log(typeof s)


let a = 'hello', b = '中文测试', c = '!@#$%^&*(()';
// console.log( Array.prototype.reverse.call(a))
console.log(a.split('').reverse().join(''));
console.log(b.split('').reverse().join(''));
console.log(c.split('').reverse().join(''));


//?你不知道的Js 15页的提示：上述方法对于包含复杂字符（Unicode，如星号、多字节字符等）的 字符串并不适用
//好像可以用啊？？？


/**
 * 
 */

var person = function (name) {
    this.name = name
};

person.prototype.getName = function () {
    return this.name;
}

var zzz = new person('zzz');
console.log(zzz.getName());

console.log(zzz.__proto__ == person.prototype);// true
console.log(person.__proto__ == Function.prototype);// true
console.log(person.prototype.__proto__ == Object.prototype);// true
console.log(Object.__proto__ == Function.prototype);// true
console.log(Object.__proto__);// function 
console.log(Object.prototype.__proto__);// null 
console.log(Function.__proto__);// function 
console.log(Function.prototype.__proto__) //object

/**
 * 
 */

let a = null, b = undefined, c = false, d = 7889, e = { a: 12 }, f = [1, 2, 3], g = a => a,
    h = function () {
        let a = 1
    };
// console.log(a.toString());//TypeError
// console.log(b.toString());//TypeError
console.log(c.toString());
console.log(d.toString());
console.log(e.toString());
console.log(f.toString());
console.log(g.toString());
console.log(h.toString());



function test ({a,b,c}) {
    console.log(a,c,b);
}
test({
    j:1,
    k:2,
    l:3
}) ///undefined undefined undefined
test({
    a:1,
    b:2,
    c:3
})///1 3 2
///参数必须和解构对象属性重名


/**
 * 
 */
//知乎民工叔  数据共享 讲解  pocket 标签 immu

const regions = [
  {id: 1, name: 'Jiangsu'},
  {id: 2, name: 'Zhejiang'},
  {id: 3, name: 'Yunnan'},
  {id: 11, name: 'Nanjing', parent: 1},
  {id: 12, name: 'Suzhou', parent: 1},
  {id: 21, name: 'Hangzhou', parent: 2},
  {id: 22, name: 'Ningbo', parent: 2},
  {id: 31, name: 'Kunming', parent: 3},
  {id: 32, name: 'Lijiang', parent: 3},
  {id: 111, name: 'Jiangning', parent: 11},
  {id: 112, name: 'Gaochun', parent: 11},
  {id: 321, name: 'Ninglang', parent: 32},
  {id: 322, name: 'Huaping', parent: 32}
]

const getTree = arr => {
  const map = regions.reduce((acc, val) => {
    acc[val.id] = val
    return acc
  }, {})

  const tree = []
  arr.forEach(region => {
    if (region.parent) {
      const parent = map[region.parent]
      if (!parent.children) { 
        parent.children = [region]
      }
      else {
        parent.children.push(region)
      }
    }
    else {
      tree.push(region)
    }
  })

  return { map, tree }
}

let a=getTree(regions)
console.log(JSON.stringify(a,null,3));

///
/**
 * promise初学
 */

function add(xPromise,yPromise) {  
    // Promise.all([ .. ])接受一个promise数组并返回一个新的promise， // 这个新promise等待数组中的所有promise完成 
    return Promise.all( [xPromise, yPromise] )  
    // 这个promise决议之后，我们取得收到的X和Y值并加在一起 
    .then( function(values){  
        // values是来自于之前决议的promisei的消息数组 
        return values[0] + values[1];  } );  
    }  
    // fetchX()和fetchY()返回相应值的promise，可能已经就绪， 
    // 也可能以后就绪   
    add( fetchX(), fetchY() )  
    // 我们得到一个这两个数组的和的promise 
    // 现在链式调用 then(..)来等待返回promise的决议 
    .then( function(sum){  console.log( sum ); // 这更简单！ 
    } ); 

/**
 * 
 */



let an={
    a:1,
    b:function () {
        console.log(1);
    }
},bn=Object.create(an),cn=Object.create(bn);
console.log(an,bn);
bn.c=2;
cn.d=3;
Object.defineProperty(cn,'e',{
    value:10,
    writable:true,
    enumerable:false,
    configurable:true
})
for (var key in cn) {
   
    console.log(key);
}
console.log(Object.keys(cn));
console.log(Object.getOwnPropertyNames(cn));
//{ a: 1, b: [Function: b] } {}
//d
//c
//a
//b
//[ 'd' ]
//[ 'd', 'e' ]

/**
 * Object.keys返回可枚举属性，一个数组，不含原型继承的
for-in 遍历全部可枚举属性，包括原型继承的
Object.getOwnPropertyNames 返回可枚举和不可枚举属性，一个数组，不含原型继承的
 */