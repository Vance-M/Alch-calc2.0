// import functions and grab DOM elements
import {addHandler,subHandler,multHandler,divHandler,expHandler} from './math.js';


const Input1 = document.getElementById('input1');
const Input2 = document.getElementById('input2');
const buttonAdd = document.getElementById('buttonA');
const buttonSub = document.getElementById('buttonS');
const buttonMult = document.getElementById('buttonM');
const buttonDiv = document.getElementById('buttonD');
const buttonExp = document.getElementById('buttonE');
const result = document.getElementById('result1');
// initialize state

// set event listeners to update state and DOM

buttonAdd.addEventListener('click', addHandler);

buttonSub.addEventListener('click', subHandler);

buttonMult.addEventListener('click', multHandler);

buttonDiv.addEventListener('click', divHandler);

buttonExp.addEventListener('click', expHandler);