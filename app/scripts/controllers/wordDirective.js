(function () {
    'use strict';
    angular.module('app').directive('word', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/views/word.html'
        }
    });
})();