(function(){
  "use strict";

  angular
    .module("mySite")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider){

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
    $locationProvider.html5Mode(true);
  }

})();
