var dataJsonConfig={

    headerStyle:{
        <!-- {line#0} -->
        'searchKeyword':{$remark#0},

        'navWords':{$remark#1}
        <!-- {/line} -->
    },

    'searchKeywordHTMLRepeatTemplate':'<a href="[[url]]" target="_blank">[[value]]</a>',

    'navWordsHTMLRepeatTemplate':'<li><a href="[[url]]">[[value]]</a></li>',

    'headStyleHTMLSource':'<div class="headerStyle">\
        <div class="header">\
            <a class="logo" href="http://cgzl.tmall.com/?scene=taobao_shop/"></a>\
            <div class="sform">\
                <form class="focus" name="SearchForm"\
                action="http://cgzl.tmall.com/?scene=taobao_shop"\
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
    <!-- {line#1} -->
    'bannerCont':{$remark#0},

    'background':{$remark#1}
    <!-- {/line} -->
},
'bannerHTMLRepeatTemplate':'<li class="-_-switchable-panel-internal827 ks-switchable-panel-internal823">\
<a href="[[url]]" style="padding:0px;margin:0px;" target="_blank"> \
    <img border="0" height="420" src="[[value]]" width="1920"/></a>\
</li>',
    'backgroundRepeatTemplate':'<div class="page-bg" style="background:url[[value]]) no-repeat fixed center bottom;">&nbsp;</div>',
    'bannerHTMLSource':'<div class="J_TWidget" data-widget-config="{\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'banner\'}" data-widget-type="Tabs" style="overflow:hidden;">\
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
        [[backgroundHTMLRepeater]]\
    </div>\
    <ul class="ks-switchable-nav" style="display:none;">\
    </ul>\
    </div>',
    callcenter:{
    <!-- {line#2} -->
    'holiday':{$remark#0},

    'ticket':{$remark#1},
    <!-- {/line} -->},

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