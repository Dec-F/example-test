var ddd = (n) => {
            if (n == 1) return 1;
            if (n == 0) return 0;
            return ddd(n - 1) + ddd(n - 2)
        };
let a=1,
    f1=()=> a=ddd(42);
    f2=()=> console.log(a);
    const f3 = (fn,delay) => {
        setTimeout(function(){
            a=ddd(43);
            fn()
        },delay)
    }
    f3(f2,300)
    f3(f2,100)
    setTimeout(f2,200);
    f2()