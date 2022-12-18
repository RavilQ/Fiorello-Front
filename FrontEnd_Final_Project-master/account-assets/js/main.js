let bag = document.getElementById("bag");
let bagDiv = document.getElementById("bagDiv");
let circle = document.querySelector("circle");
let search = document.getElementById("search");
let searchDiv = document.getElementById("searchDiv");
let sticky = document.getElementById("sticky");
let responsiveMenu = document.getElementById("responsiveMenu");
let bar = document.getElementById("bar");
let account_error_info=document.getElementById("account_error_info")
let back_to_top=document.getElementById("back_to_top")

bag.addEventListener("mouseover",()=>{
    bagDiv.style.display="block";
})


bag.addEventListener("mouseleave",()=>{
    bagDiv.addEventListener("mouseover",()=>{
        bagDiv.style.display="block";
    })
    bagDiv.addEventListener("mouseleave",()=>{
        bagDiv.style.display="none";
    })
    bagDiv.style.display="none";
})

search.addEventListener("click",()=>{
    if (searchDiv.style.opacity=="1") {
        searchDiv.style.opacity="0";
        searchDiv.style.visibility="hidden";
    
    }
    else{
        searchDiv.style.opacity="1";
        searchDiv.style.visibility="visible";
    }

})

window.addEventListener('scroll',()=> {
    if(window.scrollY>1045){
       sticky.style.height="85px"
       back_to_top.style.visibility="visible"
    }
    else{
        sticky.style.height="0"
        back_to_top.style.visibility="hidden"
    }
});



bar.addEventListener("click",()=>{
    if (responsiveMenu.style.height=="35rem") {
        responsiveMenu.style.height="0";
    }
    else{
        responsiveMenu.style.height="35rem";
    }
    
})



function checkEmail() {

    let email = document.getElementById('username');
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    email.style.borderColor="red"
    account_error_info.style.display="block"
    email.focus;
    return false;
 }
 else{
    email.style.borderColor="silver"
    account_error_info.style.display="none"
 }
}

let login=document.getElementById("btn")
login.addEventListener('click',checkEmail)


