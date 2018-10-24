var app = angular.module('restApp', ['RestServiceModule'])
app.controller('restCtrl', ['RestMethodsService', '$scope', 
function(RestMethodsService, $scope){
    //Controller logic
}])