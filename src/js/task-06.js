const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const validLength = inputEl.dataset.length;
  const enteredLength = inputEl.value.length;

  if (enteredLength === Number(validLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});