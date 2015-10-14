'use strict';

/**
 * @ngdoc function
 * @name pongRankApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pongRankApp
 */
angular.module('pongRankApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
    $scope.$storage.players = $localStorage.players || [];
    $scope.addPlayer = function () {
      var sortedPlayers = $scope.$storage.players.sort(function(a, b) {
          return a.id - b.id;
      });
      var newID = ( sortedPlayers.length ? sortedPlayers[sortedPlayers.length - 1].id : 0) + 1;
      $scope.$storage.players.push(
        {
          id: newID,
          firstName: $scope.$storage.player.firstName,
          lastName: $scope.$storage.player.lastName,
          points: $scope.$storage.player.points
        }
      );
      $scope.$storage.player = {};
    };
    $scope.addPoints = function (id, points) {
      $scope.$storage.players.some(function (player) {
        if (player.id === id) {
          player.points += points;
          return true;
        }
      });
    };
    $scope.addGame = function () {
      var pointDiff = $scope.$storage.game.pointsOne - $scope.$storage.game.pointsTwo;
      if (pointDiff > 0) {
        $scope.addPoints($scope.$storage.game.playerOne, pointDiff);
      } else {
        $scope.addPoints($scope.$storage.game.playerTwo, Math.abs(pointDiff));
      }
      $scope.$storage.game = {};
    };
  });
