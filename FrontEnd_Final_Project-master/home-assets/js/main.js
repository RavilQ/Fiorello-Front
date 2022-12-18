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
let back_to_top=document.getElementById("back_to_top")
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

let count =0;

nextSlide.addEventListener("click",interval)

previevSlide.addEventListener("click",()=>{
    if (count==2) {
        slideImg.style.backgroundImage="url(https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg)";
      }
      if (count==1) {
        slideImg.style.backgroundImage="url(https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg)"
      }
      if (count==0) {
          slideImg.style.backgroundImage="url(https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg)"
          count=3;
      }
 
     count--;
})





let myinterval = setInterval(interval, 8000);


function interval(){
    if (count==0) {
        slideImg.style.backgroundImage="url(https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg)";
      }
      if (count==1) {
        slideImg.style.backgroundImage="url(https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg)";
      }
      if (count==2) {
          slideImg.style.backgroundImage="url(https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg)"
          count=-1;
      }
 
     count++;
}

let all = document.getElementById("all");
let allSection = document.getElementById("allSection");
let cactuses = document.getElementById("cactuses");
let cactusesSection = document.getElementById("cactusesSection");
let exotic = document.getElementById("exotic");
let exoticSection = document.getElementById("exoticSection");
let greens = document.getElementById("greens");
let greensSection = document.getElementById("greensSection");
let popular = document.getElementById("popular");
let popularSection = document.getElementById("popularSection");
let various = document.getElementById("various");
let variousSection = document.getElementById("variousSection");
let winter = document.getElementById("winter");
let winterSection = document.getElementById("winterSection");




all.addEventListener("click",()=>{
    all.style.color="#f34f3f";
    allSection.style.display="grid";
    cactuses.style.color="black";
    cactusesSection.style.display="none";
    exotic.style.color="black";
    exoticSection.style.display="none";
    greens.style.color="black";
    greensSection.style.display="none";
    popular.style.color="black";
    popularSection.style.display="none";
    various.style.color="black";
    variousSection.style.display="none";
    winter.style.color="black";
    winterSection.style.display="none";
})




cactuses.addEventListener("click",()=>{
    all.style.color="black";
    allSection.style.display="none";
    cactuses.style.color="#f34f3f";
    cactusesSection.style.display="grid";
    exotic.style.color="black";
    exoticSection.style.display="none";
    greens.style.color="black";
    greensSection.style.display="none";
    popular.style.color="black";
    popularSection.style.display="none";
    various.style.color="black";
    variousSection.style.display="none";
    winter.style.color="black";
    winterSection.style.display="none";
})


exotic.addEventListener("click",()=>{
    all.style.color="black";
    allSection.style.display="none";
    cactuses.style.color="black";
    cactusesSection.style.display="none";
    exotic.style.color="#f34f3f";
    exoticSection.style.display="grid";
    greens.style.color="black";
    greensSection.style.display="none";
    popular.style.color="black";
    popularSection.style.display="none";
    various.style.color="black";
    variousSection.style.display="none";
    winter.style.color="black";
    winterSection.style.display="none";
})



greens.addEventListener("click",()=>{
    all.style.color="black";
    allSection.style.display="none";
    cactuses.style.color="black";
    cactusesSection.style.display="none";
    exotic.style.color="black";
    exoticSection.style.display="none";
    greens.style.color="#f34f3f";
    greensSection.style.display="grid";
    popular.style.color="black";
    popularSection.style.display="none";
    various.style.color="black";
    variousSection.style.display="none";
    winter.style.color="black";
    winterSection.style.display="none";
})



popular.addEventListener("click",()=>{
    all.style.color="black";
    allSection.style.display="none";
    cactuses.style.color="black";
    cactusesSection.style.display="none";
    exotic.style.color="black";
    exoticSection.style.display="none";
    greens.style.color="black";
    greensSection.style.display="none";
    popular.style.color="#f34f3f";
    popularSection.style.display="grid";
    various.style.color="black";
    variousSection.style.display="none";
    winter.style.color="black";
    winterSection.style.display="none";
})



various.addEventListener("click",()=>{
    all.style.color="black";
    allSection.style.display="none";
    cactuses.style.color="black";
    cactusesSection.style.display="none";
    exotic.style.color="black";
    exoticSection.style.display="none";
    greens.style.color="black";
    greensSection.style.display="none";
    popular.style.color="black";
    popularSection.style.display="none";
    various.style.color="#f34f3f";
    variousSection.style.display="grid";
    winter.style.color="black";
    winterSection.style.display="none";
})


winter.addEventListener("click",()=>{
    all.style.color="black";
    allSection.style.display="none";
    cactuses.style.color="black";
    cactusesSection.style.display="none";
    exotic.style.color="black";
    exoticSection.style.display="none";
    greens.style.color="black";
    greensSection.style.display="none";
    popular.style.color="black";
    popularSection.style.display="none";
    various.style.color="black";
    variousSection.style.display="none";
    winter.style.color="#f34f3f";
    winterSection.style.display="grid";
})


const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
   const slideWidth = slide.clientWidth;
   slidesContainer.scrollLeft += slideWidth;

   if(slidesContainer.scrollLeft===3*slideWidth-2) {

    slidesContainer.scrollLeft=0;
  }
  
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;

   if(slidesContainer.scrollLeft===0) {

    slidesContainer.scrollLeft=3*slideWidth;
  }
});

let player = document.getElementById("videoPlay");
let linik = document.getElementById("youtubeLink");

player.addEventListener("click",()=>{
   linik.click();
})


let majesy = document.getElementById("majesy");
let foxlove = document.getElementById("foxlove");
let sweet = document.getElementById("sweet");
let spring = document.getElementById("spring");
let scarlet = document.getElementById("scarlet");
let rock = document.getElementById("rock");
let summer = document.getElementById("summer");
let wild = document.getElementById("wild");
let cardnumber = document.getElementById("cardnumber")

let crcle = document.getElementById("crcle");

majesy.addEventListener("click",()=>{
   
    

    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;"><i id="click1" class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg" alt="image">
        <p style="font-size:1rem;">MAJESTY PALM</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }


   
       
        
})

foxlove.addEventListener("click",()=>{
    
    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg" alt="image">
        <p style="font-size:1rem;">FOXLOVE FLOVER</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }



    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }


    //    if (bagDiv.childElementCount==5) {
         
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg" alt="image">
    //     <p style="font-size:1rem;">FOXLOVE FLOVER</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})


sweet.addEventListener("click",()=>{


    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg" alt="image">
        <p style="font-size:1rem;">SWEET ALYSSUM</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }


    
    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }


    //    if (bagDiv.childElementCount==5) {
         
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg" alt="image">
    //     <p style="font-size:1rem;">SWEET ALYSSUM</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})

spring.addEventListener("click",()=>{

    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg" alt="image">
        <p style="font-size:1rem;">SPRING SNOWFLAKE</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }

    
    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }

    //    if (bagDiv.childElementCount==5) {
          
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg" alt="image">
    //     <p style="font-size:1rem;">SPRING SNOWFLAKE</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})

scarlet.addEventListener("click",()=>{

    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg" alt="image">
        <p style="font-size:1rem;">SCARLET SAGE</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }
    
    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }


    //    if (bagDiv.childElementCount==5) {
          
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg" alt="image">
    //     <p style="font-size:1rem;">SCARLET SAGE</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})

rock.addEventListener("click",()=>{

    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg" alt="image">
        <p style="font-size:1rem;">ROCK SOAPWORT</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }

    
    
    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }


    //    if (bagDiv.childElementCount==5) {
          
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg" alt="image">
    //     <p style="font-size:1rem;">ROCK SOAPWORT</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})


summer.addEventListener("click",()=>{

    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
        
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg" alt="image">
        <p style="font-size:1rem;">SUMMER SAVORY</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }
    
    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }


    //    if (bagDiv.childElementCount==5) {
          
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg" alt="image">
    //     <p style="font-size:1rem;">SUMMER SAVORY</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})


wild.addEventListener("click",()=>{

    if (bagDiv.childElementCount==1) {
        bagDiv.innerHTML=`<span></span>`
        cardnumber.innerHTML=`<span>CART($259)</span>`
        
        crcle.innerHTML=`<span>1</span>`
    }
    if (bagDiv.childElementCount==2) {
        cardnumber.innerHTML=`<span>CART($518)</span>`
    
     crcle.innerHTML=`<span>2</span>`
    }
    if (bagDiv.childElementCount==3) {
        cardnumber.innerHTML=`<span>CART($777)</span>`
     
     crcle.innerHTML=`<span>3</span>`
    }
    if (bagDiv.childElementCount==4) {
        cardnumber.innerHTML=`<span>CART($1036)</span>`
     
     crcle.innerHTML=`<span>4</span>`
    }


    if (bagDiv.childElementCount==5) {
         
    }
    else{
        
        bagDiv.innerHTML+=`<div style="margin-top:1rem;margin-bottom:1rem;">
        <button style="position: relative;bottom: 6rem;left: 7rem;" onclick="parentElement.remove()"><i class="las la-times"></i></button>   
        <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg" alt="image">
        <p style="font-size:1rem;">WILD ROSES</p>
        <p style="font-size:1rem;">259$</p>
        </div>
        `
    }
    
    // if (bagDiv.childElementCount==1) {
    //     bagDiv.innerHTML=`<span></span>`
    //     cardnumber.innerHTML=`<span>CART($259)</span>`
    //     bagDiv.style.height="13rem";
    //     crcle.innerHTML=`<span>1</span>`
    // }
    // if (bagDiv.childElementCount==2) {
    //     cardnumber.innerHTML=`<span>CART($518)</span>`
    //  bagDiv.style.height="23rem";
    //  crcle.innerHTML=`<span>2</span>`
    // }
    // if (bagDiv.childElementCount==3) {
    //     cardnumber.innerHTML=`<span>CART($777)</span>`
    //  bagDiv.style.height="33rem";
    //  crcle.innerHTML=`<span>3</span>`
    // }
    // if (bagDiv.childElementCount==4) {
    //     cardnumber.innerHTML=`<span>CART($1036)</span>`
    //  bagDiv.style.height="43rem";
    //  crcle.innerHTML=`<span>4</span>`
    // }


    //    if (bagDiv.childElementCount==5) {
          
    //    }
    //    else{
    //     bagDiv.innerHTML+=`<div style="margin-top:1rem;">
    //     <img style="width:5rem" src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg" alt="image">
    //     <p style="font-size:1rem;">WILD ROSES</p>
    //     <p style="font-size:1rem;">259$</p>
    //     </div>
    //     `
    // }

})


bagDiv.addEventListener("click",e=>{

          if (e.target.id=="click1") {
             e.target.parentElement.parentElement.remove();


          } 
        

          if (bagDiv.childElementCount==1) {

            bagDiv.innerHTML=`<span>No product in the card</span>`
            
            cardnumber.innerHTML=`<span>CART($0)</span>`
        
            crcle.innerHTML=`<span>0</span>`
        }
        if (bagDiv.childElementCount==2) {
            cardnumber.innerHTML=`<span>CART($259)</span>`
        
            crcle.innerHTML=`<span>1</span>`
            
        }
        if (bagDiv.childElementCount==3) {

            cardnumber.innerHTML=`<span>CART($518)</span>`
        
            crcle.innerHTML=`<span>2</span>`

        }
        if (bagDiv.childElementCount==4) {
            cardnumber.innerHTML=`<span>CART($777)</span>`
         
            crcle.innerHTML=`<span>3</span>`
        }

        if (bagDiv.childElementCount==5) {
            cardnumber.innerHTML=`<span>CART($1036)</span>`
         
            crcle.innerHTML=`<span>4</span>`
        }

        


})

let emailInput = document.getElementById("emailInput");
let subscribeBtn = document.getElementById("subscribeButton");
const checkEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


subscribeBtn.addEventListener("click",()=>{

    emailInput.style.border="none";

    if (checkEmail.test(emailInput.value)) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "seymur1097@gmail.com",
            Password : "0E44440B9DF672C35D16363627EB2D8F165A",
            To : `${emailInput.value}`,
            From : "seymur1097@gmail.com",
            Subject : "Subscribed",
            Body : `${emailInput.value} subscribed.`
        }).then(
            emailInput.value=""
        )
    }
    else{
        emailInput.style.border="1px solid red";
    }


})