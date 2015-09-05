/**
 * Created by Administrator on 2015/9/1.
 */
var service=angular.module('tmService',[]);
//�������
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
                $http.post(url,{ path: filename },'');
                alert('ok');
            })
            .error(function(){
                //document.location.reload();
            });
    };
}]);

//Model_A_1
service.factory('tmModel',function($rootScope){
    return {
        getItem:function(mod,item){
            return $rootScope.data[mod][item];
        },
        getModel:function(mod,item){
            return $rootScope.data[mod][item]['model'];
        }
    }
});
