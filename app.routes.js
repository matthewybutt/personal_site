(function(){
  "use strict";

  angular
    .module("mySite")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/templates/home.html",
      })      
      .state("work", {
        url: "/",
        templateUrl: "/templates/work.html",
      })
	  .state("about", {
        url: "/",
        templateUrl: "/templates/about.html",
      });

    $urlRouterProvider.otherwise("/");

  }

})();
