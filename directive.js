/**
 * Created by Administrator on 2015/9/1.
 */
var directive=angular.module('tmDirective',[]);

/*function hashRandom(num){
    var str='';
    for(var i=0;i<num;i++){
        str+='._0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(Math.floor(Math.random()*64),1);
    }
    return str;
}*/

function bindPannel($scope,$element,$compile){
    $scope.editItem=function(index){
        var controller='<div tm-sub-list-control-model tm-mod-name="'+$scope.moduleName+'" tm-item-name="'+$scope.itemName+'" tm-sub-list-index="'+index+'" tm-model-controller="'+$scope.item['config']['model']['sub_item_repeat']['config']['controller']+'"></div>';
        $element.html('').html($compile(angular.element(controller))($scope));
    };
    $scope.addItem=function() {
        if($scope.model[0]&&!$scope.item.config.max||($scope.model.length<$scope.item.config.max || alert('最多不能超过'+$scope.item.config.max+'项！'))){
            var newModel = $.extend(/*true,*/{}, $scope.item.config.model);
            $scope.model.push(newModel);
        }
    };
    $scope.delete=function(i){
        $scope.model.splice(i,1);
    };
    $scope.return=function(){
        //console.log($scope);
        var controller='<div tm-control-model tm-mod-name="'+$scope.moduleName+'" tm-item-name="'+$scope.itemName+'" tm-model-controller="'+$scope.module[$scope.itemName]['config']['controller']+'"></div>';
        console.log(controller);
        $element.html('').html($compile(angular.element(controller))($scope));
    };
}

directive.directive('tmSubListControlModel', function() {
    return {
        restrict: 'A',
        scope:{
            moduleName:'@tmModName',
            itemName:'@tmItemName',
            repeatIndex:'@tmSubListIndex'
        },
        templateUrl: function(elem, attr){
            return 'directive/controller/model_'+attr.tmModelController+'.html'
        },
        replace: true,
        controller:function($scope,tmModel,$element,$compile){
            $scope.module=tmModel.getModule($scope.moduleName);
            $scope.item=tmModel.getItem($scope.moduleName,$scope.itemName)['model'][$scope.repeatIndex]['sub_item_repeat'];
            $scope.model=$scope.item.model;
            $scope.isSub=true;
            bindPannel($scope,$element,$compile);
        }
    };
});


directive.directive('tmControlModel', function() {
    return {
        restrict: 'A',
        scope:{
            moduleName:'@tmModName',
            itemName:'@tmItemName'
        },
        templateUrl: function(elem, attr){
            return 'directive/controller/model_'+attr.tmModelController+'.html'
        },
        replace: true,
        controller:function($scope,tmModel,$element,$compile){
            $scope.item=tmModel.getItem($scope.moduleName,$scope.itemName);
            $scope.model=tmModel.getModel($scope.moduleName,$scope.itemName);
            bindPannel($scope,$element,$compile);
        }
    };
});

directive.directive('tmParent',function($compile) {
    return{
        scope:{
            moduleName:'@tmModName'
        },
        link:function($scope, $element,$attrs,$rootScope){
            $scope.isHide=true;
            var shadow=angular.element('<div style="height:'+getComputedStyle($element[0])['height']+'" class="editMaskHover hidden"></div>');

            $element.css({
                cursor:'pointer'
            });

            $element.addClass('tm-parent tm-'+$scope.moduleName);

            $element.append($compile(shadow)($scope));


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
                var controller='';
                $rootScope.dialogForm.html('');

                if(scope.module.hasOwnProperty){
                    for(item in scope.module){
                        if(item!='config'&& scope.module.hasOwnProperty(item)){
                            controller+='<div tm-control-model tm-mod-name="'+scope.moduleName+'" tm-item-name="'+item+'" tm-model-controller="'+scope.module[item]['config']['controller']+'"></div>';
                        }
                    }
                }
                //console.log(controller);
                $rootScope.dialogForm.html($compile(angular.element(controller))($scope));
                //$rootScope.dialogForm.html($compile(angular.element('<div tm-mod-name="'+scope.moduleName+'" tm-item-name="hot_search_repeat" tm-control-model-A-1></div>'))($scope));
            }

            $element.bind('click',function(e){
                e.stopPropagation();

                if($rootScope.isEdit) {
                    setPannel();
                    var element = $element;
                    $rootScope.dialogForm.dialog("option", {
                        title: '设置' + scope.module.config.title,
                        'buttons': [
                            {
                                text: "保存",
                                click: function () {
                                    tmSaveData(scope.module, scope.module.config.data_num);
                                    $(this).dialog("close");
                                    //location.reload();
                                }
                            },
                            {
                                text: "查看源代码",
                                id: 'js-check-raw-bottom',
                                click: function () {
                                    $('#js-check-raw-bottom').button("disable");
                                    $('#js-setup-bottom').button("enable");
                                    $rootScope.dialogForm.dialog("option", 'title', '查看' + scope.module.config.title + '源代码');
                                    $rootScope.dialogForm.html('<textarea class="raw-textarea">' + $filter('checkRaw')(element.html()) + '</textarea>');
                                }
                            },
                            {
                                text: "设置",
                                id: 'js-setup-bottom',
                                disabled: true,
                                click: function () {
                                    $('#js-setup-bottom').button("disable");
                                    $('#js-check-raw-bottom').button("enable");
                                    $rootScope.dialogForm.dialog("option", 'title', '设置' + scope.module.config.title);
                                    setPannel();
                                }
                            },
                            {
                                text: "关闭",
                                click: function () {
                                    $(this).dialog("close");
                                }
                            }
                        ]
                    });
                    $rootScope.dialogForm.dialog("open");
                }
            });

            $element.bind('mouseover',function(){
                //console.log($rootScope.isEdit);
                if($rootScope.isEdit){
                    $(this).find('.editMaskHover').removeClass('hidden');
                }
            });

            $element.bind('mouseout',function(){
                if($rootScope.isEdit){
                    $(this).find('.editMaskHover').addClass('hidden');
                }
            });

        }
    }
});


directive.directive('tmElemtaryRepeat',function() {
    return{
        //require:['^tmParent','?^tmItemReapeat'],
        require:'^tmParent',
        scope:{
            itemName:'@tmItemName',
            itemView:'@tmItemView',
            parentName:'@tmParentName',
            repeatIndex:'=tmRepeatIndex'
        },
        //tranclude:true,
        controller:function($scope){
            var _this=this;
            $scope.$on('reDefinedScope',function(){
                $scope.model=$scope.item.model;
            });

            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.itemView+'.html';
            };
        },
        link:function($scope, $element,$attrs,ctrls){

            $scope.moduleName=ctrls['moduleName'];
            $scope.module=ctrls['module'];
            //console.log($scope.repeatIndex,$scope.parentName,$scope.repeatIndex);
            if($scope.parentName&&$scope.repeatIndex!=undefined){

                $scope.item=$scope.module[$scope.parentName]['model'][parseInt($scope.repeatIndex)][$scope.itemName];
             }else{
                $scope.item=$scope.module[$scope.itemName];
             }

            $scope.$broadcast('reDefinedScope');
        },
        replace:true,
        template: function($element,$attr) {
            var tag=$element[0]['localName'];
            return '<'+tag+' ng-include="getContentUrl()"></'+tag+'>'
        }
    }
});


directive.directive('tmDraggable',function() {
    return {
        restrict : 'A',
        link : function($scope, $element) {
            var start=0;
            if($scope.item.config.max!=1) {
                $($element).sortable({
                    axis: 'y',
                    cursor: "move",
                    start: function (event, ui) {
                        start = ui.item.index();
                    },
                    stop: function (event, ui) {
                        $scope.model.movePos(start, ui.item.index());
                        $scope.$broadcast('reDefinedScope');
                        $scope.$apply(function () {
                            //console.log($scope,$element)
                        });
                        //console.log($scope.model);
                        //$scope.$broadcast('reDefinedScope');
                    }
                });
            }
        }
    }
});


directive.directive('tmSelect',function() {
    return {
        restrict : 'A',
        link : function($scope, $element,$attrs,$ctrls) {
            $element.bind('change',function(){
                $scope.modelItem.type=$element.val();
                console.log($scope.item.model);
            });
        },
        controller:function($scope,$element){
            //console.log($scope.modelItem);
            for(var i=0;i<$scope.item.config.option.config.length;i++){

                if($scope.modelItem.type==$scope.item.config.option.config[i]['value']){
                    $scope.default=$scope.item.config.option.config[i];
                    return false;
                }
            }
            /*if(){
                $scope.default=$scope.item.config.option.config[0];
            }else{
                $scope.default=$scope.item.config.option.config[1];
            }*/

        }
    }
});
