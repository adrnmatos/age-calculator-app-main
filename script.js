// html label elements
const dayLabel = document.getElementById('day-label-elem');
const monthLabel = document.getElementById('month-label-elem');
const yearLabel = document.getElementById('year-label-elem');

// html input elements
const dayInput = document.getElementById('day-input-elem');
const monthInput = document.getElementById('month-input-elem');
const yearInput = document.getElementById('year-input-elem');

// html output elements
const dayOutput = document.getElementById('result-days');
const monthOutput = document.getElementById('result-months');
const yearOutput = document.getElementById('result-years');


function calculate() {

    // get values
    let day = dayInput.value;
    let month = monthInput.value;
    let year = yearInput.value;

    if (isInputInvalid(day, month, year)) {
        clearResults();
        return;
    }

    let today = new Date();

    let howManyYears = today.getFullYear() - year;
    let howManyMonths = today.getMonth() + 1 - month; // getMonth returns 0-11
    if (howManyMonths < 0) {
        howManyYears--;
        howManyMonths += 12;
    }
    let howManyDays = today.getDate() - day;
    if (howManyDays < 0) {
        howManyMonths--;
        howManyDays += 30;
    }

    console.log(`manyYears ${howManyYears} - manyMonths ${howManyMonths} - manyDays ${howManyDays}`);

    // print results
    dayOutput.innerHTML = howManyDays;
    monthOutput.innerHTML = howManyMonths;
    yearOutput.innerHTML = howManyYears;

    clearErrorIndication();
}

function isInputInvalid(day, month, year) {

    return (thereAreEmptyFields(day, month, year) || thereAreInvalidInputValues(day, month, year) || theDateIsInvalid(day, month, year));
}

function thereAreEmptyFields(day, month, year) {

    let areThereEmptyFields = false;

    if (year == "") {
        setErrorIndication(yearInput);
        areThereEmptyFields = true;
    }

    if (month == "") {
        setErrorIndication(monthInput);
        areThereEmptyFields = true;
    }

    if (day == "") {
        setErrorIndication(dayInput);
        areThereEmptyFields = true;
    }

    return areThereEmptyFields;
}

function thereAreInvalidInputValues(day, month, year) {

    let areThereInvalidInputValues = false;

    if (day > 31 || day < 1) {
        setInvalidDayIndicator();
        areThereInvalidInputValues = true;
    }

    if (month > 12 || month < 1) {
        setInvalidMonthIndicator();
        areThereInvalidInputValues = true
    }

    if (year > new Date().getFullYear()) {
        setInvalidFutureYear();
        areThereInvalidInputValues = true;
    }

    return areThereInvalidInputValues;
}

function theDateIsInvalid(day, month, year) {

    let isDateInvalid = false;
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month == 2) {
        if (isYearLeap(year)) {
            monthDays[1] = 29;
        }
    }

    if (day > monthDays[monthInput.value - 1]) {
        setInvalidDate();
        isDateInvalid = true;
    }

    return isDateInvalid;
}

function isYearLeap(year) {

    if (year % 4 == 0) return true;
    else return false;
}

function setErrorIndication(elem) {

    elem.classList.add("input_elem-error_indication");
    elem.previousElementSibling.classList.add("input_label-error_indication");
    elem.nextElementSibling.classList.remove("hidden");
}

function clearResults() {

    dayOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    yearOutput.innerHTML = "--";
}

function clearErrorIndication() {

    dayInput.classList.remove("input_elem-error_indication");
    monthInput.classList.remove("input_elem-error_indication");
    yearInput.classList.remove("input_elem-error_indication");

    dayInput.nextElementSibling.classList.add("hidden");
    monthInput.nextElementSibling.classList.add("hidden");
    yearInput.nextElementSibling.classList.add("hidden");

    dayInput.previousElementSibling.classList.remove("input_label-error_indication");
    monthInput.previousElementSibling.classList.remove("input_label-error_indication");
    yearInput.previousElementSibling.classList.remove("input_label-error_indication");
}


