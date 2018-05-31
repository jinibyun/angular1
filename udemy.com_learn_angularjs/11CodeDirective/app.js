var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
        
    
}]);


// note: directive template html (child) can access to scope which was defined at parent's controller
// note: in other words, unexpected result can be used
// that is why isolated scope is required.

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       // isolated scope(child scope): not to use parent's scope. only applicable to this directive. It is own model only for this directive
       // special local scope binding.
       scope: {
           // @ mean text type  (by doing this, we can let direcitve use above parent's scope value
           // passing variable (name is personName) to directive
           personName: "@",
           personAddress: "@"
       }
   }
});
