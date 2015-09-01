/**
 * Created by Administrator on 2015/8/31.
 */

var app=angular.module('tmApp',[
    'tmConfig', /*ajax方法库*/
    'tmService', /*ajax方法库*/
    'tmDirective', /*ajax方法库*/
    'tmDataScope', /*加载数据库*/
    'tmController' /*加载数据库*/
]);

app.run(['$rootScope','sData',function($rootScope,sData){
    $rootscope=sData;
}]);