(function () {
    'use strict';

    angular.module('app').controller('WelcomeController', function ($scope, $route, $routeParams, $location, Data) {

        Data.getSeasons().success(function (data) {
            $scope.seasons = data;
        });

        Data.getWords().success(function (data) {
            $scope.words = data;
        });

        $scope.getWordLength = function (words) {
            return (words) ? Object.keys(words).length : 0
        };

        $scope.getImagePath = function (episode) {
            if (!episode.imagePath) episode.imagePath = 'app/images/icon0' + (Math.round((Math.random()*2))+1) + '.png';
            return episode.imagePath;
        };

        $scope.getCompleted = function (episode) {
            if (!episode.completed) episode.completed = (Math.round((Math.random()*99))+1);
            return episode.completed;
        };

    });

})();