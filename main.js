$(function(){
    $('.projects').hide();
    $('.text').hide();
$("#me").hide();
$('#icons').hide();
$("#projects").on("click",function(){
$(".projects").slideDown(2000)




})
$("#abt").on("click",function(){
    $("#me").slideDown(2000)
    
    
    
    
    })

$("#phone").on("click",function(){
    $(".text").toggle(2000)
    
    })
    
$("#contacts").on("click",function(){
    $("#icons").toggle(2000)
    
    })
}); 

