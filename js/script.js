const res = document.querySelector('#res');
const numbersDiv = document.querySelector('#numbers');

for (let i = 0; i < 10; i++) {
    let number = document.createElement('button');
    number.className = 'numbersBtn';
    number.innerText = i;
    numbersDiv.appendChild(number);
};