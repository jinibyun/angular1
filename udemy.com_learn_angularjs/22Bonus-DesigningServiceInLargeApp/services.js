// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

// in order to use $resource, it should be injected as below which is same as injection in controller
weatherApp.service('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function (city, days) {
        // note: $scope cannot be used inside service
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

        // note: appID is what I got on registering for that site
        return weatherAPI.get({
            q: city, cnt: days, APPID: "2724acb73b5eb4b17cfd4083985cc4bd"
        });
    };
}]);