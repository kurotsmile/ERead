class Ebook{

    all_item=null;

    book_cur=null;

    index_chapter_cur=0;

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

    loadListByCat(id_cat){
        $("#all_item").html("");
        $.each(this.all_item,function(index,book){
            if(book.category!=id_cat) return true;
            var bookEmp=e.item(book.title,"@"+book.author);
            $(bookEmp).click(function(){
                e.ebook.book_cur=book;
                ebook.show_info(book);
            });
            $("#all_item").append(bookEmp);
        });
    }

    view_all(){
        var cats=cr.limitItem(cr.shuffle(ebook.all_item),20);
        ebook.loadListByData(cats);
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

        $("#main_title").html(data.title);
        $("#all_box").append('<div class="col-8">'+data.describe+'</div>');
        $("#all_box").append('<div class="col-4 text-center"><img class="rounded w-100" src="images/icon.png"/><br/><button class="btn  btn-primary m-3" onclick="cr.show_pay();"><i class="fas fa-download"></i> Download Ebook ('+data.title+'.epub)</button></div>');
        $("#all_box").append(e.box('Author',data.author,'fas fa-user-graduate'));
        $("#all_box").append(e.box('Language',data.lang,'fas fa-globe'));
        $("#all_box").append(e.box('Category',data.category,'fas fa-mosque'));
        $("#all_box").append(e.box('Chapter',data.contents.length,'fas fa-swatchbook'));

        $("#all_box").append('<div class="col-12 mt-3"><h6 class="mb-0">Table of contents</h6></div>');

        $.each(Contents,function(index,c){
            var empChapter=e.box(c.title,'Chapter '+(index+1),'fas fa-eye icon_read',col);
            $(empChapter).click(()=>{
                e.ebook.show_chapter(index);
            });
            $("#all_box").append(empChapter);
        });

        this.index_chapter_cur=0;
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
    }

    next_chapter(){
        this.index_chapter_cur++;
        this.show_chapter(this.index_chapter_cur);
        this.reset_icon_chapter();
    }

    prev_chapter(){
        this.index_chapter_cur++;
        this.show_chapter(this.index_chapter_cur);
        this.reset_icon_chapter();
    }

    reset_icon_chapter(){
        $(".icon_read").css("color","black");
    }
}
var ebook=new Ebook();
e.ebook=ebook;