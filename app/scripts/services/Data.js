(function () {
    'use strict';

    angular.module('app').service('Data', function ($http) {

        this.getSeasons = function () {
            return $http.get('app/json/seasons.json').success(function (data) {
                return data;
            })
        };

        this.getWords = function () {
            return $http.get('app/json/words.json').success(function (data) {
                return data;
            })
        };

        return this;
    })

})();