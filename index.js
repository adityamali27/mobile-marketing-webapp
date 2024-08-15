let apple1     = document.getElementById("Apple1");
let apple2     = document.getElementById("Apple2");
let sam1       = document.getElementById("sam1");
let sam2       = document.getElementById("sam2");
let one1       = document.getElementById("one1");
let one2       = document.getElementById("one2");
let real1      = document.getElementById("real1");
let real2      = document.getElementById("real2");
let xio1       = document.getElementById("xio1");
let redmi1     = document.getElementById("redmi1");

let pro1 = document.getElementById("pro1");
let pro2 = document.getElementById("pro2");




let proinfo = document.querySelector("#proinfo");
let proprice = document.querySelector("#proprice");
let proname = document.querySelector("#proname");
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let qun = document.querySelector("#qun");

console.log( proinfo , min , max , proname , proprice , qun);





let logblock = document.getElementById("logblock");
let def = "Log In";

console.log(logblock);
logblock.innerText=def;

let dbname = sessionStorage.getItem("uname");
console.log(dbname);

if(dbname == null)
{
   
    logblock.innerText=def;
}
else{

    logblock.innerText=dbname;

}





function cart(no){
    
if(dbname == null)
    {
       
        alert("login first")
        window.location.assign("login.html");
    }
    else{
        

        window.location.assign("Cart.html");

        // proimg.style.backgroundImage = "url('images/product_1.png')";
        // let proimg = document.querySelector("#proimg");
        // proimg.style.backgroundColor="red";

        // console.log(no);        
    
    }

}





// console.log(apple1 , apple2 , sam1 , sam2 , one1 , one2 , real1 , real2 , xio1 , redmi1);





function samsung(){
    
    sam1.style.display="block";
    sam2.style.display="block";
    apple1.style.display="none";
    apple2.style.display="none";
    one1.style.display="none";
    one2.style.display="none";
    real1.style.display="none";
    real2.style.display="none";
    xio1.style.display="none";
    redmi1.style.display="none";


   
}

function Apple(){
    sam1.style.display="none";
    sam2.style.display="none";
    apple1.style.display="block";
    apple2.style.display="block";
    one1.style.display="none";
    one2.style.display="none";
    real1.style.display="none";
    real2.style.display="none";
    xio1.style.display="none";
    redmi1.style.display="none";
    

    


}


function oneplus(){
    sam1.style.display="none";
    sam2.style.display="none";
    apple1.style.display="none";
    apple2.style.display="none";
    one1.style.display="block";
    one2.style.display="block";
    real1.style.display="none";
    real2.style.display="none";
    xio1.style.display="none";
    redmi1.style.display="none";

   



}

function realme(){
    sam1.style.display="none";
    sam2.style.display="none";
    apple1.style.display="none";
    apple2.style.display="none";
    one1.style.display="none";
    one2.style.display="none";
    real1.style.display="block";
    real2.style.display="block";
    xio1.style.display="none";
    redmi1.style.display="none";

    
 
    


}

function xiaomi(){
    sam1.style.display="none";
    sam2.style.display="none";
    apple1.style.display="none";
    apple2.style.display="none";
    one1.style.display="none";
    one2.style.display="none";
    real1.style.display="none";
    real2.style.display="none";
    xio1.style.display="block";
    redmi1.style.display="none";

    
  
}


function every(){
    

    sam1.style.display="block";
    sam2.style.display="block";
    apple1.style.display="block";
    apple2.style.display="block";
    one1.style.display="block";
    one2.style.display="block";
    real1.style.display="block";
    real2.style.display="block";
    xio1.style.display="block";
    redmi1.style.display="block";
    
}

let count = 1 ;
let total ;

min.addEventListener("click" , ()=>{

    count--;
    total = total-112000;
    proprice.innerHTML = total;
    qun.innerHTML=count;

})

max.addEventListener("click" , ()=>{

    count++ ;
    total = 112000*count
    proprice.innerHTML = total
    qun.innerHTML=count;

})


function subside(no){
    if(no == 1)
    {
        proimg.style.backgroundImage = "url('./images/ipho15_1.png')";
    }
    else if(no == 2)
    {
        proimg.style.backgroundImage = "url('./images/ipho15_2.png')";
    }
    else if(no == 3)
        {
            proimg.style.backgroundImage = "url('./images/ipho15_3.png')";
        }
    else if(no == 4)
        {
                proimg.style.backgroundImage = "url('./images/ipho15_4.png')";
        }
}

let placeorder = document.querySelector(".placeorder");

placeorder.addEventListener("click" ,()=>{

    alert("order placed");
})



