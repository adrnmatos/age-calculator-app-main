function calculate() {
    const b_day = document.getElementById('day').value;
    const b_month = document.getElementById('month').value;
    const b_year = document.getElementById('year').value;

    let birthday = new Date(b_year, b_month - 1, b_day); // javascript months start from zero

    let today = new Date();

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    let diffDays = Math.round((Math.abs(today - birthday) / oneDay));
    alert(diffDays);

    let howManyYears = Math.floor(diffDays / 365);
    let howManyMonths = Math.floor((diffDays - (howManyYears * 365)) / 30);
    let remainingDays = diffDays - (365 * howManyYears) - (30 * howManyMonths);

    alert(`${howManyYears} years - ${howManyMonths} months - ${remainingDays} days`);
}
