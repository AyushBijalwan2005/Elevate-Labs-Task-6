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
