let bag = document.getElementById("bag");
let bagDiv = document.getElementById("bagDiv");
let circle = document.querySelector("circle");
let search = document.getElementById("search");
let searchDiv = document.getElementById("searchDiv");
let sticky = document.getElementById("sticky");
let responsiveMenu = document.getElementById("responsiveMenu");
let bar = document.getElementById("bar");
let nextSlide = document.getElementById("rightArrow");
let previevSlide = document.getElementById("leftArrow");
let slideImg = document.querySelector(".slideImages");
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


let loadButton = document.getElementById("loadButton");
let lasts = document.getElementsByClassName("lasts");
let footer = document.querySelector(".footer");

loadButton.addEventListener("click",()=>{
    loadButton.style.display="none";
    for (let index = 0; index < lasts.length; index++) {
        
        lasts[index].style.display="block";
    }
    footer.style.marginTop="118rem"
})