const refs = document.querySelector('#validation-input');

const lengthReg = refs.getAttribute('data-length');

refs.addEventListener = ('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(lengthReg)) {
        event.currentTarget.classList.add('.valid');
        event.currentTarget.classList.remove('.invalid');
    } else {
        event.currentTarget.classlist.add('.invalid');
        event.currentTarget.classList.remove('.valid');
        }
    }