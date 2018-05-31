// global namespace (just object): to avoid conflict
// 1. define module
var myApp = angular.module('myApp', []);

// 2. define controller
myApp.controller('mainController', function($scope) {
    
});

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

var searchPeopleString = searchPeople.toString();
console.log(searchPeople); // in javascript, just call function name without () is same as function.toString()