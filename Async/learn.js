
//Async JS Programming 
//CallBack , Promises,Async & Await
/*
    Source : TechnicalSunejaji(Youtube)
*/

//callBack

const datas = [
    {name : "Ajay" , profession : "Software Engineer"},
    {name : "Vijay" , profession : "Software Engineer"}
]
function getDatas(){

    setTimeout(()=>{
        let output = "";
        datas.forEach((data , index)=>{
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    } , 1000);

}
// getDatas();

function createdata(newdata){

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error = true;
            if(!error){
                resolve();
            }else{
                reject("Kuch toh Gadbad Hai Daya...");
            }
            
        } , 2000);
    })

   
}
createdata({name : "Vivek" , Profession : "Software Engineer"}).then(getDatas).catch(err => console.log(err));


