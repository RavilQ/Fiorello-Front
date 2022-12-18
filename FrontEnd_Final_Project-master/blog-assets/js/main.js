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

