let eyeicon = document.getElementById("eye-icon");
let passowrd = document.getElementById("password-input")

eyeicon.onclick = function()
{
    if(passowrd.type == "password")
    {
        passowrd.type = "Text";
        eyeicon.src = "../../Assets/Login/eye-open.svg";
    }
    else
    {
        passowrd.type = "password";
        eyeicon.src = "../../Assets/Login/eye-closed.svg";
    }
}
