
function submit(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
   if(username=="john" && password=="1234")
       return location.replace("dashboard.html");
   else if(username ==""|| password==""){
       alert("usename or password are null");
   }
   else {
       console.log("false");
       alert("usename and password are incorrect");
   }
}
