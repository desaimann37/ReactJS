
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

function createdata(newdata , callback){

   

    setTimeout(()=>{
        datas.push(newdata);
        callback();
    } , 2000);

}
createdata({name : "Vivek" , Profession : "Software Engineer"} , getDatas)


