function test(){

    setTimeout(()=>{

        console.log("hello")

    } , 2000);
}


function testPromise(){

    var promise = new Promise((resolve , reject)=>{

        resolve("Going to USA")

    } , 3000)
    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })

}