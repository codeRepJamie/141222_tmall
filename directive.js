/**
 * Created by Administrator on 2015/9/1.
 */
var directive=angular.module('tmDirective',[]);

directive.directive('tmViewBrand', function() {
    return {
        restrict: 'A',
        templateUrl: 'directive/view/brand.html',
        replace: true
    };
});

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

directive.directive('tmModTemplate',function() {
    return{
        scope:{
            moduleName:'@tmModName',
            itemName:'@tmItemName'
        },
        link:function($scope, $element,$attrs){
            /*module=$scope.module;
            items=$scope.items;
            url='directive/view/'+module+'_'+items+'.html';*/
            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'_'+$scope.itemName+'.html';
            };
            $scope.model=$scope.items.model
        },
        replace:true,
        template: '<div ng-include="getContentUrl()"></div>',
        controller:function($scope){
            $scope.module=$rootscope[$scope.moduleName];
            $scope.items=$scope.module[$scope.itemName];
            $scope.model=$scope.items.model;
            console.log($scope.module);
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
