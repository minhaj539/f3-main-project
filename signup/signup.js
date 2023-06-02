


const signupBtn=document.getElementById("signup-btn");
const firstName=document.getElementById("f-name")
const lastName=document.getElementById("l-name")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmPassword=document.getElementById("confirm-password")

let usersList;
//SIGNUP 
signupBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(localStorage.getItem("usersList")==null){
        usersList=[];
        localStorage.setItem("usersList",JSON.stringify(usersList))
    }
    else{
        usersList=JSON.parse(localStorage.getItem("usersList"));
        console.log(usersList);
    };
  
    
    if(firstName.value==''||lastName.value==''||email.value==""||password.value==""||confirmPassword.value==""){
        document.getElementById("error-msg").innerHTML="All fields are mandatory !!"
        return;
    }
    if(password.value!=confirmPassword.value){
        document.getElementById("error-msg").innerHTML="passwords does not match !!"
        return;
    }
    for(let i=0;i<usersList.length;i++){
        let user=usersList[i];
            if(user.email==email.value){
                document.getElementById("error-msg").innerHTML="Email already exists !!"
                return;
            }
        }
    let user={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
    }
    usersList.push(user);
    // localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem("usersList",JSON.stringify(usersList))
    localStorage.setItem("user",JSON.stringify(user));
    const link=document.createElement("a");
    link.href="./shop.html"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)

})

function checkUser(){
    if(localStorage.getItem("user")!=null){
        let errorMsg=document.getElementById("error-msg");
        errorMsg.style.display="block"
        document.body.innerHTML=""
        errorMsg.innerHTML="Already Logged in !!";
        setTimeout(()=>{
            const link=document.createElement("a");
    link.href="./shop.html"
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
        },2000)

    }
}