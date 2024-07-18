class Eread{

    url_data_book_ebook="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook.json";
    url_data_book_category="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook_category.json";

    list_ebook=null;
    list_category=null;
    list_author=null;
    list_year=null;

    onLoad(){
        cr.onLoad();
        cr.setSiteName("ERead");
        cr.setColor("#007bff");
        cr.setSiteUrl("https://kurotsmile.github.io/ERead");
        cr.loadJs("js/ebook_category.js","ebook_category","show_for_home");
        cr.loadJs("js/ebook.js","ebook","show_for_home");
        cr.add_btn_top();
    }

    show_home(){
        cr.top();
        ebook_category.show_for_home();
        ebook.show_for_home();
    }

    box(name='Box Name',tip='',icon='',col='col-3',url_img='images/author.png'){
        if(icon!='') icon='<i class="fas '+icon+'" style="color:#007bff"></i> ';
        var box_obj=$(`
            <div role="button" class="media text-muted pt-3 ${col}">
                <img style="width:50px" src="${url_img}" alt="${name}" class="mr-2 rounded">
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">${icon} ${name}</strong>
                ${tip}
                </p>
            </div>
            `);
        return box_obj;
    }

    item(name='Name Book',author='@Carrot',tip=''){
        var itemEmp=$(`
            <div role="button" class="media text-muted pt-3 col-6">
                <img style="width:50px" src="images/ebook2.png" alt="${name}" class="mr-2 rounded">
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">${name}</strong>
                            <a href="#" onclick="return false;">Read Now</a>
                        </div>
                        <span class="d-block">${author}</span>
                        ${tip}
                </div>
            </div> 
        `);
        return itemEmp;
    }

    show_author(){
        cr.loadJs("js/ebook_author.js","ebook_author","show");
    }

    show_year(){
        cr.loadJs("js/ebook_year.js","ebook_year","show");
    }

    show_pp(){
        $("#all_box").html(this.loading());
        $("#main_title").html("Privacy Policy");
        cr.top();
        cr.show_pp("#all_box");
        ebook.show_for_home();
    }

    show_tos(){
        $("#all_box").html(this.loading());
        $("#main_title").html("Terms Of Service");
        cr.top();
        cr.show_tos("#all_box");
        ebook.show_for_home();
    }

    show_about(){
        $("#all_box").html(this.loading());
        $("#main_title").html("Terms Of Service");
        cr.get("about/en.html",(data)=>{
            $("#all_box").html(data);
            e.ebook.show_for_home();
            cr.top();
        });
    }

    loading(){
        return '<div class="col-12 text-center pt-1 pm-1"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    }

    addOrUpdateObjectToList(list_obj, data_obj_add) {
        var addedOrUpdate = false;
        for (var i = 0; i < list_obj.length; i++) {
            if (list_obj[i].name === data_obj_add.name && list_obj[i].lang === data_obj_add.lang) {
                list_obj[i].amount = (list_obj[i].amount || 0) + 1;
                addedOrUpdate = true;
                break;
            }
        }

        if (!addedOrUpdate) {
            data_obj_add.amount=1;
            list_obj.push(data_obj_add);
        }
    }
}

var e;

$(document).ready(function(){
    e=new Eread();
    e.onLoad();
})
