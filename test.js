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



var arr = [1,2,3,4],
sum = 0;
sum1=0
console.log(arr.map(function(obj){sum += obj}))
console.log(sum);
console.log(arr.forEach(function(ds){sum1 += ds}));
console.log(sum1);