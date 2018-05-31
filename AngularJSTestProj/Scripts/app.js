// controller
function MyController($scope) {
    // In this case, rather than updating the $scope.clock every second, we can update the clock.now property.
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
};
