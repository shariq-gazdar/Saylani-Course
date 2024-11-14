let data = [];
let obj = {
  name: "",
  email: "",
  password: "",
};
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  obj.name = name;
  obj.email = email;
  obj.password = password;
  data.push(obj);
  console.log(obj);
  localStorage.setItem(name, JSON.stringify(data));
  console.log(localStorage.getItem(name));
});
