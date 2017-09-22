$(document).ready(function(){
$( "button" ).on( "click", function() {
				alert('click');
        $( "tbody.subtable" ).animate({
          backgroundColor: "#00ff00",
          color: "#fff",
          width: 100
        }, 2000 )
    });
});
   
