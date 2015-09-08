/**
 * Created by Administrator on 2015/9/1.
 */
var config=angular.module('tmConfig',[]);
//Ajax Config
config.config(function($httpProvider){

    $httpProvider.defaults.transformRequest = function(obj){
        var str = [];
        for(var p in obj){
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };

    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

});

config.config(function ($routeProvider){
    $routeProvider
        .when('/preview', {
            controller: 'previewCtrl'
            /*templateUrl:'indexTempl.html',*/
        })
        .when('/edit', {
            controller: 'editCtrl'
            /*templateUrl:'indexTempl.html',*/
        })
        .otherwise({
            redirectTo: '/preview'
        });
});
