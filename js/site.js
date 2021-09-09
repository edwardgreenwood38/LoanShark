// get user values
// controller
function getValues() {
    let loanamount = document.getElementById("inputLoanAmount").value;
    let payments = document.getElementById("inputPayments").value;
    let rate = document.getElementById("inputRate").value;

    // convert to int
    loanamount = parseInt(loanamount);
    payments = parseInt(payments);
    rate = parseInt(rate);

    // validate is integer
    if (Number.isInteger(loanamount) && Number.isInteger(payments) && Number.isInteger(rate)) {
        // call calculate payment
        let calc = calculatePayments(loanamount, payments, rate);
    }
}


// calculate payments
// logic
function calculatePayments(la, p, r) {
    let calc = {};

    calc.totalMonthlyPayment = la * (r/1200) / (1 - (1 + r/1200)**p);
    //calc.totalInterest = 
}


// display payments and amortization table
// view

