
$(document).ready(function(){
    $("a").click(function(e) {
        e.preventDefault();
        
        $("#wikidataframe").attr("src", $(this).attr("href"));
    })
});

