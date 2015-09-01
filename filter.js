/**
 * Created by Administrator on 2015/9/1.
 */
var filter=angular.module('tmfilter',[]);
filter.filter('toRaw',function(){
    return function(str){
        return str.replace(/(\s+(?!\w))|(\n+)|(<!--[\s\S]*?-->)|(\s*ng-\w+\=\"[\s\S]*?\")|(\s*ng-\w+)|(\s*class=\"(ng-\w+)?\")/g,'');
    }
});