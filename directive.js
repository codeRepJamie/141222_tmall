/**
 * Created by Administrator on 2015/9/1.
 */
var directive=angular.module('tmDirective',[]);

function bindPannel($scope){
    $scope.addItem=function() {
        var item = {};
        for (value in $scope.model) {
            item.value = '';
        }
        $scope.model.push(item);
    };
    $scope.delete=function(i){
        $scope.model.splice(i,1);
    }
};

directive.directive('tmControlModelA1', function() {
    return {
        restrict: 'A',
        scope:{
            moduleName:'@tmModName',
            itemName:'@tmItemName'
        },
        templateUrl: 'directive/controller/model_A_1.html',
        replace: true,
        controller:function($scope,tmModel){
            bindPannel($scope);
            $scope.item=tmModel.getItem($scope.moduleName,$scope.itemName);
            $scope.model=tmModel.getModel($scope.moduleName,$scope.itemName);
        }
    };
});

directive.directive('tmControlModelA2', function() {
    return {
        restrict: 'A',
        templateUrl: 'directive/controller/model_A_2.html',
        replace: true
    };
});

directive.directive('tmParent',function($compile) {
    return{
        scope:{
            moduleName:'@tmModName'
        },
        link:function($scope, $element,$attrs){
            $scope.isHide=true;
            var shadow=angular.element('<div class="editMaskHover" ng-hide="{{isHide}}"></div>');

            $element.css({
                position:'relative',
                cursor:'pointer',
                overflow:'hidden'
            });

            $element.append($compile(shadow)($scope));

            $element.bind('mouseover',function(){

                $scope.isHide=true;
                $scope.$apply();
                $compile(shadow)($scope);
            });

            $element.bind('mouseout',function(){

                $scope.isHide=false;
                $scope.$apply();
                $compile(shadow)($scope);
            });
        },
        replace:true,
        templateUrl: function(elem, attr){
            return 'directive/view/'+attr.tmModName+'/'+attr.tmModName+'.html';
        },
        controller:function($rootScope,$scope, $element,$filter,tmSaveData){
            var scope=$scope;
            this.moduleName=$scope.moduleName;
            $scope.module=this.module=$rootScope.data[$scope.moduleName];

            function setPannel(){
                $rootScope.dialogForm.html($compile(angular.element('<div tm-mod-name="'+scope.moduleName+'" tm-item-name="hot_search_repeat" tm-control-model-A-1></div>'))($scope));
            }

            $element.bind('click',function(){
                setPannel();
                var element=$element;
                $rootScope.dialogForm.dialog("option",{
                    title:'设置'+scope.module.config.title,
                    'buttons':[
                        {
                            text:"保存",
                            click:function(){
                                tmSaveData(scope.module)
                            }
                        },
                        {
                            text:"查看源代码",
                            id:'js-check-raw-bottom',
                            click:function(){
                                $('#js-check-raw-bottom').button("disable");
                                $('#js-setup-bottom').button("enable");
                                $rootScope.dialogForm.dialog("option",'title','查看'+scope.module.config.title+'源代码');
                                $rootScope.dialogForm.html('<textarea class="raw-textarea">'+$filter('checkRaw')(element.html())+'</textarea>');
                            }
                        },
                        {
                            text:"设置",
                            id:'js-setup-bottom',
                            disabled:true,
                            click:function() {
                                $('#js-setup-bottom').button("disable");
                                $('#js-check-raw-bottom').button("enable");
                                $rootScope.dialogForm.dialog("option",'title','设置'+scope.module.config.title);
                                setPannel();
                            }
                        },
                        {
                            text:"关闭",
                            click:function() {
                                $(this).dialog("close");
                            }
                        }
                    ]
                });
                $rootScope.dialogForm.dialog("open");
            })
        }
    }
});


directive.directive('tmElemtaryReapeat',function() {
    return{
        require:'^tmParent',
        scope:{
            itemName:'@tmItemName'
        },
        //tranclude:true,
        controller:function($scope){
            $scope.$on('reDefinedScope',function(){
                $scope.model=$scope.item.model;
            });
            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.itemName+'.html';
            };
        },
        link:function($scope, $element,$attrs,ctrls){
            $scope.moduleName=ctrls.moduleName;
            $scope.module=ctrls.module;
            $scope.item=$scope.module[$scope.itemName];

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
                        //console.log($scope);
                        $scope.model.movePos(start,ui.item.index());
                        //$scope.$root.model.movePos(start,ui.item.index());
                        $scope.$apply();
                    }
                });

        }
    }
});
