$(document).ready(function() {
//    console.log("hej");

    $(".kastaTarning").click(function() {
        var tal = Math.floor((Math.random() * 6) + 1);
       var n = tal.toString();
        $('<p>').text(n).appendTo("#box");
        return n;
        console.log(n);
   
    });


//    function addListeners(){
//        $('form').submit(funtion(event))
//    }
//    event.preventDefault();


function itryckt(){
    var summa = $('.radiobtn:checked').val();
    
}
});
