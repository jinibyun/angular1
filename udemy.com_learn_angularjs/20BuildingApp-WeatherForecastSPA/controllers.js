// controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';
    // use resource service to open api: http://api.openweathermap.org
    // $resource service wraps up the call to the data
    // e.g: http://api.openweathermap.org/data/2.5/forecast/daily?q=Toronto&APPID=2724acb73b5eb4b17cfd4083985cc4bd&cnt=2

    $scope.weatherAPI = $resource(
                            "http://api.openweathermap.org/data/2.5/forecast/daily",
                            { callback: "JSON_CALLBACK" },
                            { get: { method: "JSONP" } }
                        );

    // note: appID is what I got on registering for that site
    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city, cnt: $scope.days, APPID: "2724acb73b5eb4b17cfd4083985cc4bd"
    });

    // console.log($scope.weatherResult);
    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }

}]);
