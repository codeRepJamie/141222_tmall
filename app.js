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
    changeEdit();
    $rootScope.data=sData;
    $rootScope.dialogForm=$('#dialog');

    var location=$location.path().replace(/^\//,'');

    $rootScope.isEdit=(!(location=='preview'||location==undefined));
    $rootScope.isEdit=(location=='edit');

    /*$rootScope.jsCode='//g.alicdn.com/??kissy/k/1.4.2/seed-min.js,mui/seed/1.3.0/seed.js,mui/globalmodule/3.0.22/seed.js,mui/btscfg-g/3.0.0/index.js,mui/bucket/3.0.4/index.js,mui/globalmodule/3.0.22/global-mod-pc.js,mui/globalmodule/3.0.22/global-mod.js,mui/global/1.3.10/global-pc.js,mui/global/1.3.10/global.js,tm/shop/3.1.39/app.js,tm/shop/3.1.39/page/shop.js';
    $rootScope.jsCode='http:\/\/www.gzl.com.cn\/';*/

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
        if ($rootScope.isEdit) {
            //console.log($location.absUrl());
           return '/subject/141222_tmall/test.html#'+'/preview';
        } else {
           return '/subject/141222_tmall/test.html#'+'/edit';
        }
    };
    function changeEdit() {
        if ($rootScope.isEdit) {

        }else{

        }

    }
}]);