// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService',
                                            function ($scope, $resource, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';

    // note: HOTTIP: pull as many as you can from controllers to move to "services"
    // move below code fore weather to services for reusability , scalability, extensibility and encapsulation
    // refer to weatherService in services.js

    //$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});    
    //// note: appID is what I got on registering for that site
    //$scope.weatherResult = $scope.weatherAPI.get({
    //    q: $scope.city, cnt: $scope.days, APPID: "2724acb73b5eb4b17cfd4083985cc4bd"
    //});
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    $scope.convertToFahrenheit = function(degK) {        
        return Math.round((1.8 * (degK - 273)) + 32);        
    }
    
    $scope.convertToDate = function(dt) {       
        return new Date(dt * 1000);        
    };
    
}]);