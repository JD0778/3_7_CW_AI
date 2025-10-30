document.getElementById("changeP").innerHTML = "1";
document.getElementById("addButton").innerHTML="add value";

//I am selecting the button and adding an event listener for a mouse click that will
// run a function
document.getElementById("addButton").addEventListener("click", function () {
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    //casting to convert string to number
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin;
});

document.getElementById("MultiplicationButton").addEventListener("click", function () {
    let origin=document.getElementById("changeP").innerHTML;
    let arr=[];
    for(let a=0;a<10;a++){
        arr.push(parseInt(origin)*(a+1));
    }

    document.getElementById("table").innerHTML=arr.join(", ");
})