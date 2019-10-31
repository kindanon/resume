function loading(page){
    
    $.ajax({
        type: "GET",
        url: page,
        data: { },
        success: function(data){
            $("#loading_zone").animate({height: "0rem"});
            $('#loading_zone').html(data);
            $("#loading_zone").animate({height: "25rem"});

        },error: function(){
            console.log("ajax failed");
        }
    });
}