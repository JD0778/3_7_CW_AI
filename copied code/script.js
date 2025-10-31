document.getElementById("changeP").innerHTML="1";
document.getElementById("addButton").innerHTML="add value";

// I am selecting the button and adding an event listener for a mouse click that will
// run a function
document.getElementById("addButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    //casting to convert string to number
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin;
});

document.getElementById("subtractButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    //casting to convert string to number
    origin=parseInt(origin)-1;
    document.getElementById("changeP").innerHTML=origin;
});


document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    let result;
    for(let a=1;a<=10;a++){
        result=origin*a;
        document.getElementById("td"+a).innerHTML=result;
    }

});

document.getElementById("67Button").addEventListener("click",function(){
    document.getElementById("changeP").innerHTML="67";
});

document.getElementById("1000000Button").addEventListener("click",function(){
    document.getElementById("changeP").innerHTML="1000000";
});

let array;
let origin=document.getElementById("changeP").innerHTML;
for(let x=1; x<=10; x++){
    let num=origin*x;
    array.push(num);
};

/*
console.log(array);
// if I want to retreive the array i will start at index 0 and go up till index 9.
// Challenge is how to put it in the tagName
let numxber=array.map(function ab);
console.log(numxber);

function ab(num){
    return num*5;
}
*/

//getElementsByTagName will return an array of elements
for(let index=1;index<array.length;index++){
    document.getElementsByTagName("td")[index].innerHTML=array[index];
}

//conclusion: I would need on for the array and one for the td tags
//therefore this approach will not be the most suitable one
// another thing we can do is, use array.map to fifure out a way 
