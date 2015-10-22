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
    $scope.$storage.games = $localStorage.games || [];
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
          fullName: $scope.$storage.player.firstName + ' ' + $scope.$storage.player.lastName,
          points: $scope.$storage.player.points
        }
      );
      $scope.$storage.player = {};
    };
    $scope.addPoints = function (player, points) {
      $scope.$storage.players.some(function (p) {
        if (player.id === p.id) {
          p.points += points;
          return true;
        }
      });
    };
    $scope.addGame = function () {
      $scope.$storage.game.datePlayed = new Date().getTime();
      $scope.$storage.games.push($scope.$storage.game);
      if (!$scope.$storage.game.challenge) {
        $scope.$storage.game = {};
        return;
      }

      var pointDiff = $scope.$storage.game.pointsOne - $scope.$storage.game.pointsTwo;
      if (pointDiff > 0) {
        $scope.addPoints($scope.$storage.game.playerOne, pointDiff);
      } else {
        $scope.addPoints($scope.$storage.game.playerTwo, Math.abs(pointDiff));
      }

      $scope.$storage.game = {};
    };
    $scope.formatDate = function(date) {
      date = new Date(date);
      return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
    };
  });
