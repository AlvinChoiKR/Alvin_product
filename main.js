const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.querySelector('.numbers-container');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);

        if (number <= 10) {
            numberEl.style.backgroundColor = '#f44336';
            numberEl.style.color = 'white';
        } else if (number <= 20) {
            numberEl.style.backgroundColor = '#FF9800';
            numberEl.style.color = 'white';
        } else if (number <= 30) {
            numberEl.style.backgroundColor = '#FFEB3B';
        } else if (number <= 40) {
            numberEl.style.backgroundColor = '#4CAF50';
            numberEl.style.color = 'white';
        } else {
            numberEl.style.backgroundColor = '#2196F3';
            numberEl.style.color = 'white';
        }
    }
});