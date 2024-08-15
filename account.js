
let signup = document.getElementById("Signupdiv");
let login = document.getElementById("logdiv");









  











function createacc(){

let uname = document.getElementById("name").value;
let mono = document.getElementById("mono").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;


        sessionStorage.setItem("uname" ,uname);
        sessionStorage.setItem("mono" , mono);
        sessionStorage.setItem("email" , email);
        sessionStorage.setItem("pass" , pass);
        



    console.log(uname);
    console.log(mono);
    console.log(email);
    console.log(pass);

    signup.style.display="none";
    login.style.display="block";  
    
}


function checkpass() {

    let user = document.getElementById("loguser").value;
    let pass = document.getElementById("logpass").value;

    

    let dbuser = sessionStorage.getItem("email");
    let dbname  = sessionStorage.getItem("uname");
    let dbpass = sessionStorage.getItem("pass");

    console.log(dbuser , dbpass , dbname);
    

   
    

 

    if( user === dbuser  && pass === dbpass)
        {
            alert("log in successful");
            
            console.log(login);
            
            window.location.assign("index.html");
            
        }
        else{
            alert("log in failed");
        }

    
    
    
}



function sign(){
    login.style.display="none";
    signup.style.display="block";
   

    
    
}

function log(){
    signup.style.display="none";
    login.style.display="block";

       
}





