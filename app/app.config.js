(function() {
    'use strict';

    angular
    .module('MyApp')
    .config(config);
    
    function config($mdIconProvider, $mdThemingProvider, $routeProvider) {
              $mdThemingProvider.theme('default')
                    .primaryPalette('lime')
                    .accentPalette('lime');
              var rootURL = "./";

              // Register the icons
              $mdIconProvider
                    .icon("menu", rootURL + "assets/svg/menu.svg", 24);
                    
             $routeProvider
            .when('/', {
                templateUrl : 'consulta/consulta.view.html',
                controller  : 'ConsultaController as consulta'
            })
            .when('/informacion', {
                templateUrl : 'informacion/informacion.view.html',
                controller  : 'InformacionController as informacion'
            })
            .otherwise({
                redirectTo: '/'
            });
          }
          
          
})();