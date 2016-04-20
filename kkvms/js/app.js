$( document ).ready(function() {
  console.log( "jquery ready!" );


/* Nav bar functionality*/
  $( "#clientarea" ).click(function() {
    console.log("client area menu clicked")
    document.getElementById("myDropdown").classList.toggle("show");
  });

/* Carousel Functionality */
  var i = 1;
  setInterval(function(){ 
    $('.carousel').css("background-image", "url(../images/slider" + i + ".jpg)");  
    if (i < 4){
      i++
    } else {
      i = 1;
    }
  }, 8000);

});