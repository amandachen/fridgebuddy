angular.module('starter.controllers', [])


.controller('DashCtrl', function ($scope, $ionicPopup) {
    $scope.foodList = [{ name: 'Eggs', date: '09/17/16' }];

    $scope.foodItem = '';
    $scope.foodDate = '';

    $scope.showPrompt = function () {

      //$scope.foodItem = '';
      //$scope.foodDate = '';

        var promptPopup = $ionicPopup.show({
            title: 'New Food Entry',
            templateUrl: 'newItem.html',
            scope: $scope,
            buttons: [
              { text: 'Cancel', onTap: function(e) { return true; } },
              {
                text: 'Add',
                onTap: function(e) {
                  $scope.foodItem = document.getElementById('foodItem').value;
                  $scope.foodDate = document.getElementById('foodDate').value;
                  $scope.foodList.push({ name: $scope.foodItem, date: $scope.foodDate })

                }
              }
            ]
        });

        /*
        var promptPopup2 = $ionicPopup.prompt({
            title: 'Food Entry',
            template: 'Enter Food Item',
            inputType: 'text',
            inputPlaceholder: 'Eg. Eggs, Milk, etc.'
        });
        */

        /*
        promptPopup.then(function (res) {
            outputDate = res;
            var lst = document.getElementById("food-button");
            var item = document.createElement("item-note");
            outputDate = item.appendChild(document.createTextNode(outputDate));
            //foodItem.appendChild(outputDate);
        });
        */

        /*
        promptPopup2.then(function (res) {
            outputFood = res;
            var lst = document.getElementById("food-button");
            var item = document.createElement("button");
            item.appendChild(document.createTextNode(outputFood));
            foodItem = item;
            lst.appendChild(item);
        });
        */
    };

    $scope.showConfirm = function () {
        var id

        function reply_click(clicked_id) {
            id = clicked_id;
        }
        var confirmPopup = $ionicPopup.confirm({
            title: console.log(id),
            template: 'Do you want to delete this item?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Sure!');
            } else {
                console.log('Not sure!');
            }
        });

    };
})


.controller('ChatsCtrl', function ($scope, $ionicPopup) {
    $scope.$on("$ionicView.loaded", function () {
        $scope.showPrompt2 = function () {

            var groceryItem

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