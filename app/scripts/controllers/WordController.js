(function () {
    'use strict';

    angular.module('app').controller('WordController', function($scope, $routeParams) {
        var words = {'apple': ['Apfel'], 'banana': ['Banane']};
        $scope.words = words;
    })
})();