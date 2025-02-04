"use strict";

function calculatePension() {
    const birthdateInput = document.getElementById("birthdate");
    const resultParagraphElem = document.getElementById("result");
    resultParagraphElem.textContent = "";

    const birthdate = new Date(birthdateInput.value);
    if (isNaN(birthdate)) {
        resultParagraphElem.textContent = "Indtast en gyldig fødselsdato.";
        return;
    }

    let retirementAge = 0;

    if (birthdate < new Date('1955-06-30')) {
        retirementAge = 66;
    } else if (birthdate <= new Date('1962-12-31')) {
        retirementAge = 67;
    } else if (birthdate <= new Date('1966-12-31')) {
        retirementAge = 68;
    } else if (birthdate <= new Date('1970-12-31')) {
        retirementAge = 69;
    } else if (birthdate <= new Date('1974-12-31')) {
        retirementAge = 70;
    } else if (birthdate <= new Date('1978-12-31')) {
        retirementAge = 71;
    } else if (birthdate <= new Date('1982-12-31')) {
        retirementAge = 72;
    } else if (birthdate <= new Date('1987-06-30')) {
        retirementAge = 72.5;
    } else if (birthdate <= new Date('1991-12-31')) {
        retirementAge = 73;
    } else if (birthdate <= new Date('1996-06-30')) {
        retirementAge = 73.5;
    } else if (birthdate <= new Date('1999-06-30')) {
        retirementAge = 74;
    }

    // Beregn alder
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const hasBirthdayPassed = (today.getMonth() > birthdate.getMonth()) ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    // Sammenlign alder med pensionsalder
    if (age >= retirementAge) {
        resultParagraphElem.textContent = `Du har opnået din folkepensionsalder.`;
    } else {
        resultParagraphElem.textContent = `Du kan gå på pension som ${retirementAge}-årig.`;
    }
}
