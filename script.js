<<<<<<< HEAD
let form=document.querySelector("form");
let inputName=form.name;
let inputEmail=form.email;
let message=form.message;

form.addEventListener("submit",(e)=>{
    // alert("Form was submitted");
     e.preventDefault();
    const name=form.name.value;
    const email=form.email.value;
    const message=form.message.value;

    inputName.style.border="";
    inputEmail.style.border="";
    message.style.border="";

     let error=false;
    if(name==""){
        alert("Name is required");
        inputName.style.border="2px solid red";
        error=true;
    }
    if(!validemail(email)){
        alert("Enter valid email");
        inputEmail.style.border="2px solid red";
        error=true;
    }
    if(message.length<10){
     alert("Message should be atleast 10 characters")
     message.style.border="4px solid red";
     error=true;
    }
    if(error) return;

    toastmessage("Form Submitted Successfully");
    
});

function validemail(email){
    let re=	/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function toastmessage(msg){
const toast=document.getElementById("toast");
toast.textContent=msg;
toast.style.visibility="visible";
toast.style.opacity="1";

setTimeout(()=>{
    toast.style.opacity=0;
    toast.style.visibility="hidden";
},3000)
}
=======
let form=document.querySelector("form");
let inputName=form.name;
let inputEmail=form.email;
let inputmessage=form.message;
let nameerror=document.getElementById("error-name");
let emailerror=document.getElementById("error-email");
let messageerror=document.getElementById("error-message");

form.addEventListener("submit",(e)=>{
    // alert("Form was submitted");
     e.preventDefault();
    const name=form.name.value;
    const email=form.email.value;
    const message=form.message.value;


    nameerror.classList.remove("visible");
    emailerror.classList.remove("visible");
    messageerror.classList.remove("visible");

    inputName.style.border="";
    inputEmail.style.border="";
    inputmessage.style.border="";

     let error=false;
    if(name==""){
        nameerror.textContent="Enter valid name";
        inputName.style.border="2px solid red";
        nameerror.classList.add("visible");
        error=true;
    }
    if(!validemail(email)){
        emailerror.textContent="Enter a valid email"
        inputEmail.style.border="2px solid red";
        emailerror.classList.add("visible");
        error=true;
    }
    if(message.length<10){
        messageerror.textContent="Enter a valid message";
     inputmessage.style.border="4px solid red";
     messageerror.classList.add("visible");
     error=true;
    }
    if(error) return;

    toastmessage("Form Submitted Successfully");

    setTimeout(()=>{
        location.reload();
    },3000)
});

function validemail(email){
    let re=	/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function toastmessage(msg){
const toast=document.getElementById("toast");
toast.textContent=msg;
toast.style.visibility="visible";
toast.style.opacity="1";

setTimeout(()=>{
    toast.style.opacity=0;
    toast.style.visibility="hidden";
},3000)
}
>>>>>>> e5ed917 (Added some new features and fixed some bugs)
