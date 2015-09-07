/**
 * Created by Administrator on 2015/9/1.
 */
var filter=angular.module('tmfilter',[]);
filter.filter('checkRaw',function(){
    return function(str){
        return str.replace(/(\s+(?!\w))|(\n+)|(<!--[\s\S]*?-->)|(\s*ng-\w+=\"[\s\S]*?\")|(\s*ng-\w+)|(\s*class=\"(ng-\w+)?\"><\/div>)/ig,'').replace('<div class="editMaskHover"','');
    }
});

filter.filter('callcenterImg',function(){
    return function(str){
        console.log(str);
        return 'http://amos.alicdn.com/online.aw?v=2&uid='+encodeURI('广之旅旗舰店:')+encodeURI(str)+'&site=cntaobao&s=2&charset=utf-8';
    }
});

filter.filter('callcenterURL',function(){
    return function(str){
        return 'http://www.taobao.com/webww/ww.php?spm=a1z10.1-b.w5003-9721413899.2.Jr5aTP&amp;ver=3&amp;touid='+encodeURI('广之旅旗舰店:')+encodeURI(str)+'&amp;siteid=cntaobao&amp;status=2&amp;charset=utf-8&amp;scene=taobao_shop';
    }
});