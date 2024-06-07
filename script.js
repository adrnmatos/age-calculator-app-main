// input elements
const day_element = document.getElementById('input-day');
const month_element = document.getElementById('input-month');
const year_element = document.getElementById('input-year');

// output elements
const output_day_element = document.getElementById('result-days');
const output_month_element = document.getElementById('result-months');
const output_year_element = document.getElementById('result-years')

function calculate() {
    let b_day = day_element.value;
    if (b_day == "") setErrorIndication(day_element);       

    let b_month = month_element.value;
    if (b_month == "") setErrorIndication(month_element);

    let b_year = year_element.value;
    if (b_year == "") setErrorIndication(year_element);

    if (b_day && b_month && b_year != "") {
        let birthday = new Date(b_year, b_month - 1, b_day); // months start at zero
        let today = new Date();

        const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        let diffDays = Math.round((Math.abs(today - birthday) / oneDay));

        // calculate
        let howManyYears = Math.floor(diffDays / 365);
        let howManyMonths = Math.floor((diffDays - (howManyYears * 365)) / 30);
        let remainingDays = diffDays - (365 * howManyYears) - (30 * howManyMonths);

        // update result elements
        output_day_element.innerHTML = remainingDays;
        output_month_element.innerHTML = howManyMonths;
        output_year_element.innerHTML = howManyYears;

        // cleanup error indication if any
        clearErrorIndication(day_element);
        clearErrorIndication(month_element);
        clearErrorIndication(year_element);
    }
}

function setErrorIndication(elem) {
    elem.classList.add("input_element-error_indication");
    elem.nextElementSibling.classList.remove("hidden");
}

function clearErrorIndication(elem) {
    elem.classList.remove("input_element-error_indication");
    elem.nextElementSibling.classList.add("hidden");
}