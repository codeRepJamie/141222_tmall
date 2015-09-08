/**
 * Created by Administrator on 2015/9/1.
 */
var filter=angular.module('tmfilter',[]);
filter.filter('checkRaw',function(){
    return function(str){
        /*return str.replace(/(\s+(?!\w))|(\n+)|(<!--[\s\S]*?-->)|(\s*ng-\w+=\"[\s\S]*?\")|(\s*ng-\w+)|(\s*class=\"(ng-\w+)?\"><\/div>)|(position:\s*absolute;*)/ig,'').replace(/<div style=\"height:\d+px\" class=\"editMaskHover hidden\"><\/div>/ig,'').replace(/data-widget-type=\"Popup\" style=\"[a-z0-9:;\s-]+\"\s*!/ig,'data-widget-type=\"Popup\" style=\"display:none\" ').replace(/J_TWidget (\w+) hidden tb-shop-popup-show/ig,function($1,$2){
            return 'J_TWidget '+$2;
        }).replace(/class=\"footer-more-trigger ks-switchable-panel-internal\d+\" style=\"[a-z0-9]+\"\s*!/ig,'class=\"footer-more-trigger\" style=\"padding:0px;border:none;left:50%;\" ');*/
        return str.replace(/(\s+(?!\w))|(\n+)|(<!--[\s\S]*?-->)|(\s*ng-\w+=\"[\s\S]*?\")|(\s*ng-\w+)|(\s*class=\"(ng-\w+)?\"><\/div>)|(position:\s*absolute;*)/ig,'').replace(/<div style=\"height:\d+px\" class=\"editMaskHover hidden\"><\/div>/ig,'');
    }
});

filter.filter('callcenterImg',function(){
    return function(str){
        return 'http://amos.alicdn.com/online.aw?v=2&uid='+encodeURI('广之旅旗舰店:')+encodeURI(str)+'&site=cntaobao&s=2&charset=utf-8';
    }
});

filter.filter('callcenterURL',function(){
    return function(str){
        return 'http://www.taobao.com/go/market/webww/ww.php?spm=a1z10.1-b.w5003-9721413899.2.4t0eHv&ver=3&touid='+encodeURI('广之旅旗舰店:')+encodeURI(str)+'&amp;siteid=cntaobao&amp;status=2&amp;charset=utf-8&amp;scene=taobao_shop';
    }
});