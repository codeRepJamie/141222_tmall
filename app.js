/**
 * Created by Administrator on 2015/8/31.
 */

var app=angular.module('tmApp',[
    'ngRoute',
    'tmConfig', /*ajax方法库*/
    'tmService', /*ajax方法库*/
    'tmDirective', /*ajax方法库*/
    'tmDataScope', /*加载数据库*/
    'tmController', /*加载数据库*/
    'tmfilter' /*加载数据库*/
]);

app.run(['$rootScope','$location','sData','tmSaveData',function($rootScope,$location,sData,tmSaveData){
    $rootScope.data=sData;
    $rootScope.dialogForm=$('#dialog');

    var location=$location.path().replace(/^\//,'');

    $rootScope.isEdit=(!location=='preview');


    $rootScope.dialogForm.dialog({
        height: window.outerHeight*0.8,
        width: window.outerWidth*0.8,
        autoOpen: false,
        resizable: true,
        modal: true,
        dialogClass: "dialogForm",
        open: function( event, ui ) {
            //console.dir($(this).context);
        },
        position: { my: "center center", at: "center center" }
    });

    $rootScope.setEdit=function(){
        $rootScope.isEdit=!$rootScope.isEdit;
    }

}]);