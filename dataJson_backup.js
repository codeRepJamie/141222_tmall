var dataJsonConfig={

    headerStyle:{
        
        'searchKeyword':[{"value":"签证","url":"http://cgzl.tmall.com/category-905437805.htm?spm=a1z10.4.w5002-6789938861.3.Q02gun&search=y&catName=%C8%AB%C7%F2%C7%A9%D6%A4"},{"value":"日本","url":"http://cgzl.tmall.com/category-905439019.htm?spm=a1z10.3.0.0.sZipEG&search=y&catName=%C8%D5%B1%BE"},{"value":"台湾","url":"http://cgzl.tmall.com/category-957226595.htm?spm=a1z10.5.0.0.SadFyJ&search=y&catName=%CC%A8%CD%E5"},{"value":"门票","url":"http://cgzl.tmall.com/?spm=a1z10.5.w4011-6789938887.7.feG5Lj&q=%C3%C5%C6%B1&type=p&from=inshophq_6_0&search=y&newHeader_b=s_from&searcy_type=item"}],

        'navWords':[{"value":"HOME首页","url":"http://cgzl.tmall.com/?scene=taobao_shop/"},{"value":"年中大促","url":"http://cgzl.alitrip.com/category-1075577078.htm?spm=a1z10.1-b.0.0.VFXOAx&search=y&catName=%C4%EA%D6%D0%B4%F3%B4%D9"},{"value":"全球签证","url":"http://cgzl.tmall.com/category-905437805.htm"},{"value":"欧洲","url":"http://cgzl.tmall.com/category-981688017.htm?spm=a1z10.5-b.w4011-6789938887.9.58xtvG&search=y#TmshopSrchNav"},{"value":"省内海滩","url":"http://cgzl.tmall.com/category-927118466.htm?spm=a1z10.5-b.0.0.QLhluu&search=y&parentCatId=927118465&parentCatName=%B9%E3%B6%AB%D6%DC%B1%DF%D3%CE&catName=%C9%B3%CC%B2%2F%BA%A3%B5%BA"},{"value":"东南亚","url":"http://cgzl.alitrip.com/category-1069648108.htm?spm=a1z10.5-b.0.0.0Yzsq5&search=y&parentCatId=1006897217&parentCatName=%B3%F6%BE%B3%D7%D4%D3%C9%D0%D0%2F%B8%FA%CD%C5%D3%CE&catName=%B6%AB%C4%CF%D1%C7"},{"value":"香港","url":"http://cgzl.tmall.com/category-906673429.htm?spm=a1z10.5.w5001-8956358692.8.UXxJfI&search=y&catName=%CF%E3%B8%DB&scene=taobao_shop"},{"value":"日本","url":"http://cgzl.tmall.com/category-905439019.htm?spm=a1z10.5-b.w4011-6789938887.16.OcIrCd&search=y#TmshopSrchNav"},{"value":"长隆","url":"http://cgzl.tmall.com/category-984690522.htm?spm=a1z10.5.w5001-8956358692.10.i2M8gM&search=y&scene=taobao_shop#TmshopSrchNav"},{"value":"周边游","url":"http://cgzl.tmall.com/category-945317391.htm?spm=a1z10.1-b.0.0.6bgFuN&search=y&parentCatId=927118465&parentCatName=%B9%E3%B6%AB%D6%DC%B1%DF%D3%CE&catName=%B8%FA%CD%C5%D3%CE"},{"value":"关于我们","url":"http://cgzl.tmall.com/p/rd504540.htm?spm=a1z10.4.w5001-8956358692.12.1KyeiL&scene=taobao_shop"}]
        
    },

    'searchKeywordHTMLRepeatTemplate':'<a href="[[url]]" target="_blank">[[value]]</a>',

    'navWordsHTMLRepeatTemplate':'<li><a href="[[url]]">[[value]]</a></li>',

    'headStyleHTMLSource':'<div class="headerStyle">\
        <div class="header">\
            <a class="logo" href="http://cgzl.alitrip.com/?scene=taobao_shop/"></a>\
            <div class="sform">\
                <form class="focus" name="SearchForm"\
                action="http://cgzl.alitrip.com/?scene=taobao_shop"\
                method="post"><input name="search" type="hidden" value="y">\
                    <div class="keyword"><input class="keyword-input prompt" name="keyword" size="12"></div>\
                    <span class="submit"> \
                    <input class="btn" type="submit" value="  "> </span>\
                    </form>\
                        <div class="keywords">\
                            <div class="keywords_sform">\
                                <div>\
                                    <b class="keywords_title">热搜:</b>\
                                    <span>\
                                        [[searchKeywordHTMLRepeater]]\
                                    </span>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                    <ul class="meun">\
                        [[navWordsHTMLRepeater]]\
                    </ul>\
                </div>',
    banner:{
    
    'bannerCont':[{"value":"http://img04.taobaocdn.com/imgextra/i4/2067413496/TB2rUY4dXXXXXXbXpXXXXXXXXXX_!!2067413496.jpg","url":"http://cgzl.tmall.com/p/tuesday.htm"},{"value":"http://img04.taobaocdn.com/imgextra/i4/2067413496/TB2Nvy9cFXXXXbyXXXXXXXXXXXX_!!2067413496.jpg","url":"http://cgzl.alitrip.com/category-1075577078.htm?spm=a1z10.1-b.w5001-10132340897.8.hNtnns&search=y&catName=%C4%EA%D6%D0%B4%F3%B4%D9&scene=taobao_shop"},{"value":"http://img04.taobaocdn.com/imgextra/i4/2067413496/TB29FzqcpXXXXajXpXXXXXXXXXX_!!2067413496.jpg","url":"http://cgzl.alitrip.com/p/beach.htm"},{"value":"http://img03.taobaocdn.com/imgextra/i3/2067413496/TB2LTBrbVXXXXatXpXXXXXXXXXX_!!2067413496.jpg","url":"http://cgzl.tmall.com/p/visa.htm"}],

    'background':[]
    
},
'bannerHTMLRepeatTemplate':'<li style="width:1920px;height:420px; overflow:hidden;border:none;margin:0;">\
<a target="_blank" href="[[url]]"><img src="[[value]]" /></a>\
</li>',
    'bannerHTMLNumberRepeatTemplate':'<li style="width:20px;height:18px;text-align:center;display:inline-block;*zoom:1;*display:inline;vertical-align:top;cursor:pointer;overflow:hidden;line-height:18px;margin:0 5px;background:#e50112">\
[[value]]\
</li>',
    'backgroundRepeatTemplate':'<div class="page-bg" style="background:url([[value]]) no-repeat fixed center bottom;">&nbsp;</div>',
    'bannerHTMLSource2':'<div class="J_TWidget" data-widget-config="{\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'banner\'}" data-widget-type="Tabs" style="overflow:hidden;">\
    <div class="banner">\
        <div class="sn-simple-logo left">\
            <div class="sn-simple-logo all">\
                <div class="J_TWidget" data-widget-config="{\'contentCls\': \'banner_content\',\'navCls\': \'banner_nav\',\'effect\': \'fade\',\'easing\': \'easeNone\',\'prevBtnCls\':\'banner_prevBtn\',\'nextBtnCls\':\'banner_nextBtn\',\'interval\':\'5\',\'hasTriggers\':false,\'autoplay\':true,\'viewSize\':[1920],\'circular\': true}" data-widget-type="Carousel">\
                    <div class="J_TWidget" data-widget-config="{\'trigger\':\'.banner_trigger\',\'align\':{\'node\':\'.banner_trigger\',\'offset\':[-500,0],\'points\':[\'cc\',\'cc\']}}" data-widget-type="Popup" style="display:none;">\
                        <div class="banner_prevBtn">&nbsp;</div>\
                    </div>\
                    <div class="J_TWidget" data-widget-config="{\'trigger\':\'.banner_trigger\',\'align\':{\'node\':\'.banner_trigger\',\'offset\':[500,0],\'points\':[\'cc\',\'cc\']}}" data-widget-type="Popup" style="display:none;">\
                        <div class="banner_nextBtn">&nbsp;</div>\
                    </div>\
                    <div class="banner_trigger">\
                        <ul class="banner_content">[[bannerHTMLRepeater]]</ul>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    <ul class="ks-switchable-nav" style="display:none;">\
    </ul>\
    [[backgroundHTMLRepeater]]\
    </div>',
    bannerHTMLSource:'<div class="J_TWidget" data-widget-config="{\'navCls\':\'hidden-nav\',\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'bslide_f2z7n\'}" data-widget-type="Tabs">\
    <div class="J_TWidget bslide_f2z7n" style="height:420px" data-widget-config="{\'navCls\':\'hidden-nav\',\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'bnav_pxRVc\'}" data-widget-type="Tabs">\
    <div style="height:420px;width:1920px;left:0px;top:0px;" class="J_TWidget" data-widget-config="{\'navCls\':\'scroller-nav\',\'contentCls\':\'scroller-content\',\'steps\':1,\'prevBtnCls\': \'prev\',\'nextBtnCls\': \'next\',\'disableBtnCls\': \'disable\',\'circular\':true,\'effect\':\'fade\',\'easing\':\'easeBoth\',\'duration\':1.0,\'interval\':\'4\',\'autoplay\':true}" data-widget-type="Carousel">\
<div class="J_TWidget prev" data-widget-type="Popup" data-widget-config="{\'trigger\':\'.popup_pIY6B\',\'align\':{\'node\':\'.popup_pIY6B\',\'offset\':[-445,0],\'points\':[\'cc\',\'cc\']}}" style="cursor:pointer;width:60px;height:60px;background:#e50112 url(http://img02.taobaocdn.com/imgextra/i2/770458061/TB2WUffaXXXXXcQXXXXXXXXXXXX-770458061.gif) no-repeat center center;display:none;*filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);opacity:0.6;">\
&nbsp;\
</div>\
<div class="J_TWidget next" data-widget-type="Popup" data-widget-config="{\'trigger\':\'.popup_pIY6B\',\'align\':{\'node\':\'.popup_pIY6B\',\'offset\':[445,0],\'points\':[\'cc\',\'cc\']}}" style="cursor:pointer;width:60px;height:60px;background:#e50112 url(http://img02.taobaocdn.com/imgextra/i2/770458061/TB2oSbdaXXXXXbyXpXXXXXXXXXX-770458061.gif) no-repeat center center;display:none;*filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);opacity:0.6;">\
&nbsp;\
</div>\
<div class="scroller popup_pIY6B" style="width:1920px; height:420px; overflow:hidden">\
<ul class="scroller-content">\
                        [[bannerHTMLRepeater]]\
                        </ul>\
</div>\
<div class="bnav_pxRVc">\
<ul class="J_TWidget scroller-nav" style="margin-top:6px;bottom:10px;width:1920px;overflow:hidden;text-align:center;left:0;font-family:Tahoma;height:18px;color:#FFF;font-size:10px;" data-widget-type="Compatible" data-widget-config="{\'png\':true,\'png_bg\':true}">\
[[bannerHTMLNumberRepeater]]\
</ul>\
</div>\
</div>\
<ul class="hidden-nav" style="display:none;height:0;line-height:0;font-size:0;overflow:hidden;">\
<li class="ks-active">\
1\
</li>\
</ul>\
</div>\
</div>\
                      </div>',
    callcenter:{
    
    'holiday':[{"value":"叮当"},{"value":"坤坤"},{"value":"大吉"},{"value":"岚岚"},{"value":"米菲"}],

    'ticket':[{"value":"云儿"},{"value":"珊珊"},{"value":"斋斋"}]
    },

    'callcenterHTMLRepeatTemplate':'<li><div class="s"><a href="[[url]]" target="_blank">[[value]]<img src="[[pic]]" alt=""/></a></div></li>',
        'callcenterHTMLSource':'<div class="callcenter">\
<div class="head_title"></div>\
    <div class="service">\
        <div  class="skin_content travel">\
            <h4>旅游度假</h4>\
            <ul>[[callcenterHolidayRepeater]]</ul>\
        </div>\
        <div class="skin_content ticket">\
            <h4>订房订票</h4>\
            <ul>[[callcenterTicketHTMLRepeater]]</ul>\
        </div>\
        <p class="tipsText">请认准亮灯客服为您服务。</p>\
    </div>\
    <div class="announce">\
        <h4>店铺公告</h4>\
        <p>营业时间：9:00-23:00（节假日不休）</p>\
        <a class="gzl_bookmart" href="http://favorite.taobao.com/popup/add_collection_2.htm?id=110278490&itemtype=0&is_tmall=" target="_blank" style="background: url(http://img01.taobaocdn.com/imgextra/i1/2067413496/TB2M2SqbpXXXXaSXpXXXXXXXXXX_!!2067413496.png) no-repeat;"></a>\
    </div>\
    <div class="weixin">\
        <div class="ac ac1">\
            <img src="http://img02.taobaocdn.com/imgextra/i2/2067413496/TB2.eSCbpXXXXb6XXXXXXXXXXXX_!!2067413496.png" alt=""/>\
            <p>微信服务号gzl_online</p>\
        </div>\
        <div class="ac">\
            <img src="http://img04.taobaocdn.com/imgextra/i4/2067413496/TB2lveybpXXXXa.XXXXXXXXXXXX_!!2067413496.png" alt=""/>\
            <p>微信订阅号gzlwxdyh</p>\
        </div>\
    </div>\
</div>',
    catBox:{
    
    'c1':[{"value":"美洲","url":"http://cgzl.tmall.com/category-909289356.htm?spm=a220o.1000855.0.0.Euc022&search=y&catName=%C3%C0%D6%DE"},{"value":"欧洲","url":"http://cgzl.tmall.com/category-1044223952.htm?spm=a1z10.1-b.0.0.saLLR9&search=y&parentCatId=981688017&parentCatName=%C5%B7%D6%DE&catName=%C5%B7%D6%DE%D7%D4%D3%C9%D0%D0"},{"value":"日本","url":"http://cgzl.tmall.com/category-905439019.htm?spm=a1z10.5.0.0.65Qe5d&search=y&catName=%C8%D5%B1%BE"},{"value":"韩国","url":"http://cgzl.tmall.com/category-905434773.htm?spm=a1z10.5.0.0.4HlGzE&search=y&catName=%BA%AB%B9%FA"},{"value":"海岛","url":"http://cgzl.tmall.com/category-906177860.htm?spm=a1z10.5.0.0.RDGj7C&search=y&catName=%B3%F6%BE%B3%BA%A3%B5%BA"},{"value":"泰国","url":"http://cgzl.tmall.com/category-905434729.htm?spm=a1z10.5-b.0.0.UUXVUL&search=y&parentCatId=905434726&parentCatName=%B6%AB%C4%CF%D1%C7&catName=%CC%A9%B9%FA"},{"value":"马来西亚","url":"http://cgzl.tmall.com/category-945317393.htm?spm=a1z10.5-b.0.0.ogSCnf&search=y&parentCatId=905434726&parentCatName=%B6%AB%C4%CF%D1%C7&catName=%C2%ED%C0%B4%CE%F7%D1%C7"}],

    'c2':[{"value":"美签","url":"http://detail.tmall.com/item.htm?spm=a1z10.1-b.w5003-9880563001.6.96z2YI&&id=38602410112&scene=taobao_shop"},{"value":"澳签","url":"http://detail.tmall.com/item.htm?spm=a1z10.1-b.w5003-9880563001.7.96z2YI&id=39428228000&scene=taobao_shop"},{"value":"入台证","url":"http://detail.tmall.com/item.htm?spm=a1z10.1-b.w5003-9880563001.8.96z2YI&id=38754698440&scene=taobao_shop"},{"value":"泰国签证","url":"http://detail.tmall.com/item.htm?spm=a1z10.1-b.w5003-9880563001.9.96z2YI&id=38585443847&scene=taobao_shop"},{"value":"新加坡签证","url":"http://detail.tmall.com/item.htm?spm=a1z10.1-b.w5003-9880563001.10.96z2YI&id=38646953785&rn=6ce2037a157fee2e8dd2e62ee953913b&abbucket=10&scene=taobao_shop"},{"value":"更多签证","url":"http://cgzl.tmall.com/category-905437805.htm?spm=a1z10.1-b.w5003-9880563001.11.96z2YI&catName=%C8%AB%C7%F2%C7%A9%D6%A4&scene=taobao_shop"}],

    'c3':[{"value":"台湾","url":"http://cgzl.tmall.com/category-957226595.htm?spm=a1z10.1-b.w5003-9880563001.14.96z2YI&search=y&catName=%CC%A8%CD%E5&scene=taobao_shop#bd"},{"value":"香港","url":"http://cgzl.tmall.com/category-906673429.htm?spm=a1z10.1-b.w5003-9880563001.12.96z2YI&search=y&catName=%CF%E3%B8%DB&scene=taobao_shop#bd"},{"value":"澳门","url":"http://cgzl.tmall.com/category-945483958.htm?spm=a1z10.1-b.w5003-9880563001.13.96z2YI&search=y&catName=%B0%C4%C3%C5&scene=taobao_shop#bd"}],

    'c4':[{"value":"北京","url":"http://cgzl.tmall.com/category-1010052664.htm?spm=a1z10.1-b.w5003-9880563001.15.96z2YI&search=y&catName=%B1%B1%BE%A9&scene=taobao_shop"},{"value":"厦门","url":"http://cgzl.tmall.com/category-1010085846.htm?spm=a1z10.1-b.w5003-9880563001.16.96z2YI&search=y&catName=%CF%C3%C3%C5&scene=taobao_shop"},{"value":"云南","url":"http://cgzl.tmall.com/category-945320270.htm?spm=a1z10.1-b.0.0.yMDWEs&search=y&catName=%C0%F6%BD%AD"},{"value":"桂林","url":"http://cgzl.tmall.com/category-945320273.htm?spm=a1z10.5-b.0.0.NnPZbB&search=y&catName=%B9%F0%C1%D6"},{"value":"海南","url":"http://detail.tmall.com/item.htm?spm=a1z10.3-b.w4011-6798710441.165.ZBZRHd&id=43948631356&rn=7e639dcfecec9fd648943d0bb9995e37&abbucket=8"}],

    'c5':[{"value":"长隆","url":"http://cgzl.tmall.com/category-984690522.htm?spm=a1z10.1-b.w5003-9880563001.17.96z2YI&search=y&catName=%B3%A4%C2%A1&scene=taobao_shop"},{"value":"酒店","url":"http://cgzl.tmall.com/category-945317389.htm?spm=a1z10.1-b.w5003-9880563001.18.96z2YI&search=y&parentCatId=927118465&parentCatName=%B9%E3%B6%AB%D6%DC%B1%DF%D3%CE&catName=%BE%C6%B5%EA&scene=taobao_shop"},{"value":"沙滩","url":"http://cgzl.alitrip.com/category-927118466.htm?spm=a1z10.1-b.w5001-10132340897.11.oKjDrj&search=y&parentCatId=927118465&parentCatName=%B9%E3%B6%AB%D6%DC%B1%DF%D3%CE&catName=%C9%B3%CC%B2%2F%BA%A3%B5%BA%2F%C6%AF%C1%F7&scene=taobao_shop"}]
    },
    catBoxHeadName:['出境游度假','全球签证','港澳台','国内游','广东周边游'],
'catBoxHTMLRepeatTemplate':'<a target="_blank" href="[[url]]">[[value]]</a>',
    'catBoxHTMLSource':'<div class="cat-child">\
            [[catBoxRepeater]]\
        </div>',
    'catBoxAllHTMLSource':'<div class="cats">\
    <div class="cat-hd">推荐分类</div>\
    <div class="cat-block">\
        <div class="cat-father"> [[c1]]</div>\
        <div class="cat-child">\
            [[catBox1Repeater]]\
        </div>\
    </div>\
    <div class="line">&nbsp;</div>\
    <div class="cat-block WL03cat-block-1">\
        <div class="cat-father">\
             [[c2]]\
        </div>\
        <div class="cat-child">\
            [[catBox2Repeater]]\
        </div>\
    </div>\
    <div class="line" style="">\
        &nbsp;\
    </div>\
    <div class="cat-block WL03cat-block-2">\
        <div class="cat-father">\
             [[c3]]\
        </div>\
        <div class="cat-child">\
            [[catBox3Repeater]]\
        </div>\
    </div>\
    <div class="line">&nbsp;</div>\
    <div class="cat-block WL03cat-block-3">\
        <div class="cat-father"> [[c4]]</div>\
        <div class="cat-child">\
            [[catBox4Repeater]]\
        </div>\
    </div>\
    <div class="line">&nbsp;</div>\
    <div class="cat-block WL03cat-block-4">\
        <div class="cat-father"> [[c5]]</div>\
        <div class="cat-child">\
            [[catBox5Repeater]]\
        </div>\
    </div>\
</div>'
};

function addition() {
    (function () {
        for (var attr in dataJsonConfig.callcenter) {
            for (var i = 0; i < dataJsonConfig.callcenter[attr].length; i++) {
                dataJsonConfig.callcenter[attr][i].url = serviceUrL(dataJsonConfig.callcenter[attr][i].value);
                dataJsonConfig.callcenter[attr][i].pic = servicePicUrL(dataJsonConfig.callcenter[attr][i].value);
            }
        }
    })();
}

addition();

function serviceUrL(id){
    return 'http://www.taobao.com/webww/ww.php?spm=a1z10.1.w8546172-8375924973.7.P7nA5Y&ver=3&touid=%E5%B9%BF%E4%B9%8B%E6%97%85%E6%97%97%E8%88%B0%E5%BA%97:'+encodeURI(id)+'&siteid=cntaobao&status=2&charset=utf-8';
}
function servicePicUrL(id){
    return 'http://amos.im.alisoft.com/online.aw?v=2&uid=%E5%B9%BF%E4%B9%8B%E6%97%85%E6%97%97%E8%88%B0%E5%BA%97:'+encodeURI(id)+'&site=cntaobao&s=2&charset=utf-8';
}