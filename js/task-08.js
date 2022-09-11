const form = document.querySelector('.login-form');

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;


    if (email.value === '' || password.value === '') {
        return console.log("Please fill in all the fields!")
    }

    const obj = {Email: email.value, Password: password.value}

    console.log(obj);
    form.reset();

}
