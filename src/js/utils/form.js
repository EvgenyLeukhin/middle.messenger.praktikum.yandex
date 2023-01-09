'use strict';

export function handleForm(formId) {
  // find form
  const formTag = document.getElementById(formId);

  // stop code if no form
  if (!formTag) {
    return;
  }

  // form inputs
  const formInputs = Array.from(formTag.getElementsByTagName('input'));

  // form validation paragraphs
  const validation = Array.from(formTag.querySelectorAll('.form-group__validation'));

  // add validation to all paragraphs
  function addValidationText(text) {
    validation.forEach(validationTag => {
      validationTag.textContent = text;
    });
  }

  // add input error
  function addInputError() {
    formInputs.forEach(input => {
      input.classList.add('hasError');
    });
  }

  // remove input error
  function removeInputError() {
    formInputs.forEach(input => {
      input.classList.remove('hasError');
    });
  }

  // handle inputs
  formInputs.forEach(input => {
    // check for already hasValue
    if (input.value) input.classList.add('hasValue');

    // change listener for inputs (add class hasValue)
    input.addEventListener('change', (e) => {

      // remove hasError class
      e.target.classList.remove('hasError');

      // remove validation error text
      const formGroups = formTag.querySelectorAll('.form-group');
      formGroups.forEach(formGroup => {
        if (formGroup.contains(e.target))
          formGroup.getElementsByTagName('p')[0].textContent = '';
      })

      if (input.value) {
        input.classList.add('hasValue');
      } else {
        input.classList.remove('hasValue');
      }
    })
  })

  // submit listener
  formTag.addEventListener('submit', (e) => {
    e.preventDefault();
    formTag.classList.add('sending');

    // reset validation error
    addValidationText('');
    removeInputError();

    // fake request
    setTimeout(() => {
      formTag.classList.remove('sending');

      // show values in console
      formInputs.forEach(input => console.log(`${input.name}: ${input.value}`));


      // add validation error
      addInputError();
      addValidationText('Some error');
    }, 2000);
  });
}
