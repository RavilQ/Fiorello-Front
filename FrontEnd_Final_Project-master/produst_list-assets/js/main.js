let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
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