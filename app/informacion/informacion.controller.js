(function() {
'use strict';

    angular
        .module('informacion')
        .controller('InformacionController', InformacionController);

    InformacionController.$inject = [];
    function InformacionController(){
        var vm = this;
        var shell = require('electron').shell;
        vm.openUrl = openUrl;
        
        function openUrl(param) {
            shell.openExternal(param);
            return false;
        }
    }
})();