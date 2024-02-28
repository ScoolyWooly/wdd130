//Calculator

let currentNum = 1; // tracks which number in the final eqaution is being edited.
let firstNum = ""; // The buttons are actually the ones that set the number and the operator.
let operator = ""; 
let secondNum = "";
let finalResult; // This is set once the calculation is completed, and this is displayed in the label box.




// When a button is pressed, it sends a signal to add a number to a string
function appendNum(number) { // Adds a string version of the number on and then will later be converted to a number value
    if (currentNum == 1) {
        firstNum += String(number);
        document.getElementById("result").innerHTML = firstNum; //Display
    }
    else {
        secondNum = secondNum + String(number);
        document.getElementById("result").innerHTML = firstNum + " " + operator + " " + secondNum; //Display
    }
    

};

function setOperator(chosenOperator) {
    currentNum = 2; // Switches the number being edited to the next one.
    operator = String(chosenOperator);

    document.getElementById("result").innerHTML = String(firstNum + operator); //Display


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