/**
 * Created by Administrator on 2015/8/31.
 */
var app=angular.module('gzlTmall',[
    'dataScope', /*加载数据库*/
    'ajaxHandler' /*ajax方法库*/
]);

app.run(['$rootScope','tmallData',function($rootScope,tmallData){
    $rootscope=tmallData;
}]);

app.controller('Model_A_1',['$scope','SaveData',function($scope,SaveData){
    $scope.module=$rootscope.brand;
    $scope.items=$scope.module.hot_search_repeat;
    $scope.model=$scope.items.model;
    $scope.save=function(){
        SaveData($scope.module);
    }
}]);
