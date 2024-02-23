const user = "Jhay";
const pin = 1212;

const headerElements = document.getElementsByTagName("header");
const btn_login = document.getElementById("btn");
const userName = document.getElementById("username");
const password = document.getElementById("user_pin");
const mainContainer = document.getElementById("main");
const user_balance = document.getElementById("accbal");
const previous_deposit = document.getElementById("prevdepo");
const previous_loan = document.getElementById("prevloan");
const loanTenure = document.getElementById("loan_tenure");
const acc__type = document.getElementById("acc_type");
const loanAmount = document.getElementById("loan_amount");
const applyButton = document.getElementById("button")

userName.textContent = "Jhay"
console.log(userName);

function arr(params) {
 
if (userName !== user) {
 console.log(userName.textContent);
} else {
 console.log("Wrong !!!");
}
}

arr()



// btn_login.addEventListener("click", function () {
//   if (userName.value === user && password.value === pin) {
//     headerElements.style.opacity = 0;
//     mainContainer.style.opacity = 100;
//   }
// });

