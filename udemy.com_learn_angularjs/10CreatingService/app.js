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

// user defined service: once it is defined, then it should be used in the controller like other built-in service
// note: function means either method (function) or object in javascript

// tip: factory is same as service
myApp.service('nameService', function () {

    // for singleton pattern
    var self = this;

    // property
    this.name = "Jone Doe";

    // method
    this.nameLength = function () {
        return self.name.length;
    };
});


// inject above service as well
myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    
    $scope.name = nameService.name;

    // manual watch is required because $scope is not singlton
    // by doing this. all data can be shared over the pages or controllers
    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.nameLength());
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;
    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });
}]);

