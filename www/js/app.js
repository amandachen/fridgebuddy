// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

app.service('Todo', function () {

    var todos = [
        {
            'title': 'Test1',
            'done': 'false'
            },
        {
            'title': 'Test2',
            'done': 'false'
            },
        {
            'title': 'Test3',
            'done': 'true'
            },
        {
            'title': 'Test4',
            'done': 'true'
            }];

    this.list = function () {
        return todos;
    }

    this.add = function (todo) {
        todos.splice(0, 0, todo);
    }

});

app.controller('todoController', ['$scope', 'Todo',
function ($scope, Todo) {

        $scope.todos = Todo.list();
        $scope.addTodo = function (todo) {
            todo.done = false;
            Todo.add(angular.copy(todo));
            todo.title = '';

        }

}
]);