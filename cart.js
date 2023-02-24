
// var incri = document.getElementById('inc');
// var decri = document.getElementById('dic');
// var data = document.getElementById('data');
// console.log(incri.value);



function incriment(data,totalCost,totalSum,total){

var incri = document.getElementById('inc');
 var data = document.getElementById(data);
 var totalCost = document.getElementById(totalCost);
var totalSum = document.getElementById(totalSum);
var total = document.getElementById(total);
if (data.value >= 5) {
	alert("quantity is full")
data.style="background:red";
}else{
 data.value = parseInt(data.value) + 1;
totalCost.innerHTML = parseInt(totalCost.innerHTML)+15
totalSum.innerHTML = parseInt(totalSum.innerHTML)+15;
total.innerHTML = totalSum.innerHTML-5;
}
}





function decriment(data,totalCost,totalSum,total){
var decri = document.getElementById('dic');
 var data = document.getElementById(data);
var totalCost = document.getElementById(totalCost);
var total = document.getElementById(total);
var totalSum = document.getElementById(totalSum);
if (data.value <= 0) {
	alert("mines quantity is not exepted");
	

}else{
	data.value = parseInt(data.value) -1
   data.style="background:white";
totalCost.innerHTML = parseInt(totalCost.innerHTML)-15;
totalSum.innerHTML = parseInt(totalSum.innerHTML)-15;
total.innerHTML = totalSum.innerHTML-5;

}

};
 
//discount [toggle ke pass ]
 function dataNumber(){
var dataInput = document.getElementById('dataInput');

var number = document.getElementById('number'); 
var btn = document.getElementById('btn');

	number.style="background:red;color:white;border-radius:50%;width:100px;height:100px;display:grid;place-items:center;font-size:40px;"
btn.innerText = "click";
var random = document.getElementById('random');

random.style = "background:red;color:white;border-radius:50%;width:100px;height:100px;display:grid;place-items:center;font-size:40px;"
var result =document.getElementById("result");
if (dataInput.value >= 4 || dataInput.value <=  0) {

	alert("please write 0 to 3 only");
}else{

 number.innerHTML = dataInput.value;
  random.innerHTML =Math.floor(Math.random()*4);
dataInput.value = "";
};

if(number.innerHTML == random.innerHTML){

result.innerHTML = "Hurry ! you win 25% discount"

}else{
	result.innerHTML = "Sorry you loss chance try agin next time"
}

}
