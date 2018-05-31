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
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// note: directive name must be camal-case which must be translated to search-result attribute or element in html. That is the normalization of angular js
myApp.directive('searchResult', function () {
    return {
        restrict: 'A',
        // restrict: 'AE', (default): Attribute, Element / C: class, M: comment
        // rule how to show directive (A: Attribute, E: Element , AE: Attribute and Element. This is default, C: class (html class name), M: comment )
        template: '<a href="#" class="list-group-item">' +
                  '<h4 class="list-group-item-heading">Doe, John</h4>' +
                  '<p class="list-group-item-text">' +
                        '555 main st., New York, NY 1111' +
                  '</p>' +
                  '</a>', // making effective template (above is too long ...) , please see "15DirectiveTemplate" section
        replace: true // default: false (whether to replace all section with custom directive or not)
    }
});