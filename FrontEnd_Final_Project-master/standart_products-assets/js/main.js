let description=document.getElementById("desc__btn")
let info=document.getElementById('add__info__btn')
let review=document.getElementById('review__btn')
let descText=document.getElementById('desc__txt')
let infoText=document.getElementById('info__txt')
let reviewText=document.getElementById('reviews__txt')

descText.style.display="block"
infoText.style.display="none"
reviewText.style.display="none"
description.style.backgroundColor="#f34f3f"
description.style.color="white"
info.style.backgroundColor="white"
info.style.color="black"
review.style.backgroundColor="white"
review.style.color="black"

description.addEventListener("click",()=>{
    descText.style.display="block"
    infoText.style.display="none"
    reviewText.style.display="none"
    description.style.backgroundColor="#f34f3f"
    description.style.color="white"
    info.style.backgroundColor="white"
    info.style.color="black"
    review.style.backgroundColor="white"
    review.style.color="black"
});
info.addEventListener("click",()=>{
    descText.style.display="none"
    infoText.style.display="block"
    reviewText.style.display="none"
    description.style.backgroundColor="white"
    description.style.color="black"
    info.style.backgroundColor="#f34f3f"
    info.style.color="white"
    review.style.backgroundColor="white"
    review.style.color="black"

});
review.addEventListener("click",()=>{
    descText.style.display="none"
    infoText.style.display="none"
    reviewText.style.display="block"
    description.style.backgroundColor="white"
    description.style.color="black"
    info.style.backgroundColor="white"
    info.style.color="black"
    review.style.backgroundColor="#f34f3f"
    review.style.color="white"
});

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





