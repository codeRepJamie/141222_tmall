/**
 * Created by Administrator on 2015/8/31.
 */

var app=angular.module('tmApp',[
    'ngRoute',/*路由*/
    'tmConfig', /*程序设置*/
    'tmService', /*服务*/
    'tmDirective', /*模板与控制器*/
    'tmDataScope', /*数据源*/
    'tmfilter' /*过滤器*/
]);

app.run(['$rootScope','$location','sData','tmSaveData',function($rootScope,$location,sData,tmSaveData){
    $rootScope.data=sData;
    $rootScope.dialogForm=$('#dialog');

    var location=$location.path().replace(/^\//,'');

    $rootScope.isEdit=(!(location=='preview'||location==undefined));
    $rootScope.isEdit=(location=='edit');


    $rootScope.dialogForm.dialog({
        height: window.outerHeight*0.8,
        width: window.outerWidth*0.8,
        autoOpen: false,
        resizable: true,
        modal: true,
        dialogClass: "dialogForm"
    });



    $rootScope.setEdit=function(){
        if ($rootScope.isEdit) {
           return '/subject/141222_tmall/test.html#'+'/preview';
        } else {
           return '/subject/141222_tmall/test.html#'+'/edit';
        }
    };
}]);