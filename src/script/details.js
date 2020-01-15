;
(function ($) {
    class Details {
        constructor() {
            //接收sid
            this.sid = location.search.substring(1).split('=')[1];
            this.spic = $('#spic');
            this.bpic = $('#bpic');
            this.sf = $('#sf');
            this.bf = $('#bf');
            this.list = $('#list');
            this.list_ul = $('#list ul');
            this.count = $('#count');
        }

        init() {
            //将接收的sid传给后端。
            $.ajax({
                url: 'http://10.31.152.56/JS1912/Day%2030-31/taobaocart/php/getsid.php',
                data: {
                    sid: this.sid
                },
                dataType: 'json'
            }).done((objdata) => {
                $('#spic img').attr('src', objdata.url);
                $('.loadtitle').html(objdata.title);
                $('.loadpcp').html(objdata.price);

                let piclist = objdata.urls.split(',');
                let $strhtml = '';
                $.each(piclist, function (index, value) {
                    $strhtml += `<li><img src="${value}" /></li>`;
                });

                this.list_ul.html($strhtml)

            });
            //执行添加购物车操作
            this.addcart();
        }
        //添加购物车操作
        addcart() {
            let goodsnum = []; //商品的数量
            let goodsid = []; //商品的编号
            //cartnum  cartsid:本地存储的key值
            function getcookie() {
                if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                    goodsnum = localStorage.getItem('cartnum').split(',');
                    goodsid = localStorage.getItem('cartsid').split(',');
                }
            }
            $('.p-btn a').on('click', () => {
                getcookie();
                if ($.inArray(this.sid, goodsid) === -1) { //第一次点击,将sid传入，取到数量直接传入
                    goodsid.push(this.sid);
                    localStorage.setItem('cartsid', goodsid); //存入sid
                    goodsnum.push(this.count.val());
                    localStorage.setItem('cartnum', goodsnum); //存入数量
                } else {
                    let index = $.inArray(this.sid, goodsid); //当前sid在数组中对应的位置
                    let newnum = parseInt(goodsnum[index]) + parseInt(this.count.val()); //原来存储的值+当前的值
                    goodsnum[index] = newnum; //新的数量
                    localStorage.setItem('cartnum', goodsnum); //存入数量
                }
            });
        }
    }
    new Details().init();
})(jQuery);



/* 
1.$.inArray(value,array,[fromIndex])确定第一个参数在数组中的位置，从0开始计数(如果没有找到则返回 -1 )。




*/