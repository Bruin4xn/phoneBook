/**
 * Created by dreamy on 14-11-18.
 */
var controlModule = angular.module("phoneBook.controllers",[]);

    //最近通话记录
    controlModule.controller("callCtrl",function($scope){
        console.log("最近通话控制器....");

        $scope.callList =  [
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
            {"userName" : "周宁静", "local" : "陕西西安", "operators" : "电信",lastCallTime : "昨天"},
        ];

    });

    //联系人
    controlModule.controller("contactCtrl",function($scope,utilService){
        console.log("联系人控制器.....");

        //通讯录
        $scope.contactList =  [];

        //表单提交对象
        $scope.contactObj = {
            phoneList : []
        };

        //添加电话号码
        $scope.addItem = function() {
            $scope.contactObj.phoneList.push({"phoneNum" : "", "phoneType" : "家里"});
        };

        //提交表单
        $scope.subUser = function(){
            console.log("提交！....");
            console.log($scope.contactObj);
            //copy一份
            var obj = angular.copy($scope.contactObj);
            //添加
            $scope.contactList.push(obj);
            //关闭
            $scope.closeModal();

        }
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
