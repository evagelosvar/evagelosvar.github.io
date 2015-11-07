 $(document).ready(function(){
    $("h3").nextUntil( "h3" ).hide();

$("h3").click(function(){
        $(this).nextUntil( "h3" ).toggle();
    });
});