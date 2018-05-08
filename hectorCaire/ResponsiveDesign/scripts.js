(function(){
  'use strict';

  const navbarButton=document.querySelectorAll(".navbar__button--mobile");
  const navbarButtonModal=document.querySelectorAll(".modal__button");
  const sidemenu = document.querySelector(".sidemenu");
  const modal= document.querySelector(".modal");
  const hideModal=document.getElementsByClassName('hide-modal');
  const nameImput = document.getElementById("name");
  const emailImput = document.getElementById("email");

  const toggleModal=()=>{
    modal.classList.add('modal--hidden');
    nameImput.value="";
    emailImput.value="";
  }

  for(const myButton of navbarButton){
    myButton.addEventListener("click",()=>{
      sidemenu.classList.toggle('sidemenu--hidden');
    });
  }


  for (const myButton of navbarButtonModal){
    myButton.addEventListener("click",()=>{
      modal.classList.toggle('modal--hidden');
    });
}
    for (const myElement of hideModal){
      myElement.addEventListener("click",toggleModal);
  }



})();
