//Calculator

let currentNum = 1; // tracks which number in the final eqaution is being edited.
let firstNum = ""; // The buttons are actually the ones that set the number and the operator.
let operator = ""; 
let secondNum = "";
let thirdNum = "0";

let numberString = ""; // The saved equation so far.
let finalResult; // This is set once the calculation is completed, and this is displayed in the label box.




// When a button is pressed, it sends a signal to add a number to a string
function appendNum(number) { // Adds a string version of the number on and then will later be converted to a number value
    if (currentNum == 1) {
        firstNum += String(number);
        document.getElementById("result").innerHTML = firstNum; //Display
        numberString += firstNum;
    }
    else if (currentNum == 2) {
        secondNum = secondNum + String(number);
        document.getElementById("result").innerHTML = firstNum + " " + operator + " " + secondNum; //Display
        numberString += secondNum;

    } else if (currentNum == 3) {
        thirdNum = thirdNum + String(number);
        document.getElementById("result").innerHTML = firstNum + " " + operator + " " + secondNum + " " + operator + " " + thirdNum;
        numberString += thirdNum // I guess i could do this isntead of lines 28 23 and 18. and also maybe the operator as well?
    }
    

};

function setOperator(chosenOperator, number) {
    currentNum += 1; // Switches the number being edited to the next one.
    operator = String(chosenOperator);

    document.getElementById("result").innerHTML = String(number + " " + operator); //Display


};

function calculate() {
    if (operator == "+") {
        finalResult = parseInt(firstNum) + parseInt(secondNum);
    } else if (operator == "-") {
        finalResult = parseInt(firstNum) - parseInt(secondNum);
    } else if (operator == "*") {
        finalResult = parseInt(firstNum) * parseInt(secondNum);
    } else if (operator == "/") {
        finalResult = parseInt(firstNum) / parseInt(secondNum);
    };

    document.getElementById("result").innerHTML = finalResult; //Display
    reset()
};

function reset() {
    currentNum = 1; // tracks which number in the final eqaution is being edited.
    firstNum = ""; // The buttons are actually the ones that set the number and the operator.
    operator = ""; 
    secondNum = "";
    finalResult;
}