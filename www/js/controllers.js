angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $ionicPopup) {

   $scope.showPrompt = function() {

      var outputFood
      var outputDate

      var promptPopup = $ionicPopup.prompt({
         title: 'Date',
         template: 'Enter Date',
         inputType: 'text',
         inputPlaceholder: 'Eg. 9/17/16'
      });

      var promptPopup2 = $ionicPopup.prompt({
         title: 'Food Entry',
         template: 'Enter Food Item',
         inputType: 'text',
         inputPlaceholder: 'Eg. Eggs, Milk, etc.'
      });

      promptPopup.then(function(res) {
         outputDate = res;
         var lst = document.getElementById("FoodButtons");
         var item = document.createElement("button");
         item.appendChild(document.createTextNode(outputFood));
         item.appendChild(document.createTextNode(outputDate));
         lst.appendChild(item);
      });
    
     promptPopup2.then(function(res) {
      outputFood = res;
      });
   };

})


.controller('RecipesCtrl', function($scope) {})



.controller('ChatsCtrl', function($scope, $ionicPopup) {
  $scope.$on("$ionicView.loaded", function() {
   $scope.showPrompt2 = function() {

      var groceryItem
      
      var promptGrocery = $ionicPopup.prompt({
         title: 'New Grocery Item',
         template: 'Add to Grocery List',
         inputType: 'text',
         inputPlaceholder: ''
      });

      promptGrocery.then(function(res) {
        if (typeof res != 'undefined') {
          if (res != '') {
            groceryItem = { name: res };
            $scope.groceryList.push(groceryItem);
          }
        }
      });
   };

   $scope.groceryList = [{ name: 'Potato' }, { name: 'Yogurt' }];

   });

})

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 // $scope.chats = Chats.all();
 // $scope.remove = function(chat) {
  //  Chats.remove(chat);
 // };
//})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
