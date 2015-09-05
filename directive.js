/**
 * Created by Administrator on 2015/9/1.
 */
var directive=angular.module('tmDirective',[]);

/*directive.directive('tmViewBrand', function() {
    return {
        restrict: 'A',
        templateUrl: 'directive/view/brand.html',
        replace: true
    };
});*/

directive.directive('tmControlModelA1', function() {
    return {
        restrict: 'A',
        templateUrl: 'directive/controller/model_A_1.html',
        replace: true
    };
});

directive.directive('tmControlModelA2', function() {
    return {
        restrict: 'A',
        templateUrl: 'directive/controller/model_A_2.html',
        replace: true
    };
});

directive.directive('tmParent',function() {
    return{
        scope:{
            moduleName:'@tmModName'
        },
        link:function($scope, $element,$attrs){
            $element.append('<div class="editMaskHover hidden"></div>');
        },
        replace:true,
        templateUrl: function(elem, attr){
            return 'directive/view/'+attr.tmModName+'/'+attr.tmModName+'.html';
        },
        controller:function($scope, $element){
            this.moduleName=$scope.moduleName;
            this.module=$rootscope[$scope.moduleName];
            $scope.js_show_dialog=function(){

                $('#dialog').dialog({
                    title:'标题',
                    autoOpen: false,
                    height: 600,
                    width: 990,
                    modal: true,
                    buttons: {
                        "保存": function() {
                            //$( this ).dialog( "close" );
                            /*rawfn&&rawfn();
                            _this.saveSimpleDate.call(_this,name);
                            viewRawCode(this,_this,name);*/
                        },
                        "查看源代码": function() {
                            /*rawfn&&rawfn();
                            viewRawCode(this,_this,name);*/
                        },
                        "设置": function() {
                           /* _this.dialogSetting(name,fn);
                            $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(0)').attr('disabled',false).removeClass('ui-state-disabled');
                            $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(1)').attr('disabled',false).removeClass('ui-state-disabled');
                            $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(2)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');*/
                        },
                        "关闭": function() {
                            /*$( this ).dialog( "close" );*/
                        }
                    },
                    close: function() {

                    }
                });
            }
        }
    }
});


directive.directive('tmElemtaryReapeat',function() {
    return{
        require:'^tmParent',
        scope:{
            itemName:'@tmItemName'
        },
        //scope:false,
        controller:function($scope){
            $scope.$on('reDefinedScope',function(){
                $scope.model=$scope.item.model;
            });
        },
        link:function($scope, $element,$attrs,ctrls){
            $scope.moduleName=ctrls.moduleName;
            $scope.module=ctrls.module;
            $scope.item=$scope.module[$scope.itemName];
            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.itemName+'.html';
            };
            $scope.$broadcast('reDefinedScope');
        },
        replace:true,
        template: '<div ng-include="getContentUrl()"></div>'
    }
});


directive.directive('tmDraggable',function() {
    return {
        restrict : 'A',
        link : function($scope, $element) {
            //using iCheck
            var start=0;
                $($element).sortable({
                    axis: 'y',
                    cursor: "move",
                    start:function(event, ui){
                        start= ui.item.index();
                    },
                    stop:function(event, ui ){
                        $scope.$root.model.movePos(start,ui.item.index());
                        $scope.$apply();
                    }
                });

        }
    }
});
