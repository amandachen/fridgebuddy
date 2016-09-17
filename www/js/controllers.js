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
         outputDate = console.log(res);
         var lst = document.getElementById("ion-list");
         var item = tab-dash.createElement("button");
         item.appendChild(tab-dash.createTextNode(outputDate));
         lst.appendChild(item);
      });
    
     promptPopup2.then(function(res) {
         outputFood = console.log(res);
         var lst = document.getElementById("ion-list");
         var item = document.createElement("button");
         item.appendChild(document.createTextNode(outputFood));
         lst.appendChild(item);
      });
   };

})

/*.controller('DashCtrl', function($scope, $ionicPopup) {

   // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Food Entry',
         subTitle: 'Enter Food Item',
         scope: $scope,
      
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
            
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         var output = console.log(res);

      });    
   };

})*/

.controller('RecipesCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
