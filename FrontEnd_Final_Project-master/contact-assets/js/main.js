let input_name=document.getElementById("input_name")
let input_email=document.getElementById("input_email")
let input_phone=document.getElementById("input_phone")
let text_area=document.getElementById("text-area")
let succes_info=document.getElementById("succes_info");
let error_info_name=document.getElementById("error_info_name")
let error_info_email=document.getElementById("error_info_email")
let error_info=document.getElementById("error_info")
let submit_message_btn=document.getElementById("submit_message")
const phoneRegex=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
const nameRegex=/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
submit_message_btn.addEventListener('click',()=>{
  checkUpcomingData(input_name,input_email,input_phone,text_area);
})


function checkUpcomingData(name,email,phone,text) {
  if (name.value.trim().length>0 && email.value.trim().length>0) {
     if(checkWithRegex(name,email)){
      succes_info.style.display="block";
      error_info_name.style.display="none"
      error_info_email.style.display="none"
      error_info.style.display="none"
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "seymur1097@gmail.com",
        Password : "0E44440B9DF672C35D16363627EB2D8F165A",
        To : `${email.value}`,
        From : "seymur1097@gmail.com",
        Subject : "Contact me",
        Body : `This message from:${name.value},email:${email.value} <br> ${text_area.value}`
    }).then(
      name.value="",
      email.value="",
      phone.value="",
      text.value=""
    );

     }
     else {
      error_info.style.display="block"
     }
  }
  else{
    error_info_name.style.display="block"
    error_info_email.style.display="block"
    error_info.style.display="block"
  }
}

function checkWithRegex(name,email) {
  if(
    nameRegex.test(name.value.trim()) &&
    emailRegex.test(email.value.trim())
  )
  {
    return true
  }
  else{
    return false
  }
}

let bag = document.getElementById("bag");
let bagDiv = document.getElementById("bagDiv");
let circle = document.querySelector("circle");
let search = document.getElementById("search");
let searchDiv = document.getElementById("searchDiv");
let sticky = document.getElementById("sticky");
let responsiveMenu = document.getElementById("responsiveMenu");
let bar = document.getElementById("bar");
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
    if (searchDiv.style.display=="inline-block") {
        // searchDiv.style.opacity="0";
        searchDiv.style.display="none";
    
    }
    else{
        // searchDiv.style.opacity="1";
        searchDiv.style.display="inline-block";
    }

})

window.addEventListener('scroll',()=> {
    if(window.scrollY>100){
       sticky.style.height="85px"
       back_to_top.style.visibility="visible"
    }
    else{
        sticky.style.height="0"
        back_to_top.style.visibility="hidden"
    }
});



bar.addEventListener("click",()=>{
    if (responsiveMenu.style.height=="30rem") {
        responsiveMenu.style.height="0";
    }
    else{
        responsiveMenu.style.height="30rem";
    }
    
})

