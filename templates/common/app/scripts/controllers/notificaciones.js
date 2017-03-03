'use strict';

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
