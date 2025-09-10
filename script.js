const form = document.getElementById("sign-up-form");
const email = document.getElementById("email");
const success = document.getElementById("success");
const dismiss_btn = document.getElementById("dismiss-btn");

form.addEventListener("submit", event  =>{
    event.preventDefault();
    if(validateEmail(email)){
        removeError(email, 'email-err');
        const user_email = document.getElementById("user-email");
        user_email.innerHTML = email.value.trim();
        form.style.display = "none";
        success.style.display = "block";
    }
    else{
        setError(email, 'email-err');
    }
});

document.addEventListener("keypress", ()=>{
    if(validateEmail(email)){
        removeError(email, 'email-err');
    }
});

function validateEmail(email){
    if(email.value.trim().search(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm) != 0){
        return false;
    }
    else{
        return true;
    }
}

function setError(element, err){
    element.classList.add("error");
    document.getElementById(err).style.display = 'block';
}

function removeError(element, err){
    element.classList.remove("error");
    document.getElementById(err).style.display = 'none';
}

dismiss_btn.addEventListener("click", ()=>{
    success.style.display = "none";
    email.value = "";
    form.style.display = "flex";
});