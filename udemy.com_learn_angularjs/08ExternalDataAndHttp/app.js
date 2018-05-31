var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter','$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    
    /* below is a native way */
    //var rulesrequest = new XMLHttpRequest();
    //rulesrequest.onreadystatechange = function () {
    //    $scope.$apply(function () {
    //        if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
    //            $scope.rules = JSON.parse(rulesrequest.responseText);
    //        }
    //    });
    //}
    //rulesrequest.open("GET", "http://localhost:54765/api", true);
    //rulesrequest.send();

    /* angular js way: */
    // note: use deployd api to provide json data . follow instruction G:\Jini\svn\AngularJSTest\trunk\AngularJS Pro By Adam Freeman Execution Environment\angularjs\ReadMe.txt    
    // http://localhost:2403/products

    $http.get('http://localhost:2403/products')
         .success(function (result) {
             $scope.products = result;
         })
         .error(function (data, status) {
             console.log(data);
         });

    $scope.newProduct = "";

    $scope.addProduct = function () {
        $http.post('http://localhost:2403/products',
            {
                name: $scope.newProduct,
                description: "test desc",
                category: "Watersports",
                price: 11.11
            }
        )
        .success(function (result) {
            $scope.products = result;
            $scope.newProduct = "";
        })
        .error(function (data, status) {
            console.log(data);
        });
    };

}]);