// Question 81:Itrating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values
// Shows detail about an object
function showObjectProperties(obj:any){
    for (let property in obj){
        
        console.log(`${property}:${obj[property]}`);
    }
}

showObjectProperties({make:"toyota", model:"Corolla",year:"2021",color:"blue"});
