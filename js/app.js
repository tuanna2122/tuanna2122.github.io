var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    })
    .when('/post', {
      templateUrl: 'partials/post.html',
      controller: 'PostController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

myApp.controller('HeadController', function($scope) {
  $scope.title = 'Tuanna2122 GitHub Blog';
});

myApp.controller('MainController', function($scope) {
});

myApp.controller('AboutController', function($scope) {
});

myApp.controller('PostController', function($scope) {
});

myApp.controller('ContactController', function($scope) {
});
