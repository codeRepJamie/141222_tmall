/**
 * Created by Administrator on 2015/9/1.
 */
var controller=angular.module('tmController',[]);
//Model_A_1
controller.controller('Model_A_1',[
    '$scope',
    'tmSaveData',
    'tmModel',
        function($scope,tmSaveData,tmModel){
            $scope.module=$rootscope.brand;
            $scope.items=$scope.module.hot_search_repeat;
            $scope.model=$scope.items.model;

            $scope.save=function(){
                tmSaveData($scope.module);
            };
            $scope.raw=function(){
                var mod=document.getElementById('js-brand-mod');
                var oTextArea=document.getElementById('js-show-raw');
                oTextArea.value=mod.innerHTML.replace(/(<!--[\s\S]*?-->)|(\s*ng-\w+\=\"[\s\S]*?\")|(\s*ng-\w+)|(\s*class=\"(ng-\w+)?\")/g,'');
            };
            $scope.addItem=function(){
                var item={};
                for(value in $scope.model[0]){
                    item.value='';
                }
                $scope.model.push(item);
            }
        }
    ]);