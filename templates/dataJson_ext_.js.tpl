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
    <!-- {line#1} -->
    'bannerCont':{$remark#0},

    'background':{$remark#1}
    <!-- {/line} -->
},
'bannerHTMLRepeatTemplate':'<li style="width:1920px;height:420px;padding:0px;margin:0px;">\
  <a target="_blank" href="[[url]]" style="padding:0px;margin:0px;"> <img src="[[value]]" width="1920px" height="420px" border="0px" /></a>\
  </li>',
    'backgroundRepeatTemplate':'<div class="page-bg" style="background:url([[value]]) no-repeat fixed center bottom;">&nbsp;</div>',
  bannerHTMLSource:'<div class="J_TWidget" data-widget-config="{\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'taobaoux\'}" data-widget-type="Tabs" style="height:460px;overflow:hidden;">\
    <div class="taobaoux" style="height:420px;">\
      <div class="footer-more-trigger" style="width:1920px;height:420px;top:auto;padding:0px;border:none;left:50%;">\
        <div class="footer-more-trigger sheepTest" style="width:1920px;height:420px;padding:0px;border:none;">\
          <div data-widget-config="{\'contentCls\': \'taobaoux-com\',\'navCls\': \'bbs-taobaoux-com\',\'effect\': \'scrollx\',\'easing\': \'easeOutStrong\',\'prevBtnCls\':\'prev\',\'nextBtnCls\':\'next\',\'autoplay\': true,\'viewSize\':[1920],\'circular\': true}" data-widget-type="Carousel" class="J_TWidget">\
            <div class="J_TWidget prev" data-widget-config="{\'trigger\':\'.ux1920\',\'align\':{\'node\':\'.ux1920\',\'offset\':[-500,0],\'points\':[\'cc\',\'cc\']}}" data-widget-type="Popup" style="display:none;">\
              <div style="width:66px;height:66px;cursor:pointer;color:#F00;background-image:url(http://img.alicdn.com/imgextra/i1/2067413496/TB2AqQNdFXXXXbaXpXXXXXXXXXX_!!2067413496.png)">\
                &nbsp;\
              </div>\
            </div>\
            <div class="J_TWidget next" data-widget-config="{\'trigger\':\'.ux1920\',\'align\':{\'node\':\'.ux1920\',\'offset\':[500,0],\'points\':[\'cc\',\'cc\']}}" data-widget-type="Popup" style="display:none;">\
              <div style="width:66px;height:66px;cursor:pointer;color:#F00;background-image:url(http://img.alicdn.com/imgextra/i3/2067413496/TB2DPcWdFXXXXcPXXXXXXXXXXXX_!!2067413496.png)">\
                &nbsp;\
              </div>\
            </div>\
            <div style="height:420px;width:1920px;overflow:hidden;padding:0px;margin:0px;" class="ux1920">\
              <ul class="taobaoux-com" style="height:420px;width:1920px;padding:0px;margin:0px;">\
                [[bannerHTMLRepeater]]\
              </ul>\
            </div>\
            <div class="footer-more-trigger" style="padding:0px;border:none;left:50%;">\
              <div class="footer-more-trigger" style="width:1920px;height:50px;padding:0px;border:none;left:-960px;background:url(about:blank) repeat;top:505px;">\
                <ul class="bbs-taobaoux-com" style="width:950px;height:50px;margin:0 auto;text-align:center;">\
                  [[bannerHTMLNumberRepeater]]\
                </ul>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
    <ul class="ks-switchable-nav" style="display:none;">\
    </ul>\
</div>',
  bannerHTMLSource2:'<div class="J_TWidget" data-widget-config="{\'navCls\':\'hidden-nav\',\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'bslide_f2z7n\'}" data-widget-type="Tabs">\
  <div class="J_TWidget bslide_f2z7n" style="height:420px" data-widget-config="{\'navCls\':\'hidden-nav\',\'effect\': \'fade\', \'circular\': true ,\'contentCls\':\'bnav_pxRVc\'}" data-widget-type="Tabs">\
  <div style="height:420px;width:1920px;left:-50%;top:0px;margin-left:960px;" class="J_TWidget" data-widget-config="{\'navCls\':\'scroller-nav\',\'contentCls\':\'scroller-content\',\'steps\':1,\'prevBtnCls\': \'prev\',\'nextBtnCls\': \'next\',\'disableBtnCls\': \'disable\',\'circular\':true,\'effect\':\'fade\',\'easing\':\'easeBoth\',\'duration\':1.0,\'interval\':\'4\',\'autoplay\':true}" data-widget-type="Carousel">\
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
  'bannerHTMLNumberRepeatTemplate':'<li class="[[isFirst]]" style="display:inline;margin:0 5px;cursor:pointer;line-height:50px;">\
    <img src="[[url]]" width="120px" height="39px" border="0px" style="vertical-align:middle;margin:5px 0;" />\
    </li>',
    callcenter:{
    <!-- {line#2} -->
    'holiday':{$remark#0},

    'ticket':{$remark#1}
    <!-- {/line} -->},

    'callcenterHTMLRepeatTemplate':'<li><div class="s"><a href="[[url]]" target="_blank">[[value]]<img src="[[pic]]" alt=""/></a></div></li>',
        'callcenterHTMLSource':'<div class="callcenter">\
<div class="head_title">客服中心营业时间</div>\
<p class="head_time">9:00-23:00（节假日不休）</p>\
<a class="gzl_bookmart"\
  href="http://favorite.taobao.com/popup/add_collection_2.htm?id=110278490&itemtype=0&is_tmall="\
  target="_blank"\
  style="background: url(http://img01.taobaocdn.com/imgextra/i1/2067413496/TB2M2SqbpXXXXaSXpXXXXXXXXXX_!!2067413496.png) no-repeat;"></a>\
    <div id="callcenter">\
      <div class="service">\
        <div class="skin_content travel">\
          <h4>旅游度假</h4>\
          <ul id="holidayCont">[[callcenterHolidayRepeater]]</ul>\
            </div>\
        <div class="skin_content ticket">\
          <h4>订房订票</h4>\
          <ul id="ticketCont">[[callcenterTicketHTMLRepeater]]</ul>\
            </div>\
            <p class="tipsText">请认准亮灯客服为您服务。</p>\
        </div>\
    </div>',
    catBox:{
    <!-- {line#3} -->
    'c1':{$remark#0},

    'c2':{$remark#1},

    'c3':{$remark#2},

    'c4':{$remark#3},

    'c5':{$remark#4}
    },
    catBoxHeadName:['{$remark#5}','{$remark#6}','{$remark#7}','{$remark#8}','{$remark#9}'],<!-- {/line} -->
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