// second parameter is a list of dependency of serivce
// ngMessages exist on "<script src="//code.angularjs.org/1.3.0-rc.1/angular-messages.min.js"></script>"
// ngResource exist on "<script src="//code.angularjs.org/1.3.0-rc.1/angular-resource.min.js"></script>"
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// ref: https://docs.angularjs.org/api/ng/service
myApp.controller('mainController', function( $scope, $log, $filter, $resource ) {
    
    
    console.log($scope);
    console.log($log);


    $log.log("Hello");
    $log.info("This is some..info");
    $log.warn("This is some..warning");
    $log.debug("This is some..debugging");
    // $log.error("This is some..error");


    $scope.name = "John";    
    $scope.formmattedName = $filter("uppercase")($scope.name);
    $log.info($scope.name);
    $log.info($scope.formmattedName);
    

    console.log($resource);


});