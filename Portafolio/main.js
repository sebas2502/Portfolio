addEventListener('DOMContentLoaded',()=>{
    let btnMenu = document.querySelector('#menu');
    let nav =  document.querySelector('#navbar');
    let links = document.querySelectorAll('.links');

    
   

    btnMenu.addEventListener('click',()=>{
        nav.classList.toggle('menu-active');
        
        
    });

   

    links.forEach((link)=>{
        link.addEventListener('click',()=>{
            nav.classList.toggle('menu-active');
        });
    });


//<i class="fa-solid fa-xmark"></i>


});
       


 

