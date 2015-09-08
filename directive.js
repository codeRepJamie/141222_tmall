/**
 * Created by Administrator on 2015/9/1.
 */
var directive=angular.module('tmDirective',[]);

function bindPannel($scope){
    $scope.addItem=function() {
        if(!$scope.item.config.max||($scope.model.length<$scope.item.config.max || alert('最多不能超过'+$scope.item.config.max+'项！'))){
            var item = {};
            for (value in $scope.model) {
                item.value = '';
            }
            $scope.model.push(item);
        }
    };
    $scope.delete=function(i){
        $scope.model.splice(i,1);
    }
};

directive.directive('tmControlModel', function() {
    return {
        restrict: 'A',
        scope:{
            moduleName:'@tmModName',
            itemName:'@tmItemName'
            //controller:'@tmModelController'
        },
        templateUrl: function(elem, attr){
            return 'directive/controller/model_'+attr.tmModelController+'.html'
        },
        replace: true,
        controller:function($scope,tmModel){
            bindPannel($scope);
            $scope.item=tmModel.getItem($scope.moduleName,$scope.itemName);
            $scope.model=tmModel.getModel($scope.moduleName,$scope.itemName);
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
                        if(item!='config'){
                            controller+='<div tm-control-model tm-mod-name="'+scope.moduleName+'" tm-item-name="'+item+'" tm-model-controller="'+scope.module[item]['config']['controller']+'"></div>';
                            //$rootScope.dialogForm.append($compile(angular.element(controller))($scope));
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

/*directive.directive('tmItemRepeat',function() {
    return{
        require:['^tmParent'],
        scope:{
            itemName:'@tmItemName',
            itemTempl:'@tmItemView'
        },
        controller:function($scope){
            var _this=this;
            $scope.$on('reDefinedScope',function(){
                _this.itemModel=$scope.model=$scope.item.model;
            });
            //console.log($scope.moduleName);
            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.itemTempl+'.html';
            };
        },
        link:function($scope, $element,$attrs,ctrls){
            $scope.moduleName=ctrls[ctrls.length-1]['moduleName'];
            $scope.module=ctrls[ctrls.length-1]['module'];
            for (var i=0;i<ctrls.length;i++){
                if(ctrls[i]!=null){
                    if(i==ctrls.length-1){
                        $scope.item=$scope.module[$scope.itemName];
                    }else{
                        $scope.item=ctrls[i]['item'][$scope.itemName];
                    }
                }
            }

            $scope.$broadcast('reDefinedScope');
        },
        replace:true,
        template: function($element,$attr) {
            var tag=$element[0]['localName'];
            return '<'+tag+' ng-include="getContentUrl()"></'+tag+'>'
        }
    }
});*/


directive.directive('tmElemtaryRepeat',function() {
    return{
        //require:['^tmParent','?^tmItemReapeat'],
        require:['?^tmElemtaryRepeat','^tmParent'],
        scope:{
            itemName:'@tmItemName',
            itemView:'@tmItemView'
        },
        //tranclude:true,
        controller:function($scope){
            $scope.$on('reDefinedScope',function(){
                //console.log($scope);
                //console.log($scope.parentsItemName);
                console.log($scope.item);
                $scope.model=$scope.item.model;
                //console.log($scope.item,$scope.itemName);
            });

            $scope.getContentUrl = function() {
                return 'directive/view/'+$scope.moduleName+'/'+$scope.itemView+'.html';
            };
        },
        link:function($scope, $element,$attrs,ctrls){

            $scope.moduleName=ctrls[1]['moduleName'];
            $scope.module=ctrls[1]['module'];
            //console.log(ctrls,$attrs);
            for (var i=0;i<ctrls.length;i++){
                if(!isEmpty(ctrls[i])){
                    if(i==ctrls.length-1){
                        this.item=$scope.item=$scope.module[$scope.itemName];
                        this.itemName=$scope.itemName;
                        break;
                    }else{
                        this.item=$scope.item=ctrls[i]['item'][$scope.itemName];
                        this.itemName=$scope.itemName;
                        console.log(ctrls[i][ctrls[i][$scope.itemName]]);
                        break;
                    }
                }else{
                    //console.log(ctrls[i],ctrls.length,ctrls,isEmpty(ctrls[1]));

                }
            }

           // var hasOwnProperty = Object.prototype.hasOwnProperty;

            function isEmpty(obj) {

                // null and undefined are "empty"
                if (obj == null) return true;

                // Assume if it has a length property with a non-zero value
                // that that property is correct.
                if (obj.length > 0)    return false;
                if (obj.length === 0)  return true;

                // Otherwise, does it have any properties of its own?
                // Note that this doesn't handle
                // toString and valueOf enumeration bugs in IE < 9
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) return false;
                }

                return true;
            }
            /*for( var i=0;i<ctrls.length;i++){
                if(ctrls[i]==null){
                    return false;
                }
                if(i==ctrls.length-1){
                    parentsItemName=ctrls[i]['moduleName'];
                    $scope.item=ctrls[i]['module'][$scope.itemName];
                }else{
                    parentsItemName=ctrls[i]['itemsName'];
                    $scope.item=ctrls[i]['item'][$scope.itemName];
                }

            }*/
            //console.log($scope.parentsItemName);
            /*$scope.moduleName=ctrls.moduleName;
            $scope.module=ctrls.module;
            $scope.item=$scope.module[$scope.itemName];*/

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
