var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    // common angular directives
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    

    $scope.characters = 5;

    $scope.rules = [
        { rulename : "Must be 5 characters"},
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }
    ];

    console.log($scope.rules);

    $scope.alertClick = function () {
        alert('clicked');
    };

    $scope.name = 'John Doe';

    
}]);
