'use strict';

const authForm = document.getElementById('authorization__form');

// all form inside inputs (convert to array)
const authInputs = Array.from(authForm.getElementsByTagName('input'));
const validation = Array.from(authForm.querySelectorAll('.form-group__validation'));

function addValidation(text) {
  validation.forEach(validationTag => {
    validationTag.textContent = text;
  });
}

function addInputError() {
  authInputs.forEach(input => {
    input.classList.add('hasError');
  });
}

function removeInputError() {
  authInputs.forEach(input => {
    input.classList.remove('hasError');
  });
}


authInputs.forEach(input => {
  // check for already hasValue
  if (input.value) input.classList.add('hasValue');

  // change listener for inputs (add class hasValue)
  input.addEventListener('change', () => {
    removeInputError();

    if (input.value) {
      input.classList.add('hasValue');
    } else {
      input.classList.remove('hasValue');
    }
  })
})

// submit listener
authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  authForm.classList.add('sending');

  // reset validation error
  addValidation('');
  removeInputError();

  // fake request
  setTimeout(() => {
    authForm.classList.remove('sending');

    // show values in console
    authInputs.forEach(input => console.log(`${input.name}: ${input.value}`));


    // add validation error
    addInputError();
    addValidation('Some error');
  }, 2000);
});

// remove listener
if (!authForm) {
  authForm.removeEventListener('submit');
}



