const userInput = window.prompt('What is your age & name ?');

console.log(userInput);

const userOutputEl = document.getElementById('output');

console.log(userOutputEl);

userOutputEl.innerHTML = `<h1>Hello, ${userInput}! Your favorite number is }</h1>`;











