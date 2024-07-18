class Ebook_Author{

    list_author=null;

    show(){
        this.list_author=[];
        $("#all_box").html("");
        console.log(e.list_category);
        $.each(e.list_ebook, function (index, ebook) {
            var authorObj={name:ebook.author,lang:ebook.lang};
            e.addOrUpdateObjectToList(e.author.list_author,authorObj);
        });

        $.each(this.list_author,function(index,a){
            var empAuthor=e.box(a.name,a.amount+" Book","fas fa-user",'col-4','images/author_pen.png');
            $(empAuthor).click(function(){
                e.author.show_info(a);
            });
            $("#all_box").append(empAuthor);
        });
    }

    show_info(author){
        $("#main_title").html(author.name);
        $("#all_box").html("");
        $.each(author,function(k,v){
            $("#all_box").append(e.box(k,v));
        });
        e.ebook.loadListByMeta("author",author.name);
    }
}

var ebook_author=new Ebook_Author();
e.author=ebook_author;