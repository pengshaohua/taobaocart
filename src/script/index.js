class render {
    constructor() {
        this.goodslist = $('.goodslist');
    }
    init() {
        $.ajax({
            url: 'http://10.31.152.56/JS1912/Day%2030-31/taobaocart/php/taobaodata.php',
            dataType: 'json'
        }).done((data) => {
            let $strhtml = '<ul>';
            $.each(data, function (index, value) {
                $strhtml += `
                        <li>
                            <a href="details.html?sid=${value.sid}">
                                <img src="${value.url}">
                                <h4>${value.title}</h4>
                                <p>${value.price}</p>
                            </a>
                        </li>
                    `;
            });
            $strhtml += '</ul>';
            this.goodslist.html($strhtml);
        });
    }
}

export {
    render
}