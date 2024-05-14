function calculate() {
    const b_day = document.getElementById('input-day').value;
    const b_month = document.getElementById('input-month').value;
    const b_year = document.getElementById('input-year').value;

    let birthday = new Date(b_year, b_month - 1, b_day); // javascript months start at zero

    let today = new Date();

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    let diffDays = Math.round((Math.abs(today - birthday) / oneDay));
    // alert(diffDays);

    let howManyYears = Math.floor(diffDays / 365);
    let howManyMonths = Math.floor((diffDays - (howManyYears * 365)) / 30);
    let remainingDays = diffDays - (365 * howManyYears) - (30 * howManyMonths);

    document.getElementById('result-years').innerHTML = howManyYears;
    document.getElementById('result-months').innerHTML = howManyMonths;
    document.getElementById('result-days').innerHTML = remainingDays;

    // alert(`${howManyYears} years - ${howManyMonths} months - ${remainingDays} days`);
}
