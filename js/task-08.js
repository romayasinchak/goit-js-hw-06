const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, getFormSubmit);

function getFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Будь ласка, заповніть всі поля!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
