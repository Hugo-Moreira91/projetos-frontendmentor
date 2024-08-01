const form = document.getElementById('form-contact');
const inputsText = document.querySelectorAll('input[type="text"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputsRadio = document.querySelectorAll('input[type="radio"]');
const inputTextArea = document.querySelector('textarea');
const inputCheckbox = document.querySelector('input[type="checkbox"]');

const requireMessage = document.querySelectorAll('.require-msg');
const requireMessageTxtArea = document.querySelector('.require-msg-textarea');
const validMessage = document.querySelector('.valid-msg');
const queryMessage = document.querySelector('.query-msg');
const consentMessage = document.querySelector('.consent-msg');
const successMessage = document.querySelector('.success-send');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (event)=>{
    let validForm = false;

    inputsText.forEach(function(input, index){
        if(input.value === ""){
            requireMessage[index].classList.add('visible');
            input.classList.add('error');
            validForm = false;
        }else{
            requireMessage[index].classList.remove('visible');
            input.classList.remove('error');
            validForm = true;
        }
    });

    if(inputEmail.value === ""){
        requireMessage[2].classList.add('visible');
        inputEmail.classList.add('error');
        validForm = false;
    }else if(!emailRegex.test(inputEmail.value)){
        validMessage.classList.add('visible');
        inputEmail.classList.add('error');
        validForm = false;
    }else{
        requireMessage[2].classList.remove('visible');
        validMessage.classList.remove('visible');
        inputEmail.classList.remove('error');
        validForm = true;
    }

    inputsRadio.forEach(radioButton =>{
        if(radioButton.checked){
            queryMessage.classList.remove('visible');
            validForm = true;
        }else{
            queryMessage.classList.add('visible');
            validForm = false;
        }
    });

    if(inputTextArea.value === ""){
        requireMessageTxtArea.classList.add('visible');
        inputTextArea.classList.add('error');
        validForm = false;
    }else{
        requireMessageTxtArea.classList.remove('visible');
        inputTextArea.classList.remove('error');
        validForm = true;
    }

    if(inputCheckbox.checked){
        consentMessage.classList.remove('visible');
        validForm = true;
    }else{
        consentMessage.classList.add('visible');
        validForm = false;
    }

    if(!validForm){
        event.preventDefault();
    }else{
        successMessage.classList.add('visible');
        setTimeout(() => {
            successMessage.classList.remove('visible');
        }, 5000);
        event.preventDefault();
    }
});