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
    let table = document.getElementById("tableBody");
    document.getElementById("tableSetting").innerHTML = "Multiplication Table"
    let arr=[];
    for(let a=0;a<10;a++){
        arr.push(parseInt(origin)*(a+1));
        const row = table.rows[a];
        const secondCell = row.cells[1];
        secondCell.innerHTML = arr[a];
    }
    document.getElementById("table").innerHTML=arr.join(", ");
})

document.getElementById("BinaryButton").addEventListener("click", function () {
    let origin=document.getElementById("changeP").innerHTML;
    let table = document.getElementById("tableBody");
    document.getElementById("tableSetting").innerHTML = "Binary Table"
    let arr=[];
    for(let a=0;a<10;a++){
        let decimal = parseInt(origin)*(a+1);
        let binary = decimal.toString(2);
        arr.push(binary);
        const row = table.rows[a];
        const secondCell = row.cells[1];
        secondCell.innerHTML = arr[a];
    }
    document.getElementById("table").innerHTML=arr.join(", ");
})