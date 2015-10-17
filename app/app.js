(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngMaterial']);

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeController'
            })
            .when('/season/:seasonId', {
                templateUrl: 'views/season.html',
                controller: 'SeasonController'
            })
            .when('/season/:seasonId/words/:wordId?', {
                templateUrl: 'app/views/words.html',
                controller: 'WordController'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });


})();