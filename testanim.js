$(document).ready(function(){
$( "button" ).on( "click", function() {
        $( "tbody.subtable" ).animate({
          backgroundColor: "#00ff00",
          color: "#fff",
          width: 100
        }, 2000 )
    });
$( '#table_btn').on('click', function() {
    $('table').toggleClass('before, after');
});

});
   
