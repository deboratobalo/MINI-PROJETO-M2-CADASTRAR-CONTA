let nickname = document.querySelector("#nickname");
let labelNickname = document.querySelector("#labelNickname");
let validNickname = false;


let user = document.querySelector("#user");
let labelUser = document.querySelector("#labelUser");
let validUser = false;


let password = document.querySelector("#password");
let labelPassword = document.querySelector("#labelPassword");
let validPassword = false;



let confirmPassword = document.querySelector("#confirmPassword");
let labelConfirmpassword = document.querySelector("#labelConfirmPassword");
let validConfirmpassword = false;

let error = document.querySelector("#error");
let success = document.querySelector("#success");




nickname.addEventListener("keyup", () => {
  if (nickname.value.length <= 2) {
    labelNickname.setAttribute("style", "color: red");
    validNickname = false;
    labelNickname.innerHTML = "<strong>Nickname *Insert at least three characters</strong>";
  } else {
    labelNickname.setAttribute("style", "color: green");
    validNickname = true;
    labelNickname.innerHTML = "Nickname";
  }
});

user.addEventListener("keyup", () => {
  if (user.value.length <= 4) {
    labelUser.setAttribute("style", "color: red");
    validUser = false;
    labelUser.innerHTML = "<strong>User *Insert at least four characters</strong>";
  } else {
    labelUser.setAttribute("style", "color: green");
    validUser = true;
    labelUser.innerHTML = "User";
  }
});

password.addEventListener("keyup", () => {
  if (password.value.length <= 6) {
    labelPassword.setAttribute("style", "color: red");
    validPassword = false;
    labelPassword.innerHTML = "<strong>Password *Insert at least six characters</strong>";
  } else {
    labelPassword.setAttribute("style", "color: green");
    validPassword = true;
    labelPassword.innerHTML = "Password";
  }
});

confirmPassword.addEventListener("keyup", () => {
  if (password.value != confirmPassword.value) {
    labelConfirmPassword.setAttribute("style", "color: red");
    validConfirmpassword = false;
    labelConfirmPassword.innerHTML = "<strong>Confirm Password *Passwords do not match</strong>";
  } else {
    labelConfirmPassword.setAttribute("style", "color: green");
    validConfirmpassword = true;
    labelConfirmPassword.innerHTML = "Confirm Password";
  }
});

function createAccount() {
  let userList = [];

  if (validNickname && validUser && validPassword && validConfirmpassword) {
    userList.push();

    localStorage.setItem("userList", JSON.stringify({
      nicknameCad: nickname.value,
      userCad: user.value,
      passwordCad: password.value
    }));

    success.setAttribute("style", "display: block");
    success.innerHTML = "<strong>All fields have been filled in correctly</strong>";
    error.setAttribute("style", "display: none");
    error.innerHTML = "";
  } else {
    error.setAttribute("style", "display: block");
    error.innerHTML = "<strong>Fill in the empty fields</strong>";
    success.setAttribute("style", "display: none");
    success.innerHTML = "";
  }
}


function login(){
  let users = localStorage.getItem("userList")
  console.log(users);
}
login()

function fetchSavedData() {
 
  let userList = localStorage.getItem("userList");

  let fetchRequest = new Request("http://localhost:8080/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  fetch(fetchRequest).then(response => {
    
    if (response.status === 200) {

      return response.json();
    } else {

      throw new Error("Failed to fetch data");
    }
  });
}
