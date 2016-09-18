angular.module('starter.controllers', [])


.controller('DashCtrl', function ($scope, $ionicPopup) {
    $scope.foodList = [{
        name: 'Eggs',
        date: '09/17/16'
            }];

    $scope.foodItem = '';
    $scope.foodDate = '';

    $scope.showPrompt = function () {

        var promptPopup = $ionicPopup.show({
            title: 'Enter a Food Item!',
            templateUrl: 'newItem.html',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    onTap: function (e) {
                        return true;
                    }
                },
                {
                    text: 'Add',
                    onTap: function (e) {
                        $scope.foodItem = document.getElementById('foodItem').value;
                        $scope.foodDate = document.getElementById('foodDate').value;
                        $scope.foodList.push({
                            name: $scope.foodItem,
                            date: $scope.foodDate
                        })

                    }
              }
            ]

        });
    }

    $scope.deleteItem = function (item) {
        $scope.foodList.splice($scope.foodList.indexOf(item), 1);
    }

})


.controller('ChatsCtrl', function ($scope, $ionicPopup) {
    $scope.$on("$ionicView.loaded", function () {
        $scope.showPrompt2 = function () {

            var groceryItem;

            var promptGrocery = $ionicPopup.prompt({
                title: 'New Grocery Item',
                template: 'Add to Grocery List',
                inputType: 'text',
                inputPlaceholder: ''
            });

            promptGrocery.then(function (res) {
                if (typeof res != 'undefined') {
                    if (res != '') {
                        groceryItem = {
                            name: res
                        };
                        $scope.groceryList.push(groceryItem);
                    }
                }
            });
        };

        $scope.groceryList = [{
            name: 'Potato'
        }, {
            name: 'Yogurt'
        }];

    });

})


.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope, $ionicPopup) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.showConfirm = function () {

        var confirmPopup = $ionicPopup.confirm({
            title: 'Reset Fridge',
            template: 'Are you sure you want to do this?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Sure!');
                var lst = document.getElementById("food-button");
                lst.length = 0;
            } else {
                console.log('Not sure!');
            }
        });

    };
});