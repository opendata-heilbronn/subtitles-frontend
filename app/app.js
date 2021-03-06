(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngMaterial']);

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/welcome.html',
                controller: 'WelcomeController'
            })
            .when('/season/:seasonId', {
                templateUrl: 'app/views/season.html',
                controller: 'SeasonController'
            })
            .when('/season/:seasonId/episode/:episodeId', {
                templateUrl: 'app/views/word.html',
                controller: 'WordController'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });


})();