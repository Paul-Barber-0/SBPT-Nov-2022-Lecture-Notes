const compResponse = document.querySelector('#computer-response');
const form = document.querySelector('#name-form');
const userInput = document.querySelector('#user-input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  input = userInput.value;
  console.log('google.com' + input);
  // document.location = '/greetings.html?name=' + input;
})

function respond(name) {
  if (name.toLowerCase() === 'darth vader') {
    return "Noooooo! That's impossible!";
  } else {
    if (name.toLowerCase() === 'lex luthor') {
      return "Be gone, you villian!!!";
    } else {
      return `Hello ${pascalCase(name)}, you are a wonderful friend!`;
    }
  }
}

function pascalCase(string) {
  let newString = '';
  for (i in string) {
    if (i == 0 || string[i - 1] === ' ') {
      newString = newString + string[i].toUpperCase();
    } else {
      newString = newString + string[i].toLowerCase();
    }
  }
  return newString;
}