// custom directive
weatherApp.directive("weatherReport", function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            // isoate scope
            weatherDay: "=", // pass object to directive
            convertToStandard: "&", // pass function
            convertToDate: "&", // pass function
            dateFormat: "@" // convert string
        }
    }
});