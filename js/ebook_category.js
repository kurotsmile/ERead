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
                e.cat.show_ebook_by_category(cat);
            });
            $("#all_box").append(catEmp);
        });
    }

    view_all(){
        this.loadListByData(this.all_item);
    }

    show_ebook_by_category(cats){
        var data=cats;
        $("#main_title").html(data.name);

        $("#all_box").html('');

        $("#body_title").html("All books are in the category <b>"+data.name+"</b>");

        $.each(data,function(k,v){
            if(k=="name") return true;
            if(k=="icon") return true;
            $("#all_box").append('<div class="col-3">'+v+'</div>');
        });

        e.ebook.loadListByCat(cats.name);
    }
}

var ebook_category=new Ebook_Category();
e.cat=ebook_category;