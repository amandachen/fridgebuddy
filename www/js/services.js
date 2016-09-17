angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Tomatoes',
    lastText: 'Expiring in two days',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Milk',
    lastText: 'Expiring in three days',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Eggs',
    lastText: 'Expiring in seven days',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Bok Choy',
    lastText: 'Expiring in five days',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Zucchini',
    lastText: 'Expiring in thirteen days',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
