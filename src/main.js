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