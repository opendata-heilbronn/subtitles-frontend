(function () {
    'use strict';
    angular.module('app').directive('word', function () {
        return {
            restrict: 'E',
            template: 'app/views/word.html'
        }
    });
})();