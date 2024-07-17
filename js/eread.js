class Eread{

    url_data_book_ebook="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook.json";
    url_data_book_category="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook_category.json";

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

    box(name='@username',tip='Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',icon='',col='col-3'){
        if(icon!='') icon='<i class="fas '+icon+'" style="color:#007bff"></i> ';
        var box_obj=$(`
            <div role="button" class="media text-muted pt-3 ${col}">
                <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">${icon}${name}</strong>
                ${tip}
                </p>
            </div>
            `);
        return box_obj;
    }

    item(name='Full Name',author='@Carrot',tip=''){
        var itemEmp=$(`
            <div role="button" class="media text-muted pt-3 col-6">
                <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">${name}</strong>
                            <a href="#">Read Now</a>
                        </div>
                        <span class="d-block">${author}</span>
                        ${tip}
                </div>
            </div> 
        `);
        return itemEmp;
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
}

var e;

$(document).ready(function(){
    e=new Eread();
    e.onLoad();
})
