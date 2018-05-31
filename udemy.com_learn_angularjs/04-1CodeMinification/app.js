var myApp = angular.module('myApp', []);

//myApp.controller('mainController', function($scope, $log) {

//    $log.info($scope);

    
//});

// note: below does not work
//search for javascript minifier: ref: http://jscompress.com/
//myApp.controller("mainController", function (n, o) { o.info(n) });








// note: js array can contain "function"
// first element is first parameter of function in array.. that is the rule.
// below is more common...way to define controller
//myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

//    $log.info($scope);


//}]);

// note: below works. compare it with above
myApp.controller("mainController", ["$scope", "$log", function (o, n) { n.info(o) }]);

