function delay (string,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            
            console.log(string,new Date()-start);
            resolve(string)
        },delay)
    })
}
var start=new Date()
delay(1,1000).then((d)=>{
    return delay(d+1,1000)
}).then((d)=>{
    return delay(d+1,1000)
})

