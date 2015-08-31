var dataScope=angular.module('dataScope',[]);
dataScope.factory('tmallData',function(){
    var root={};
    
    root.brand={"config":{"title":"店招","node-type":"parent"},"hot_search_repeat":{"config":{"title":"热搜","node-type":"elemtary-reapeat"},"model":[{"url":"http://www.gzl.com.cn","text":"123","$$hashKey":"object:4"},{"url":"http://www.baidu.com","text":"曾俊明","$$hashKey":"object:5"}]}};
    
    return root;
});