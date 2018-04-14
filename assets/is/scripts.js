function menu(){
  $(".hamburgerMenu").hide();
       $(".header__element--hamburger-menu").click(function(){
           $(".hamburgerMenu").slideToggle(500);
       });
   }
