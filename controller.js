/**
 * Created by Administrator on 2015/9/1.
 */
var controller=angular.module('tmController',[]);
/*controller.controller('tm_brand',['$scope',function($scope){
    $scope.module=$rootscope.brand;
    //$scope.items=$scope.module.hot_search_repeat;
}]);*/
//Model_A_1
controller.controller('model_A',[
    '$scope',
    'tmSaveData',
    'tmModel',
    '$filter',
        function($scope,tmSaveData,tmModel,$filter){
            //console.log($scope);
            $scope.save=function(){
                tmSaveData($scope.module);
            };
            $scope.raw=function(){
                document.getElementById('js-show-raw').value=$filter('toRaw')(document.getElementById('js-brand-mod').innerHTML);
            };
            $scope.addItem=function(){
                var item={};
                for(value in $scope.model[0]){
                    item.value='';
                }
                console.dir(item);
                $scope.model.push(item);
            };
            $scope.delete=function(i){
                $scope.model.splice(i,1);
            }
        }
    ]);
controller.controller('mod_raw_textarea',['$scope','$filter',function($scope,$filter){
    /*$scope.rawCode='';
    $scope.$watch(function(){

        var rawCode=document.getElementById('js-brand-mod');
        console.log(arguments.callee.count);
        if(rawCode)
        $scope.rawCode=$filter('toRaw')(document.getElementById('js-brand-mod').innerHTML);
    });
*/
}]);