// Write your script here
let saveInfoBtn=document.getElementById("save-info-btn")
let changePasswordBtn=document.getElementById("change-password-btn")
let logoutBtn=document.getElementById("logout-btn");

let errorMsg=document.getElementById("error-msg");
let errorMsg2=document.getElementById("error-msg-2");
function checkLoggedIn(){
   
    let user=localStorage.getItem("user");
    if(user==null){
        document.body.innerHTML=""
        let div=document.createElement("div");
        div.innerText="PLEASE LOGIN FIRST";
        document.body.appendChild(div);
        setTimeout(()=>{
        const link=document.createElement("a");
    link.href="./login.html"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
    
    return;
        },2000)

        return;
    }
}
checkLoggedIn();


saveInfoBtn.addEventListener("click",()=>{
    errorMsg.style.display="none"
    let firstName=document.querySelectorAll("input")[0].value;
    let lastName=document.querySelectorAll("input")[1].value;
if(firstName==""||lastName==""){
    showErrorMsg();
}
else{
    let user=JSON.parse(localStorage.getItem("user"));
    user.firstName=firstName
    user.lastName=lastName
    localStorage.setItem("user",JSON.stringify(user));
    // console.log(user);
    let usersList=JSON.parse(localStorage.getItem("usersList"))
    for(let i=0;i<usersList.length;i++){
        if(user.email==usersList[i].email){
            usersList[i].firstName=firstName;
            usersList[i].lastName=lastName;
            errorMsg.style.display="block"
            errorMsg.innerHTML="Information updated Successfully !!"

            localStorage.setItem("usersList",JSON.stringify(usersList));
            return;
        }
    }
}

   
})

function showErrorMsg(){

    errorMsg.style.display="block"
    errorMsg.innerHTML="Fields cant be empty"

}

changePasswordBtn.addEventListener("click",()=>{
    errorMsg2.style.display="none"
    let user=JSON.parse(localStorage.getItem("user"));
    let oldPassword=document.querySelectorAll("input")[2].value;
    let newPassword=document.querySelectorAll("input")[3].value;
    let confirmPassword=document.querySelectorAll("input")[4].value;
    if(oldPassword==""||newPassword==""||confirmPassword==""){
        showErrorMsg();
        return;
    }
    if(user.password!=oldPassword||confirmPassword!=newPassword){
        console.log(user.password,oldPassword,newPassword,confirmPassword);
        errorMsg2.style.display="block"
     errorMsg2.innerHTML="Passwords does not match !!"
     return;
    }
    else{
        let usersList=JSON.parse(localStorage.getItem("usersList"));
        user.password=newPassword;
        localStorage.setItem("user",JSON.stringify(user));
        for(let i=0;i<usersList.length;i++){
            if(user.email==usersList[i].email){
                usersList[i].password=newPassword;
                localStorage.setItem("userList",JSON.stringify(usersList));
                return;
            }
        }
        errorMsg2.style.display="block"
        errorMsg2.innerHTML="Passwords changed successfully !!"
        return;
    }
})

// LOGOUT
logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("user");

    document.body.innerHTML=""
    let div=document.createElement("div")
    div.innerText="Logged out successfully"
    setTimeout(()=>{
        const link=document.createElement("a");
    link.href="./index.html"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
    
    return;
        },2000)
})