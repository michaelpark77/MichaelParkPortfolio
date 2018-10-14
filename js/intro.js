$(document).ready(function(){
    $(".pro-item a").on('mouseenter',function(event){
        var id = $(this).attr('data-id');
        
        $(".pro-img-item").removeClass('active');
        $(".pro-img-item[data-id='"+id+"']").addClass('active');
    })
    
})