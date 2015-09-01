/**
 * Created by Administrator on 2015/9/1.
 */
var service=angular.module('tmService',[]);
//保存服务
service.factory('tmSaveData',['$http',function($http){
    return function(data){
        var url="/subject/edit/priceEidtor4.0/edit.ashx";
        var filename='141222_tmall';
        var postData={
            line: 0,
            index: 5,
            value: encodeURI(JSON.stringify(data)),
            remark: 0,
            path:filename
        };
        $http.post(url,postData,'')
            .success(function(){
                var url='/subject/edit/priceEidtor4.0/create.ashx';
                $http.post(url,{ path: filename },'')
                alert('ok');
            })
            .error(function(){
                //document.location.reload();
            });
    };
}]);

//保存服务
service.factory('tmModel',['$http',function($http){
    return function(){
        var scope={};
        scope.module=$rootscope['brand'];
        scope.items=scope.module['hot_search_repeat'];
        scope.model=scope.items.model;
        return scope
    }
}]);