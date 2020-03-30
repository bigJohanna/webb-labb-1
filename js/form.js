

const elForm = document.getElementById('formReg');
const elBoktipstitel = document.getElementById('boktipstitel');
const elBoktipsBeskrivning = document.getElementById('boktipsbeskrivning');
const elOutput = document.getElementById('output');

function skickaTips(event){
    const titel = elBoktipstitel.value;
    const boktipsBeskrivning = elBoktipsBeskrivning.value;

    validateForm();

    console.log('Bokens titel "'  + titel + '" ' + 'Beskrivning "'  + boktipsBeskrivning +'"');

    elOutput.textContent = "Tack för tipset!";

    // Submittar inte formuläret
    event.preventDefault(); //
    elForm.reset();
}

elForm.addEventListener('submit', skickaTips);

function validateForm() {
    if (elBoktipstitel.value === "") {
        alert("Bokens titel måste fyllas i!");
        return false;
    }
}

