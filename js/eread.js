class Eread{

    url_data_book_ebook="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook.json";
    url_data_book_category="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/ebook_category.json";

    onLoad(){
        cr.loadJs("js/ebook_category.js","ebook_category","show_for_home");
    }

    box(name='@username',tip='Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',icon=''){
        if(icon!='') icon='<i class="fas '+icon+'"></i> ';
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
}

var e;

$(document).ready(function(){
    e=new Eread();
    e.onLoad();
})
