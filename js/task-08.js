const formEl = document.querySelector('.login-form');
console.dir(formEl);
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Будь ласка, заповніть усі поля!');
  } else {
    const dataForm = {
      password: password.value.trim(),
      email: email.value.trim(),
    };
    console.log(dataForm);
    evt.currentTarget.reset();
  }
}
