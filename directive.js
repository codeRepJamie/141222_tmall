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

function bindPannel($scope,$element,$itemName){
    $scope.editItem=function(index){
        //console.log($element.find('.sub-list-model'),index);
        var controller='<div tm-sub-list-control-model tm-mod-name="'+scope.moduleName+'" tm-item-name="'+item+'" tm-sub-list-name="'+''+'" tm-model-controller="'+scope.module[item]['config']['controller']+'"></div>';
        $element.find('.sub-list-model').html('').html($compile(angular.element(controller))($scope));

    };
    $scope.addItem=function() {
        if($scope.model[0]&&!$scope.item.config.max||($scope.model.length<$scope.item.config.max || alert('最多不能超过'+$scope.item.config.max+'项！'))){
            //console.log(hashRandom(6));
            /*function addHashKey(model){
                if(!model.hasOwnProperty('model')){
                    model['$$hashKey']='object:'+ hashRandom(6);
                    return model
                }else{
                    addHashKey(model['model']);
                }
            }*/
            var newModel = $.extend(/*true,*/{}, $scope.item.config.model);
            $scope.model.push(newModel);
            //console.log($scope.model);
        }
    };
    $scope.delete=function(i){
        $scope.model.splice(i,1);
    }
}

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
        controller:function($scope,tmModel,$element){
            $scope.item=tmModel.getItem($scope.moduleName,$scope.itemName);
            $scope.model=tmModel.getModel($scope.moduleName,$scope.itemName);
            bindPannel($scope,$element,$scope.itemName);
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
            repeatIndex:'@tmRepeatIndex'
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
            console.log($scope.repeatIndex);
            $scope.moduleName=ctrls['moduleName'];
            $scope.module=ctrls['module'];

            if($scope.parentName&&$scope.repeatIndex){
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
        link : function($scope, $element,$attrs,$ctrls) {
            var start=0;
                $($element).sortable({
                    axis: 'y',
                    cursor: "move",
                    start:function(event, ui){
                        start= ui.item.index();
                    },
                    stop:function(event, ui ){
                        $scope.model.movePos(start,ui.item.index());
                        $scope.$broadcast('reDefinedScope');
                        $scope.$apply(function(){

                        });
                        //console.log($scope.model);
                        //$scope.$broadcast('reDefinedScope');
                    }
                });

        }
    }
});
