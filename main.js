
//declaration of variables
var input_x = document.querySelector("#num_one");
var input_y = document.querySelector('#num_two');
var answer = document.querySelector('#answer');

//function to be performed
var sum = function () {
var total = Number(input_x.value) + Number(input_y.value);
answer.textContent = total; //DOM selector .textContent set equal total
return total; 
};

console.log(sum());


var calculateBtn = document.querySelector("#calculateBtn");


calculateBtn.addEventListener("click", sum);
