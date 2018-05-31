var myApp = angular.module('myApp', ['ngRoute']);

// note: angular-route.min.js should be linked 
myApp.config(function ($routeProvider) {

    // first parmeter is what I see from hash value from url
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second', { 
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num', { // note:    :num  this is a pattern matching for passing value. This is related to $routeParams below
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', '$location','$log', function ($scope, $location, $log) {
    
    // $log.info($location.path()); // get hash (#) value from url
    $scope.name = 'Main';


    // to check all angular js service (e.g. $log) is singleton class
    // note: $scope service exception to the rule (all $scope is independant separate object)
    $log.main = 'properyt from main';
    $log.log($log);

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function ($scope, $location, $log, $routeParams) {

    // $log.info($location.path()); // get hash (#) value from url
    // || operator is same as ?? in c#
    $scope.num = $routeParams.num || 1; //$routeParams contains :num



    $log.second = 'properyt from second';
    $log.log($log);

}]);
