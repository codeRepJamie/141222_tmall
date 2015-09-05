var dataScope=angular.module('tmDataScope',[]);
dataScope.factory('sData',function(){
    var root={};
    
    root.headerStyle={"config":{"title":"店招","node-type":"parent"},"hot_search_repeat":{"config":{"title":"热搜123567","node-type":"elemtary-reapeat"},"model":[{"value":"","$$hashKey":"object:7","text":"123888","url":"4569999999"},{"value":"","$$hashKey":"object:12","text":"改改个7777222","url":"硕士生123"},{"url":"http://www.baidu.com","text":"韩国","$$hashKey":"object:5"}]},"menu_repeat":{"config":{"title":"导航栏","node-type":"elemtary-reapeat","max":10},"model":[{"url":"http://www.baidu.com","text":"首页","$$hashKey":"object:5"},{"value":"","$$hashKey":"object:7","text":"签证","url":"4569999999"},{"value":"","$$hashKey":"object:12","text":"环球卡","url":"硕士生123"},{"value":"","$$hashKey":"object:13","text":"出境","url":"123"},{"value":"","$$hashKey":"object:15","text":"导航","url":"66666"},{"value":"","$$hashKey":"object:11","text":"国内","url":"http://abc.com"}]}};
    
    return root;
});