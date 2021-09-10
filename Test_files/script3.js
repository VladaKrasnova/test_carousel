$(function() {
    var load_more = false;

    $(document).on("click", "#ajax_next_page", function(e) {
        e.preventDefault();
        if(load_more)
            return false;
        var ajax_url = $(this).attr("href");
        load_more = true;
        $.ajax({
            url: ajax_url,
            type: "POST",
            data: {IS_AJAX: 'Y'},
            success: function(data) {
                $("#ajax_next_page").after(data);
            	$("#ajax_next_page").remove();
            	$("#navigatsia").remove();
                
            	load_more = false;
            }
        });
    });
});