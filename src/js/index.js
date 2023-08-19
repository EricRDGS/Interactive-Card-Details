function collectData() {
    const nameUser = document.getElementById("name");
    const numberUser = document.getElementById("number");
    const expDateMonth = document.getElementById("date-month");
    const expDateYear = document.getElementById("date-year");
    const cvc = document.getElementById("cvc");

    const nameCard = document.getElementById("name-card");
    const numberCard = document.getElementById("number-card");
    const dateCard = document.getElementById("date-card");
    const cvcCard = document.getElementById("cvc-card");

    const addParagraph = document.querySelectorAll("p[class='error']");

    nameCard.innerHTML = nameUser.value || "Jane Appleseed";
    numberCard.innerHTML = numberUser.value || "0000 0000 0000 0000";
    dateCard.innerHTML = (expDateMonth.value || '00') + '/' + (expDateYear.value || '00');
    cvcCard.innerHTML = cvc.value || "000";

    [nameUser, numberUser, expDateMonth, expDateYear, cvc].forEach((input, index) => {
        if (input.value === '') {
            input.classList.add('invalid');
            addParagraph[index].style.display = 'block';
        } else {
            input.classList.remove('invalid');
            addParagraph[index].style.display = 'none';
        }
    });

    const completedForm = document.getElementById('form');
    const infoComplete = document.getElementById('thank-you');
    if (nameUser.value && numberUser.value && expDateMonth.value && expDateYear.value && cvc.value) {
        completedForm.classList.add('to-hide');
        infoComplete.classList.remove('to-hide');
        infoComplete.classList.add('show');
    }

    dataClear();
}

function dataClear() {
    const form = document.getElementById('form');
    form.reset();
}

function backForm() {
    const form = document.getElementById('form');
    const complete = document.getElementById('thank-you');

    form.classList.remove('to-hide');
    form.classList.add('show');
    complete.classList.remove('show');
    complete.classList.add('to-hide');
}
