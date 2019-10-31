function loading(page){
    
    $.ajax({
        type: "GET",
        url: page,
        data: { },
        success: function(data){
            $('#loading_zone').html(data);

        },error: function(){
            console.log("ajax failed");
        }
    });
}