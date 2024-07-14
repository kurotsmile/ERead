class Ebook{

    all_item=null;

    show_for_home(){
        $("#all_item").html("Loading..");
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
                Swal.fire({
                    title:"Ebook",
                    Text:book.title
                })
            });
            $("#all_item").append(bookEmp);
        });
    }

    view_all(){
        alert("sdsd");
    }
}
var ebook=new Ebook();
e.ebook=ebook;