class Ebook{

    all_item=null;

    show_for_home(){
        $("#all_item").html(e.loading());
        if(this.all_item==null){
            $.getJSON(e.url_data_book_ebook, function (data) {
                ebook.all_item=data["all_item"];
                var cats=cr.limitItem(cr.shuffle(ebook.all_item),20);
                ebook.loadListByData(cats);
            });
        }else{
            var cats=cr.limitItem(cr.shuffle(ebook.all_item),20);
            ebook.loadListByData(cats);
        }
    }

    loadListByData(data){
        $("#all_item").html("");
        $.each(data,function(index,book){
            var bookEmp=e.item(book.title,"@"+book.author);
            $(bookEmp).click(function(){
                ebook.show_info(book);
            });
            $("#all_item").append(bookEmp);
        });
    }

    view_all(){
        alert("sdsd");
    }

    show_info(data){
        var Contents=data["contents"];
        var col='col-12';
        cr.top();

        $("#all_box").html('');
        
        var chapter_length=Contents.length;
        if(chapter_length>50) col='col-3';
        else if(chapter_length>22) col='col-4';
        else if(chapter_length>12) col='col-6';
        else col='col-12';
        
        $.each(Contents,function(index,c){
            $("#all_box").append(e.box(c.title,'Chapter '+(index+1),'',col));
        });
        
        var html_body='';
        html_body+='<div class="p-3">'+Contents[0].content+'</div>';
        $("#main_title").html(data.title);
        $("#all_item").html(html_body);
    }
}
var ebook=new Ebook();
e.ebook=ebook;