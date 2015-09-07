/**
 * Created by Administrator on 2015/8/31.
 */

var app=angular.module('tmApp',[
    'tmConfig', /*ajax方法库*/
    'tmService', /*ajax方法库*/
    'tmDirective', /*ajax方法库*/
    'tmDataScope', /*加载数据库*/
    'tmController', /*加载数据库*/
    'tmfilter' /*加载数据库*/
]);

app.run(['$rootScope','sData','tmSaveData',function($rootScope,sData,tmSaveData){
    $rootScope.data=sData;
    $rootScope.dialogForm=$('#dialog');

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
    /*$rootScope.dialogForm.dialog({
        title:'标题',
        autoOpen: false,
        height: 600,
        width: 990,
        modal: true,
        buttons: {
            "保存":function(){
                $(this).dialog("close");
                tmSaveData(tmCache.module)
            },
            "查看源代码": function() {
                //$rootScope.dialogForm.html('<textarea class="raw-textarea">'+$filter('checkRaw')($element.html())+'</textarea>');
            },
            "设置": function() {
                /!* _this.dialogSetting(name,fn);
                 $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(0)').attr('disabled',false).removeClass('ui-state-disabled');
                 $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(1)').attr('disabled',false).removeClass('ui-state-disabled');
                 $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(2)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');*!/
            },
            "关闭": function() {
                $(this).dialog("close");
            }
        },
        close: function() {

        }
    });*/

}]);