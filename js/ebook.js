class Ebook{

    all_item=null;

    book_cur=null;

    index_chapter_cur=0;

    show_for_home(){
        $("#all_item").html(e.loading());
        if(this.all_item==null){
            $.getJSON(e.url_data_book_ebook, function (data) {
                ebook.all_item=data["all_item"];
                e.list_ebook=ebook.all_item;

                e.list_category=[];
                $.each(e.list_ebook,function(index,ebook){
                    var catObj={"name":ebook.category,"lang":ebook.lang};
                    e.addOrUpdateObjectToList(e.list_category,catObj);
                });

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
        $("#body_title").html("Books you may be interested in");
        $.each(data,function(index,book){
            var bookEmp=e.item(book.title,"@"+book.author);
            $(bookEmp).click(function(){
                e.ebook.book_cur=book;
                ebook.show_info(book);
            });
            $("#all_item").append(bookEmp);
        });
    }

    loadListByMeta(filed,val){
        $("#all_item").html("");
        var is_found=false;
        $.each(this.all_item,function(index,book){
            if(book[filed]!=val) return true;
            var bookEmp=e.item(book.title,"@"+book[filed]);
            $(bookEmp).click(function(){
                e.ebook.book_cur=book;
                ebook.show_info(book);
            });
            $("#all_item").append(bookEmp);
            is_found=true;
        });

        if(!is_found){
            var html='';
            html+='<div class="col-12 text-center mt-3">';
                html+='<p class="font-weight-bold mt-3">Empty list</p>';
                html+='<p class="font-weight-light">There are currently no items in this list, our editorial team is in the process of updating and adding more data.</p>';
                html+='<img src="images/404.png"/>'
            html+='</div>';
            $("#all_item").append(html);
        }
    }

    view_all(){
        var cats=cr.limitItem(cr.shuffle(ebook.all_item),20);
        ebook.loadListByData(cats);
    }

    show_info(data){
        this.index_chapter_cur=0;
        var Contents=data["contents"];
        var col='col-12';
        cr.top();

        $("#all_box").html('');

        var chapter_length=Contents.length;
        if(chapter_length>50) col='col-3';
        else if(chapter_length>22) col='col-4';
        else if(chapter_length>12) col='col-6';
        else col='col-12';

        $("#main_title").html(data.title);
        $("#all_box").append('<div class="col-8">'+data.describe+'</div>');
        $("#all_box").append('<div class="col-4 text-center"><img class="rounded w-100" src="images/icon.png"/><br/><button class="btn  btn-primary m-3" onclick="cr.show_pay();"><i class="fas fa-download"></i> Download Ebook ('+data.title+'.epub)</button></div>');
        $("#all_box").append(e.box('Author',data.author,'fas fa-user-graduate','col-3','images/item_info.png'));
        $("#all_box").append(e.box('Language',data.lang,'fas fa-globe','col-3','images/item_info.png'));
        $("#all_box").append(e.box('Category',data.category,'fas fa-mosque','col-3','images/item_info.png'));
        $("#all_box").append(e.box('Chapter',data.contents.length,'fas fa-swatchbook','col-3','images/item_info.png'));

        $("#all_box").append('<div class="col-12 mt-3"><h6 class="mb-0">Table of contents</h6></div>');

        $.each(Contents,function(index,c){
            var empChapter=null;
            if(index==e.ebook.index_chapter_cur)
                empChapter=e.box(c.title,'Chapter '+(index+1),'fas fa-eye icon_read',col,'images/ebook_chapter.png');
            else
                empChapter=e.box(c.title,'Chapter '+(index+1),'fas fa-eye icon_read',col,'images/chapter_open.png');

            empChapter.attr("id","c_"+index);
            $(empChapter).click(()=>{
                cr.go_to("#body_title",70);
                e.ebook.index_chapter_cur=index;
                e.ebook.show_chapter(index);
                $(empChapter).find("img").attr("src",'images/ebook_chapter.png');
            });
            $("#all_box").append(empChapter);
        });

        
        this.show_chapter(0);
    }

    show_chapter(index){
        var Contents=this.book_cur["contents"];
        var html_body='';
        html_body+='<div class="p-3 col-12">'+Contents[index].content+'</div>';
        html_body+='<div role="button" class="col-6 text-center" onclick="e.ebook.next_chapter();"><i class="fas fa-step-backward text-primary"></i></div>';
        html_body+='<div role="button" class="col-6 text-center" onclick="e.ebook.prev_chapter();"><i class="fas fa-step-forward text-primary"></i></div>';
        $("#body_title").html(Contents[index].title);
        $("#all_item").html(html_body);
        this.reset_icon_chapter();
    }

    next_chapter(){
        cr.go_to("#body_title",70);
        this.index_chapter_cur++;
        this.show_chapter(this.index_chapter_cur);
    }

    prev_chapter(){
        cr.go_to("#body_title",70);
        this.index_chapter_cur++;
        this.show_chapter(this.index_chapter_cur);
    }

    reset_icon_chapter(){
        $(".icon_read").css("color","gray");
        $("#c_"+this.index_chapter_cur).find("i").css("color",cr.color_btn);
    }
}
var ebook=new Ebook();
e.ebook=ebook;