const btnAcordion = document.querySelectorAll('.btn-question');
const icons = document.getElementsByTagName('i');
const answers = document.querySelectorAll('.answer');

btnAcordion.forEach(function (item, index) {
    item.addEventListener('click', () => {
        const actualAnswerVisible = document.querySelector('.visible');

        if (actualAnswerVisible) {
            actualAnswerVisible.classList.remove('visible');
        }

        for (let i = 0; i < btnAcordion.length; i++) {
            if (i !== index) {
                icons[i].classList.add('close-answer');
                icons[i].classList.remove('open-answer');
            }
        }

        answers[index].classList.add('visible');
        icons[index].classList.add('open-answer');
        icons[index].classList.remove('close-answer');
    });
});