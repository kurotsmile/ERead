class Ebook_Category{

    show_for_home(){
        $("#all_box").html("Loading..");
        $.getJSON(e.url_data_book_category, function (data) {
            $("#all_box").html("");
            var all_item=data["all_item"];
            $.each(cr.shuffle(all_item),function(index,cat){
                if(index==12) return false;
                var catEmp=e.box(cat.name,'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',cat.icon);
                $(catEmp).click(function(){
                    Swal.fire({
                        title:"Category",
                        Text:cat.name
                    })
                });
                $("#all_box").append(catEmp);
            });
        });
    }
}

var ebook_category=new Ebook_Category();
e.cat=ebook_category;