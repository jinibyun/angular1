var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = "";
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    // note: angular js is ALWAYS listening event thrown by browser
    // every event handler and other variables and functions are automatically registered to Watch List: Digest Loop

    // below, we are just adding to it by manual ( wd don't have to do)
    $scope.$watch("handle", function (newValue, oldValue) {
        console.info('Changed');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
    });


    /* WatchersAndDigestLoop */


    // with just javascript
    // below is running asychronosly. Angular is not updated because it is not watched via angular js (digest cycle). (different thread)
    // NOTE: that is why $scope.apply is used!!

    //setTimeout(function () {

    //    $scope.$apply(function () { //angular js digest cycle!!. most of time, it is automatic. but in some case...not.
    //        $scope.handle = 'newtwitterhandle';
    //        console.log('scope changed');
    //    });

    //}, 3000);


    // or alternatively, we could use $timeout service
    $timeout(function () {
        $scope.handle = 'newtwitterhandle';
        console.log('scope changed');
    }, 3000);

}]);
