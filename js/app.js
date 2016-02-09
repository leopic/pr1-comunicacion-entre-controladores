angular.module('proyectoUno', [])
    .controller('ProyectoUnoController',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.init = function() {
                $scope.nombre = null;
            };

            $scope.$watch('nombre', function() {
                $rootScope.$broadcast('nombre:cambio', $scope.nombre);
            });

            $scope.init();
        }])
    .controller('ProyectoUnoControllerDos',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $rootScope.$on('nombre:cambio', function(evento, valor) {
                $scope.nombre = valor;
            });
        }])
;
