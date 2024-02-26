const headElements = document.getElementById("header");
const btn_login = document.getElementById("btn");
const userName = document.getElementById("username");
const password = document.getElementById("user_pin");
const wrongLoginDetails = document.getElementById("wronglogin");
const mainContainer = document.getElementById("main");
const previous_deposit = document.getElementById("prevdepo");
const previous_loan = document.getElementById("prevloan");
const loanTenure = document.getElementById("loan_tenure");
const acc__type = document.getElementById("acc_type");
const loanAmount = document.getElementById("loan_amount");
const applyButton = document.getElementById("button");
const approvedLoan = document.getElementById("successful");
const unApproved = document.getElementById("unsuccessful");

const user = "Jhay";
const pin = 1212;
const monthlyIncome = 20000;
const accountType = "current";
let date = new Date(2024, 1, 21, 11, 40, 50);
let points = 30;
let requiredLoanAmount = 0;
let allDetailsFilled = false;

const percentOfIncome = (Income) => {
  let amt = Income * 12;
  return amt * 0.45;
};

const totalIncome = percentOfIncome(monthlyIncome);

function handlePrevDate() {
  previous_deposit.value === ""
    ? (allDetailsFilled = false)
    : (allDetailsFilled = true);

  const prevDate = new Date(previous_deposit.value);

  const monthDiff =
    (date.getFullYear() - prevDate.getFullYear()) * 12 +
    (date.getMonth() - prevDate.getMonth());

  if (monthDiff < 1) points += 5;
}

function handlePrevLoan() {
  handlePrevDate();

  previous_loan.value === ""
    ? (allDetailsFilled = false)
    : (allDetailsFilled = true);

  const previousLoanDate = new Date(previous_loan.value);

  const monthDiff2 =
    (date.getFullYear() - previousLoanDate.getFullYear()) * 12 +
    (date.getMonth() - previousLoanDate.getMonth());

  if (monthDiff2 > 6) points += 10;
}

function handlePaymentDate() {
  handlePrevLoan();

  loanTenure.value === ""
    ? (allDetailsFilled = false)
    : (allDetailsFilled = true);

  const paymentDate = new Date(loanTenure.value);

  const monthDiff3 =
    (paymentDate.getFullYear() - date.getFullYear()) * 12 +
    (paymentDate.getMonth() - date.getMonth());

  if (monthDiff3 < 6) points += 5;
}

function handleAccountType() {
  handlePaymentDate();

  acc__type.value === ""
    ? (allDetailsFilled = false)
    : (allDetailsFilled = true);

  if (acc__type.value === accountType) {
    points += 10;
  } else {
    points += 5;
  }
}

function handleRequiredLoan() {
  handleAccountType();

  loanAmount.value === ""
    ? (allDetailsFilled = false)
    : (allDetailsFilled = true);

  requiredLoanAmount = parseInt(loanAmount.value);
  if (requiredLoanAmount > totalIncome) {
    points -= 10;
  } else {
    points += 10;
  }
}

function handleLoanFunction() {
  handleRequiredLoan();

  if (allDetailsFilled) {
    if (points >= 30) {
      headElements.style.opacity = 0;
      mainContainer.style.display = "none";
      approvedLoan.style.opacity = 100;
    } else {
      headElements.style.display = "none";
      unApproved.style.opacity = 100;
      mainContainer.style.display = "none";
      approvedLoan.style.opacity = 0;
    }
  }
}

// login;
btn_login.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value === user && parseInt(password.value) === pin) {
    headElements.style.opacity = 0;
    mainContainer.style.opacity = 100;
    approvedLoan.style.opacity = 0;
  } else {
    headElements.style.display = "none";
    unApproved.style.opacity = 0;
    mainContainer.style.display = "none";
    approvedLoan.style.opacity = 0;
    wrongLoginDetails.style.opacity = 100;
  }
});

// application;
applyButton.addEventListener("click", function (e) {
  e.preventDefault();

  handleLoanFunction();
});
