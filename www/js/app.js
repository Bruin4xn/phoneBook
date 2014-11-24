var  phoneBook = angular.module("phoneBook",["ionic","phoneBook.controllers","phoneBook.services"]);

//初始化一次
phoneBook.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});

//配置
phoneBook.config(function($stateProvider, $urlRouterProvider){
    //路由配置
    $stateProvider.state("tab",{
        url  : "/tab",
        abstract : true,
        templateUrl : "tpls/tab/tab.html"
    });

    //最近通话
    $stateProvider.state("tab.calls",{
        url : "/calls",
        views : {
            'tab-calls' : {
                templateUrl : "tpls/tab/tab-calls.html",
                controller : "callCtrl"
            }
        }
    });

    //联系人
    $stateProvider.state("tab.contacts",{
        url : "/contacts",
        views : {
            'tab-contacts' : {
                templateUrl  : "tpls/tab/tab-contacts.html",
                controller : "contactCtrl"
            }
        }
    });

    //设置
    $stateProvider.state("tab.settings",{
        url : "/settings",
        views : {
            'tab-settings' : {
                templateUrl  : "tpls/tab/tab-setting.html",
                controller : "settingCtrl"
            }
        }
    });


    //默认路由
    $urlRouterProvider.otherwise('/tab/calls');
});


//配置指令
phoneBook.directive("myModal",function(){
    return {
        restrict: "AE",
        templateUrl : "tpls/modal/base-modal.html",
        transclude: true,

        link : function(scope,element,attrs){
             scope.title = attrs.title;
        }
    }
});


//配置全局验证alert
phoneBook.directive("lockAlert",function(){
    return {
        restrict: "AE",
        templateUrl : "tpls/modal/lock-alert.html",
        transclude: false,
        link : function(scope,element,attrs){
            scope.title = attrs.title;
            scope.content = attrs.content;
        }
    }
});