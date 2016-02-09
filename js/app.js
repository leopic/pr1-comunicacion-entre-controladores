angular.module('proyectoUno', [])
    /**
     * Usando un servicio
     */
    .service('ColoresServicio', function ColoresServicio() {
        var servicio = this;
        servicio.primario = '#000';
    })
    .controller('CompartiendoUsandoServiciosUnoCtrl',
        ['$scope', 'ColoresServicio', function ($scope, ColoresServicio) {
            $scope.init = function() {
                $scope.colores = ColoresServicio;
            };

            $scope.init();
        }])
    .controller('CompartiendoUsandoServiciosDosCtrl',
        ['$scope', 'ColoresServicio', function ($scope, ColoresServicio) {
            $scope.init = function() {
                $scope.colores = ColoresServicio;
            };

            $scope.init();
        }])
    /**
     * Usando eventos
     */
    .controller('CompartiendoUsandoEventosUnoCtrl',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.init = function() {
                $scope.nombre = null;
            };

            $scope.$watch('nombre', function() {
                $rootScope.$broadcast('nombre:cambio', $scope.nombre);
            });

            $scope.init();
        }])
    .controller('CompartiendoUsandoEventosDosCtrl',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $rootScope.$on('nombre:cambio', function(evento, valor) {
                $scope.nombre = valor;
            });
        }])
;
