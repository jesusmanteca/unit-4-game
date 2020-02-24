$(document).ready(function() {
    
    // Make variables for the stones = 0

    var stone2 = 0
    var stone3 = 0
    var stone4 = 0
    var stone5 = 0

   
    
    $("#introParagraphGreeting").click(function (){
        $(".introParagraphs").slideToggle();
    })
    $("#stone2").dblclick(function () {
        $(this).toggle();
    })
    $("#stone3").dblclick(function () {
        $(this).toggle();
     })
    $("#stone4").dblclick(function () {
        $(this).toggle();
     })
    $("#stone5").dblclick(function () {
        $(this).fadeOut("slow");
     })
        

});

var introParagraphGreeting;
introParagraphGreeting = document.getElementById("introParagraphGreeting");

