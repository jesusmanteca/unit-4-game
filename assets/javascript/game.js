$(document).ready(function() {
    
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
// introParagraphGreeting.textContent = "Hello friends! Let's get going."