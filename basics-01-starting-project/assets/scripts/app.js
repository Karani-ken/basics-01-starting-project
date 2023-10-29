let currentResult = 0;

function getUserInput(){
    return parseInt(userInput.value);
}
function createOutPutString(operator, resultBefore, CalcNumber){
    const CalcDescription = `${resultBefore} ${operator} ${CalcNumber}`;
    outputResult(currentResult,CalcDescription);
}

function Add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createOutPutString('+',initialResult,enteredNumber);
}
function Subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createOutPutString('-',initialResult,enteredNumber);
}
function Multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createOutPutString('*',initialResult,enteredNumber);
}
function Divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createOutPutString('/',initialResult,enteredNumber);
}

addBtn.addEventListener('click',Add);
subtractBtn.addEventListener('click',Subtract);
multiplyBtn.addEventListener('click',Multiply);
divideBtn.addEventListener('click',Divide);