jQuery(document).ready(function($){
    $("#skillsSubmenu a").click(function() {
        var category = $(this).data("category");
        if (category=="all")
        {$("#projects div.col.mb-4").show();
        }
        else{
            $("#projects div.col.mb-4").hide();
            $("#projects div.col.mb-4." + category).show();
        }
        //$("#projects li ").hide();
        //$("#projects li " + category).show();
        return false;
    });
});