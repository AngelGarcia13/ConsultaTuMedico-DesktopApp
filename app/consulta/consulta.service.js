(function() {
'use strict';

    angular
        .module('consulta')
        .factory('MedicosService', MedicosService);

    MedicosService.$inject = ['$http','$q'];
    function MedicosService($http, $q) {
        var service = {
            getMedicosByName:getMedicosByName
        };
        
        return service;

        ////////////////
        function getMedicosByName(nombre) { 
            var dfd = $q.defer();
            $http.post('http://medicalexequaturapi.azurewebsites.net/api/medicos', 
            {nombre: nombre}
            ).then(getMedicosComplete)
             .catch(getMedicosFailed);
                        
            function getMedicosComplete(response) {
                    dfd.resolve(response.data);
                }

            function getMedicosFailed(error) {
                    dfd.reject('XHR Failed for getMedicos:' + error.data);
                    console.log('XHR Failed for getMedicos:' + error.data);
                }

            return dfd.promise;
        }
    }
})();