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