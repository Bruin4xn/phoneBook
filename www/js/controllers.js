/**
 * Created by dreamy on 14-11-18.
 */
var controlModule = angular.module("phoneBook.controllers",[]);

    //最近通话记录
    controlModule.controller("callCtrl",function($scope){
        $scope.callList =  [
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"}
        ];





    });

    //联系人
    controlModule.controller("contactCtrl",function($scope,utilService){
        $scope.contactList =  [
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"}
        ];

        //初始化modal
        utilService.modal($scope,"tpls/contact/add-contact.html");

    });

    controlModule.controller("settingCtrl",function($scope){
        $scope.settingList = [
            { colName : "语音留言提示音", colIcon : ""},
            { colName : "合并重复联系人", colIcon : ""},
            { colName : "通话距离分析", colIcon : ""},
            { colName : "关于", colIcon : ""}
        ];

    });
