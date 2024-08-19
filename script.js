// Task 1: Simple Calculator
function setOperator(operator) {
    document.getElementById('operator').value = operator;
}

function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('calculatorResult').textContent = `Result: ${result}`;
}

// Task 2: Array Operations
function calculateSumOfEvens() {
    const arrayInput = document.getElementById('arrayInput').value;
    const numbers = arrayInput.split(',').map(num => parseFloat(num.trim()));
    const sum = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);

    document.getElementById('arrayResult').textContent = `Sum of even numbers: ${sum}`;
}

// Task 3: Object Manipulation
let person = null;

function createPerson() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value, 10);

    person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        incrementAge: function() {
            this.age++;
        }
    };

    document.getElementById('personResult').textContent = `Person created: ${person.getFullName()}, Age: ${person.age}`;
}

function incrementAge() {
    if (person) {
        person.incrementAge();
        document.getElementById('personResult').textContent = `Age incremented: ${person.getFullName()}, Age: ${person.age}`;
    } else {
        document.getElementById('personResult').textContent = 'Create a person first.';
    }
}
