const elForm = document.getElementById('formReg');
const elBoktipstitel = document.getElementById('boktipstitel');
const elBoktipsBeskrivning = document.getElementById('boktipsbeskrivning');
const elOutput = document.getElementById('output');

function skickaTips(event){
    // Använd value när man hämtar från input i formuläret
    const titel = elBoktipstitel.value;
    const boktipsBeskrivning = elBoktipsBeskrivning.value;

    console.log("Textfält i funktion " + titel + boktipsBeskrivning);

    elOutput.textContent = "Tack för tipset!";

    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', skickaTips);

