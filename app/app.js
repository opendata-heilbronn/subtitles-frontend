(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngMaterial']);

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeCtrl'
            })
            .when('/season/:seasonId', {
                templateUrl: 'views/season.html',
                controller: 'SeasonCtrl'
            })
            .when('season/:seasonId/words/:wordId', {
                templateUrl: 'views/word.html',
                controller: 'WordCtrl'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });


})();