// import functions and grab DOM elements
import { addHandler, subHandler, multHandler, divHandler, expHandler } from './math.js';


const buttonAdd = document.getElementById('buttonA');
const buttonSub = document.getElementById('buttonS');
const buttonMult = document.getElementById('buttonM');
const buttonDiv = document.getElementById('buttonD');
const buttonExp = document.getElementById('buttonE');
// initialize state

// set event listeners to update state and DOM

buttonAdd.addEventListener('click', addHandler);

buttonSub.addEventListener('click', subHandler);

buttonMult.addEventListener('click', multHandler);

buttonDiv.addEventListener('click', divHandler);

buttonExp.addEventListener('click', expHandler);