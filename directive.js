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
            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.moduleName+'.html';
            };
            //$element.append('<div class="editMaskHover hidden"></div>');
        },
        replace:true,
        transclude: true,
        template: '<div ng-include="getContentUrl()"></div>',
        controller:function($scope, $element){

            /*$element.addEventListener('mouseover',function(){
                $(this).addClass();
            });*/
            $scope.js_show_dialog=function(){
                //console.log($().dialog);

                $('#dialog').dialog({
                    title:'����',
                    autoOpen: false,
                    height: 600,
                    width: 990,
                    modal: true,
                    buttons: {
                        "����": function() {
                            //$( this ).dialog( "close" );
                            /*rawfn&&rawfn();
                            _this.saveSimpleDate.call(_this,name);
                            viewRawCode(this,_this,name);*/
                        },
                        "�鿴Դ����": function() {
                            /*rawfn&&rawfn();
                            viewRawCode(this,_this,name);*/
                        },
                        "����": function() {
                           /* _this.dialogSetting(name,fn);
                            $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(0)').attr('disabled',false).removeClass('ui-state-disabled');
                            $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(1)').attr('disabled',false).removeClass('ui-state-disabled');
                            $(this).siblings('.ui-dialog-buttonpane').find('.ui-button:eq(2)').attr('disabled',true).addClass('ui-state-disabled').removeClass('ui-state-hover ui-state-focus');*/
                        },
                        "�ر�": function() {
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
        //require:'^tmParent',
        scope:{
            moduleName:'@tmModName',
            itemName:'@tmItemName'
        },
        link:function($scope, $element,$attrs){
            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.itemName+'.html';
            };
        },
        replace:true,
        template: '<div ng-include="getContentUrl()"></div>',
        controller:function($scope){
            $scope.module=$rootscope[$scope.moduleName];
            $scope.items=$scope.module[$scope.itemName];
            $scope.model=$scope.items.model;
        }
    }
});


directive.directive('tmDraggable',function() {
    return {
        restrict : 'A',
        link : function($scope, $element,$attrs) {
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
