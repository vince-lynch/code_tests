$( document ).ready(function() {
 


/* Nav bar functionality*/
  $( "#clientarea" ).click(function() {
    console.log("client area menu clicked")
    document.getElementById("myDropdown").classList.toggle("show");
  });

/* Carousel Functionality */
  var i = 1;
  setInterval(function(){ 
    $('.carousel').css("background-image", "url(../images/slider" + i + ".jpg)");  
    if (i < 3){
      i++
    } else {
      i = 1;
    }
  }, 8000);

});