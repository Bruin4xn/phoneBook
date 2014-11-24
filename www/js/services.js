angular.module("phoneBook.services",[])

//工具类service
.factory("utilService",function($rootScope,$ionicModal){

    var  modal = function($scope,templateUrl){
        //初始化model
        $ionicModal.fromTemplateUrl(templateUrl,{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        //当隐藏的模型时执行动作
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        //当移动模型时执行动作
        $scope.$on('modal.removed', function() {
            // Execute action
        });
    };



        var  lg = {
            get : function(key){
                return localStorage.getItem(key);
            },
            put : function(key,value){
                localStorage.setItem(key,value);
                return this;
            },
            getObj : function(key){
                if(localStorage.getItem(key)){
                    return JSON.parse(localStorage.getItem(key));
                }
                return null;
            },
            putObj : function(key,obj){
                localStorage.setItem(key,JSON.stringify(obj));
                return this;
            }
        };

    return {
       "modal" : modal,
        "lg"   : lg
    };

});