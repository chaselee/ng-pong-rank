'use strict';

/**
 * @ngdoc function
 * @name pongRankApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pongRankApp
 */
angular.module('pongRankApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl($localStorage) {
  this.$storage = $localStorage;
  this.$storage.players = $localStorage.players || [];
}

MainCtrl.prototype.addPlayer = function() {
  var sortedPlayers = this.$storage.players.sort(function(a, b) {
      return a.id - b.id;
  });
  var newID = ( sortedPlayers.length ? sortedPlayers[sortedPlayers.length - 1].id : 0) + 1;
  this.$storage.players.push(
    {
      id: newID,
      firstName: this.$storage.player.firstName,
      lastName: this.$storage.player.lastName,
      points: this.$storage.player.points
    }
  );
  this.$storage.player = {};
};

MainCtrl.prototype.addPoints = function(id, points) {
  this.$storage.players.some(function (player) {
    if (player.id === id) {
      player.points += points;
      return true;
    }
  });
};

MainCtrl.prototype.addGame = function() {
  var pointDiff = this.$storage.game.pointsOne - this.$storage.game.pointsTwo;
  if (pointDiff > 0) {
    this.addPoints(this.$storage.game.playerOne, pointDiff);
  } else {
    this.addPoints(this.$storage.game.playerTwo, Math.abs(pointDiff));
  }
  this.$storage.game = {};
};
