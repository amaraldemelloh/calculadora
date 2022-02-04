const numbersDiv = document.querySelector('#numbers');
const res = document.querySelector('#res');

for (let i = 0; i < 10; i++) {
    let number = document.createElement('button');
    number.className = 'numbersBtn';
    number.innerText = i;
    number.onclick = function () {
        res.innerText += i;
    };
    numbersDiv.appendChild(number);
};

function calc() {
    res.innerText = eval(res.innerText);
};