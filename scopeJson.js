var dataScope=angular.module('tmDataScope',[]);
dataScope.factory('sData',function(){
    var root={};
    
    root.brand={"config":{"title":"店招","node-type":"parent"},"hot_search_repeat":{"config":{"title":"热搜","node-type":"elemtary-reapeat"},"model":[{"url":"http://www.baidu.com","text":"韩国","$$hashKey":"object:5"},{"value":"","$$hashKey":"object:7","text":"中国","url":"http://www.baidu.com"},{"url":"http://www.gzl.com.cn","text":"日本5555","$$hashKey":"object:4"},{"value":"","$$hashKey":"object:13","text":"美国","url":"http://zt.gzl.com.cn/subject/150804_korea/index.htm"},{"value":"","$$hashKey":"object:11","text":"444444444","url":"http://abc.com"}]}};
    
    return root;
});