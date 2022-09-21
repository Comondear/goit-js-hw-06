// const refs = document.querySelector('#validation-input');

// const lengthReg = refs.getAttribute('data-length');

// refs.addEventListener = ('blur', onInputBlur);

// function onInputBlur(event) {
//     if (event.currentTarget.value.length === Number(lengthReg)) {
//         event.currentTarget.classList.add('valid');
//         event.currentTarget.classList.remove('invalid');
//     } else {
//         event.currentTarget.classlist.add('invalid');
//         event.currentTarget.classList.remove('valid');
//         }
// }
    
const inputRef = document.querySelector('#validation-input');



const onInputBlur = (event) => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);
  if (requiredLength === value.length) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
}

inputRef.addEventListener('blur', onInputBlur);