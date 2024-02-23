const user = "Jhay";
const pin = 1212;

const headerElements = document.getElementsByTagName("header");
const btn_login = document.getElementById("btn");
const userName = document.getElementById("username");
const password = document.getElementById("user_pin");
const mainContainer = document.getElementById("main");
const user_balance = document.getElementById("accbal");
const previous_deposit = document.getElementById("prevdepo");

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

