class Ebook_Category{

    all_item=null;
    show_for_home(){
        $("#all_box").html(e.loading());
        if(this.all_item==null){
            $.getJSON(e.url_data_book_category, function (data) {
                ebook_category.all_item=data["all_item"];
                var cats=cr.limitItem(cr.shuffle(ebook_category.all_item),12);
                ebook_category.loadListByData(cats);
            });
        }else{
            var cats=cr.limitItem(cr.shuffle(ebook_category.all_item),12);
            ebook_category.loadListByData(cats);
        }
    }

    loadListByData(data){
        $("#main_title").html("Book topics and categories");
        $("#all_box").html("");
        $.each(data,function(index,cat){
            var catEmp=e.box(cat.name,'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',cat.icon);
            $(catEmp).click(function(){
                Swal.fire({
                    title:"Category",
                    Text:cat.name
                })
            });
            $("#all_box").append(catEmp);
        });
    }

    view_all(){
        this.loadListByData(this.all_item);
    }
}

var ebook_category=new Ebook_Category();
e.cat=ebook_category;