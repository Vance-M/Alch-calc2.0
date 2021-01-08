


const Input1 = document.getElementById('input1');
const Input2 = document.getElementById('input2');
const result = document.getElementById('result1');






export function addHandler() {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));

    const finalResult = number1 + number2;

    result.textContent = finalResult;
}


export function subHandler() {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));

    const finalResult = number1 - number2;

    result.textContent = finalResult;
}



export function multHandler() {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));

    const finalResult = number1 * number2;

    result.textContent = finalResult;
}



export function divHandler() {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));

    const finalResult = number1 / number2;

    result.textContent = finalResult;
}



export function expHandler() {
    const number1 = (Number(Input1.value));
    const number2 = (Number(Input2.value));

    const finalResult = number1 ** number2;

    result.textContent = finalResult;
}






