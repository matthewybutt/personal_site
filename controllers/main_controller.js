(function() {
  "use strict";

    angular
      .module("mySite")
      .controller("MainController", MainController);

    MainController.$inject = ["$log"];

    function MainController($log) {
       var vm = this;

    };

})();
