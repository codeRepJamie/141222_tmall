/**
 * Created by Administrator on 2015/9/1.
 */
var ajaxHandler=angular.module('tmAjaxHandler',[]);
ajaxHandler.config(function($httpProvider){

    $httpProvider.defaults.transformRequest = function(obj){
        var str = [];
        for(var p in obj){
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };

    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

});
ajaxHandler.factory('tmSaveData',['$http',function($http){
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
                document.location.reload();
            });
    };
}]);
