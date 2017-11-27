/*SERMON SECTION JS */

var posts = $('.sermon-list');
//posts.hide();

$(".sermons a").click(function () {

    var customType = $(this).data('filter');
    console.log(customType.type);
    console.log(posts.length);

    posts.hide();
    $('[id='+customType+']').each(function(){
    	$(this).show();
    });


    
});


/* END OF SERMON SECTION*/

/* **** START OF CONTACTS SECTION **** */
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".container").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
   
