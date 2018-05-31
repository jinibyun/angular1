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
    
    $scope.people = [
        {
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        }
        ,
        {
            name: 'Jane Doe',
            address: '123 King St.',
            city: 'New York',
            state: 'NY',
            zip: '34244'
        }
        ,
        {
            name: 'George Doe',
            address: '563 Queen St.',
            city: 'Miami',
            state: 'NY',
            zip: '89567'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,

       // basically, directive is child of page which containing the directive.
       // child object can access to parent view page's scope object by default
       // isolationg scope(below): preventing directive from using parent's scope
       // giving own model only for child directive
       scope: {
           // @ : Text (e.g: personName: "@"). One way
           personObject: "=", // it means object is being passed. Two ways
           formattedAddressFunction: "&" // it means "function" type and create attribute
       }
   }
});
