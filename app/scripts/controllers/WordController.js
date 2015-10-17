(function () {
    'use strict';

    angular.module('app').controller('WordController', function($scope, $routeParams) {
        var word = {'english': 'apple', 'german': ['Apfel','Apple-company']};
        $scope.word = word;
    })

})();