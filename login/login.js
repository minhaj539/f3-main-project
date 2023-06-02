const loginBtn = document.getElementById("login-btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
let usersList,currUser;

if(localStorage.getItem("user")!=null){
  
  // document.getElementById("error-msg").innerHTML =
  //   "Already logged in !!";
    document.body.innerHTML=``;
    let errorMsg=document.createElement("div")
    errorMsg.innerText= "Already logged in !!";
    errorMsg.id="error-msg"
    document.body.append(errorMsg);
   setTimeout(()=>{ const link=document.createElement("a");
   link.href="./shop.html"
   document.body.appendChild(link)
   link.click();
   document.body.removeChild(link)},2000)
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  usersList = JSON.parse(localStorage.getItem("usersList"));
  if (usersList == null) {
    document.getElementById("error-msg").innerHTML =
      "No user found !!";
      return;
  } else {
    for(let i=0;i<usersList.length;i++){
        let user=usersList[i];
        if(user.email==email.value&&user.password==password.value){
          localStorage.setItem("user",JSON.stringify(user));
            const link=document.createElement("a");
    link.href="./shop.html"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
    return;
        }
    }
    document.getElementById("error-msg").innerHTML =
      "invalid email or password !!";
  
  }

  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (email.value == null || password.value == null) {
    document.getElementById("error-msg").innerHTML =
      "please provide email and password !!";
  }
  if (email.value != user.email || password.value != user.password) {
    document.getElementById("error-msg").innerHTML =
      "incorrect email or password !!";
  }
});
