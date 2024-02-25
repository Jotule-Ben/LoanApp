const user = "Jhay";
const pin = 1212;
const monthlyIncome = 20000;
const accountType = "current";
let date = new Date(2024, 1, 21, 11, 40, 50);
let points = 30;

const headElements = document.getElementById("header");
const btn_login = document.getElementById("btn");
const userName = document.getElementById("username");
const password = parseInt(document.getElementById("user_pin"));
const mainContainer = document.getElementById("main");
const user_balance = document.getElementById("accbal");
const previous_deposit = document.getElementById("prevdepo");
const previous_loan = document.getElementById("prevloan");
const loanTenure = document.getElementById("loan_tenure");
const acc__type = document.getElementById("acc_type");
const loanAmount = document.getElementById("loan_amount");
const applyButton = document.getElementById("button");
const approvedLoan = document.getElementById("successful");
const unApproved = document.getElementById("unsuccessful");


////// (1.)
   const percentOfIncome = Income => {
  let amt = Income * 12;
  return amt * 0.45;
};

const totalIncome = percentOfIncome(monthlyIncome);

const requiredLoanAmount =
loanAmount.addEventListener("input", () =>{
  console.log(parseInt(loanAmount.value))
  if(loanAmount.value > totalIncome){
    points +=10;
    console.log("You got it!");
  } else{
    points -=10;
    console.log("You loosed it!");
  }}
);

// console.log(parseInt(requiredLoanAmount)); --eventhandler


// const requiredLoanAmount =
// loanAmount.addEventListener("input", 

//  function (Income) {
//   let amt = Income * 12;
//   return amt * 0.45;
// };

// () =>
//   console.log(parseInt(loanAmount.value))
// );
// console.log(parseInt(requiredLoanAmount)); --eventhandler

/*

const currBalance = user_balance.addEventListener("input", () =>{
  console.log(user_balance.value)
  if((user_balance.value) > (loanAmount.value)){
    points += 10;
    console.log("GREAT");
  }else{
    points -=10;
    console.log("BAD");
  }
}
);

// console.log(currBalance);

*/


///////// (3).
previous_deposit.addEventListener("input", () => {
  const prevDate = new Date(previous_deposit.value);
  console.log("Previous Date:", prevDate);

  const monthDiff =
    (date.getFullYear() - prevDate.getFullYear()) * 12 +
    (date.getMonth() - prevDate.getMonth());
  console.log("Month Difference:", monthDiff);

  if (monthDiff < 1) {
    points += 5;
    console.log("less than 1 month");
  } else {
    console.log("more than 1 month ago");
  }
});

// console.log(points);

/////// (4.)
previous_loan.addEventListener("input", () => {
  const previousLoanDate = new Date(previous_loan.value);
  console.log("Previous Date:", previousLoanDate);

  const monthDiff =
    (date.getFullYear() - previousLoanDate.getFullYear()) * 12 +
    (date.getMonth() - previousLoanDate.getMonth());
  console.log("Month Difference:", monthDiff);

  if (monthDiff > 6) {
    points += 10;
    console.log("more than 6 months ago");
  } else {
    console.log("within 6 months ago");
  }
});

/////// (5.)
loanTenure.addEventListener("input", () => {
  const paymentDate = new Date(loanTenure.value);
  console.log("Previous Date:", paymentDate);

  const monthDiff =
    (paymentDate.getFullYear() - date.getFullYear()) * 12 +
    (paymentDate.getMonth() - date.getMonth());
  console.log("Month Difference:", monthDiff);

  if (monthDiff > 6) {
    // console.log((points += 5));
    console.log("More than 6 months ago");
  } else {
    console.log("Within the last 6 months or in the future");
  }
});


///////// (6.)
acc__type.addEventListener('input', () =>{
if (acc__type.value === accountType) {
 points +=10; 
  console.log("acc__typecurrent");
} else {
  points += 5;
  console.log("acc__typesavings");
}
console.log(acc__type.value);
}
)


// login;
btn_login.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(userName);

  // console.log("LOGIN");

  // headElements.style.opacity = 0;
  // mainContainer.style.opacity = 100;
  // approvedLoan.style.opacity = 0;
});


// application;
applyButton.addEventListener("click", function (e) {
  e.preventDefault();

  if(points >= 30){
      headElements.style.opacity = 0;
      mainContainer.style.display = "none";
      approvedLoan.style.opacity = 100;
  }else{
    headElements.style.display = "none"
      unApproved.style.opacity = 100;
      mainContainer.style.display = "none";
      approvedLoan.style.opacity = 0;
  }

  console.log("Approved");
});
