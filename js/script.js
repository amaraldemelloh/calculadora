const numbersDiv = document.querySelector('#numbers');
const res = document.querySelector('#res');
let question = "";
let open = 0
let closed = 0

for (let i = 0; i < 10; i++) {
    let number = document.createElement('button');
    number.innerText = i;
    number.onclick = function () {
        res.innerText += i;
        question += i;
    };
    numbersDiv.appendChild(number);
};

function calc() {
    verifyParen();
    if (open == closed) {
        res.innerText = eval(question);
    } else {
        return alert("Você precisa fechar parênteses.");
    };
};

function verifyParen() {
    open = 0;
    closed = 0;
    for (let i = 0; i < question.length; i++) {
        if (question[i] == "(") {
            open++
        };
        if (question[i] == ")") {
            closed++
        };
      }
};

function parentheses() {
    verifyParen();
    if (open > closed) {
        res.innerText += ")";
        question += ")";
    } else if (open < closed) {
        res.innerText += "(";
        question += "(";
    } else {
        res.innerText += "(";
        question += "(";
    }
};