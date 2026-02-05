
// update tax
function updateTax(){

const tax = document.getElementById('tax').value;
document.getElementById('tax-label').textContent= tax +"%";
calculate();
}
// update tips
function updateTip(){
const tip =  document.getElementById('tip').value;
document.getElementById('tip-label').textContent = tip + "%";
calculate();
}


// increase people

function increasePeople(){

const peopleInput = document.getElementById('people');

peopleInput.value = parseInt(peopleInput.value) + 1;

calculate();
}


// decrease people

function decreasePeople(){
const peopleInput = document.getElementById('people');
if(parseInt(peopleInput.value)>1){
peopleInput.value = parseInt(peopleInput.value) -1 ;
calculate();
}
}


// reset 

function resetCalculate(){

document.getElementById('bill').value ="";
document.getElementById('tax').value = 8;
document.getElementById('tip').value = 10 ;
document.getElementById('people').value = 2;
document.getElementById('tax-label').textContent = "8%";
document.getElementById('tip-label').textContent = "10%";

calculate();
}


// calculate function


function calculate(){


const bill = parseInt( document.getElementById('bill').value) || 0;
const tax = parseFloat( document.getElementById('tax').value) || 0;
const tip = parseFloat( document.getElementById('tip').value) || 0;
const people = parseFloat( document.getElementById('people').value) || 1;

 
const taxAmount = (bill* tax)/100;

const tipAmount = (bill * tip )/100;

const total = bill + taxAmount + tipAmount;

const perPerson = total/people;

document.getElementById('count').textContent = people;
document.getElementById('taxAmount').textContent = `₹${taxAmount.toFixed(2)}`;
document.getElementById('tipAmount').textContent = `₹${tipAmount.toFixed(2)}`;
document.getElementById('sub-total').textContent = `₹${bill.toFixed(2)}`;
document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
document.getElementById('perPerson').textContent = `₹${perPerson.toFixed(2)}`;



}

calculate();






