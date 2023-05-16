let guest_list = ["Andy", "John", "Huw"];

let userName = prompt("What is your name?");

if (guest_list.includes(userName)) {
  console.log("Welcome in");
} else {
  console.log("Sorry not today");
}
