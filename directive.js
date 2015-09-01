/**
 * Created by Administrator on 2015/9/1.
 */
var directive=angular.module('tmDirective',[]);

directive.directive('tmBrand', function() {
    return {
        restrict: 'A',
        templateUrl: 'directive/view/brand.html',
        replace: true
    };
});

directive.directive('ngDraggable',function() {
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
                        $scope.module=$rootscope.brand;
                        $scope.items=$scope.module.hot_search_repeat;
                        $scope.model=$scope.items.model;
                        $scope.model.movePos(start,ui.item.index());
                        $scope.$apply();
                    }
                });

        }
    }
});

Array.prototype.movePos=function(n,m){

    n=n<0?0:(n>this.length-1?this.length-1:n);
    m=m<0?0:(m>this.length-1?this.length-1:m);
    var temp;
    if(n===m){
        return this;
    }
    else{
        if(n>m)//��ǰ�ƶ�>����������λ�ü����м��Ԫ�����¸�ֵ[˳��]
        {

            temp=[this[m],this[m]=this[n]][0];//����n��m��ֵ����m�ϵ�ֵ����temp
            for(var i=m+1; i<=n; i++)
            {
                temp=[this[i],this[i]=temp][0];
            }

        }
        else{//����ƶ�>����������λ�ü����м��Ԫ�����¸�ֵ[����]

            temp=[this[m],this[m]=this[n]][0];//����n��m��ֵ����m�ϵ�ֵ����temp
            for(var i=m-1; i>=n; i--)
            {
                temp=[this[i],this[i]=temp][0];
            }

        }
        return this;
    }
};