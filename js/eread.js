class Eread{

    url_data_book_ebook="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook.json";
    url_data_book_category="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook_category.json";

    onLoad(){
        cr.loadJs("js/ebook_category.js","ebook_category","show_for_home");
        cr.loadJs("js/ebook.js","ebook","show_for_home");
    }

    box(name='@username',tip='Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',icon=''){
        if(icon!='') icon='<i class="fas '+icon+'" style="color:#007bff"></i> ';
        var box_obj=$(`
            <div role="button" class="media text-muted pt-3 col-3">
                <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">${icon}${name}</strong>
                ${tip}
                </p>
            </div>
            `);
        return box_obj;
    }

    item(name='Full Name',author='@Carrot'){
        var itemEmp=$(`
            <div class="media text-muted pt-3 col-6">
                <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">${name}</strong>
                        <a href="#">Read Now</a>
                        </div>
                        <span class="d-block">${author}</span>
                </div>
            </div> 
        `);
        return itemEmp;
    }
}

var e;

$(document).ready(function(){
    e=new Eread();
    e.onLoad();
})
