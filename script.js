const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { username: "hello@world.com" },
  { username: "test@user.com" },
  { username: "email@domain.com" },
];
// const docTitle = document.title;
// window.addEventListener("blur", ()=>{document.title = "come back :("});
// window.addEventListener("focus", ()=>{document.title = docTitle});

const usersNames = (arr) => arr.map(element => element.username);
//console.log(usersNames(usersTable));

let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
  document.getElementById("email").value = "";
  document.getElementById("empty-error-message").hidden = true;
};
let renderEmailTakenError = () => {
  document.getElementById("taken-error-message").hidden = false;
};
let renderEmailEmptyError = () => {
  document.getElementById("empty-error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("taken-error-message").hidden = true;
  document.getElementById("empty-error-message").hidden = true;    
};

let form = document.getElementById("singUpForm");


form.addEventListener("submit", (event) => {    
  event.preventDefault();  
  resetMessage(); 
  let email = document.getElementById("email").value;
  // TODO: Show Correct Status Messages on Signup Form
  // 1. successful signup
  if(!email){
    renderEmailEmptyError();
    console.log(`entered email: ${email}`)
  } else if (usersNames(usersTable).includes(email)){
    renderEmailTakenError(); 
  } else {
usersTable.push({username: email});
  renderSuccess();
  console.log(usersNames(usersTable));
  }
  // 2. empty email
  // 3. taken email
  // 4. repeat email  
});

let toggleNav = () => {
  var nav = document.getElementById("mobile-nav");
  if (nav.className.indexOf("show") === -1) {
    nav.className += " show";
  } else {
    nav.className = nav.className.replace(" show", "");
  }
};
