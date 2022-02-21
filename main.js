function login(){
    username =  document.getElementById("inpname").value;
    localStorage.setItem("Username", username);
    window.location="home.html"
}