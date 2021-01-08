// import functions and grab DOM elements
const Input1 = document.getElementById('input1');
const Input2 = document.getElementById('input2');
const button1 = document.getElementById('buttonA');
const button2 = document.getElementById('buttonS');
const button3 = document.getElementById('buttonM');
const button4 = document.getElementById('buttonD');
const button5 = document.getElementById('buttonE');
const result = document.getElementById('result1');
// initialize state

// set event listeners to update state and DOM

button1.addEventListener('click', () => {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));
    const finalResult = "=" + number1 + number2;

    result.textContent=finalResult
});

button2.addEventListener('click', () => {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));
    const finalResult = number1 - number2;

    result.textContent=finalResult
});

button3.addEventListener('click', () => {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));
    const finalResult = number1 * number2;

    result.textContent=finalResult
});

button4.addEventListener('click', () => {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));
    const finalResult = "=" + number1 / number2;

    result.textContent=finalResult
});

button5.addEventListener('click', () => {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));
    const finalResult = "=" + number1 ** number2;

    result.textContent=finalResult
});