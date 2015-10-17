(function () {
    'use strict';

    angular.module('app').controller('WordController', function($routeParams) {
        var words = {'apple': ['Apfel'], 'banana': ['Banane']};
        $scope.words = words;
    })

})();