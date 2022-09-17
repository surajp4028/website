const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu'),
      closeicon = body.querySelector('.menu .navClose'),
      openicon = body.querySelector('.nav .hamberg-menu i');
    
      // menu
    
      openicon.addEventListener("click", ()=>{
        navMenu.classList.add('open');
        console.log("h")
      });
      closeicon.addEventListener("click",()=>{
        navMenu.classList.remove('open');
      });
