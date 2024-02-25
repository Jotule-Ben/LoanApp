const user = "Jhay";
const pin = 1212;
const monthlyIncome = 20000;
const accountType = "current";
let points;
let date = new Date(2024, 1, 21, 11, 40, 50);
let depoDate = new Date();
depoDate.setMonth(0);
// console.log(depoDate);
// console.log(date);
// date.setFullYear(2023);
// console.log(date);

const headElements = document.getElementById("header");
const btn_login = document.getElementById("btn");
const userName = document.getElementById("username");
const password = parseInt(document.getElementById("user_pin"));
const mainContainer = document.getElementById("main");
const user_balance = document.getElementById("accbal").value;
const previous_deposit = document.getElementById("prevdepo");
const previous_loan = document.getElementById("prevloan");
const loanTenure = document.getElementById("loan_tenure");
const acc__type = document.getElementById("acc_type");
const loanAmount = parseInt(document.getElementById("loan_amount"));
const applyButton = document.getElementById("button");
const approvedLoan = document.getElementById("successful");


console.log(user_balance);

// login;
btn_login.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(userName);

  // console.log("LOGIN");

  // headElements.style.opacity = 0;
  // mainContainer.style.opacity = 100;
  // approvedLoan.style.opacity = 0;
});

// (1.) If currbal is > 45%;

const percentOfIncome = function (Income) {
  //  const percentOfIncome = Income => {
  let amt = Income * 12;
  return amt * 0.45;
};

const percent = percentOfIncome(monthlyIncome);

// console.log(percent);

// if (user_balance > percent) {
//  points +=10;
// }else{
//  points -=10;
// }

// DATES;

// (2.) if sixmonths credit history 10points

// (3.) If last deposit = 1month
// if (previous_deposit === depoDate){
//  points +=5;
// }

// (4.) last loan date >6months
// if (previous_loan > months(6)) {
//  points += 10;
// }

// (5.) payment period < 6months
// if(loanTenure <= months(6)){
//  points +=5;
// }

// (6.) type of account;
// if (acc__type === accountType) {
//  points +=10;
// } else {
//   points += 5;
// }
// console.log(acc__type);

// application;
applyButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(userName);

  // console.log("Approved");

  // headElements.style.opacity = 0;
  // mainContainer.style.display = "none";
  // approvedLoan.style.opacity = 100;
});
