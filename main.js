$(function(){
    $("#me").hide();
$("#jell").on("click",function(){
$(".name").slideDown(1000);


});

/*name slide Down*/
$("#jell").hover(function(){ 
    
$(".name").slideDown(2000);
$("#me").slideDown(2000);
$(this).text("See less");


});
$("#jell").dblclick(function(){ 
    
    $(".name").slideUp(2000);
    $("#me").slideUp(2000);
    $('#jelly').text("About me");
    
    
    });

$("#info").on("click",function(){

});

$("#proff").Blur(function(){ 
    
$(this).hover();



});

}); 
