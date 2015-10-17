(function () {
    'use strict';

    var words = {
        "write": ["schreiben"],
        "coder": ["Programmierer", "Softwareentwickler"],
        "apple": ["Apfel", "Apple Company"],
        "banana": ["Bananen"]
    }
    angular.module('app').controller('WordController', function ($scope, $routeParams, $location) {
        var wordId=0; 
        var getWord=function() {
        var englishWord=Object.keys(words)[wordId];    
            return {'english': englishWord, 'german': words[englishWord]}
        }
        $scope.word = getWord();
       
        $scope.next = function () {
            wordId++;            
            if (wordId >= Object.keys(words).length) wordId = 0;
            $scope.word = getWord();
            $scope.showTranslation = false;
        }
    })

})();