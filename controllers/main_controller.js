(function() {
  "use strict";

    angular
      .module("mySite")
      .controller("MainController", MainController);

    MainController.$inject = ["$log"];

    function MainController($log) {
       var vm = this;

       vm.projects = [
    			{
    				title: "Bugs On A Rug",
    				description: "Bugs On A Rug is a matching game where players try and clear the bugs off of the rug.  Play co-op or versus and have some fun!",
    				ga: "First project for General Assembly in week 3.  A solo project developed in one week.",
    				tech: "HTML5, CSS3, JavaScript",
    				gif: "./images/bugsGif.gif",
    				githubLink: "https://github.com/matthewybutt/bugs_on_a_rug",
    				siteLink: "http://matthewybutt.github.io/bugs_on_a_rug/",
    				lineClass: "work-line",
    				lineID: "line1"
    			},
    			{
    				title: "my kid's firsts",
    				description: "This app is a digital baby book for keeping track of all your child's big milestones! Sign up to keep an active record using blog posts and photo uploads of all the firsts your child does.",
    				ga: "Second project for General Assembly in week 6.  A solo project developed in one week.",
    				tech: "HTML5, CSS3, Ruby, Ruby on Rails, PostgreSQL, Paperclip, Heroku, Amazon Web Services",
    				gif: "./images/kidsGif.gif",
    				githubLink: "https://github.com/matthewybutt/my_kids_firsts",
    				siteLink: "https://my-kids-firsts.herokuapp.com",
    				lineClass: "work-line",
    				lineID: "line2"
    			},
    			{
    				title: "Pixel Spot",
    				description: "Pixel Spot is a photo location scouting app. Using Flickr's photo hosting and geo-tagging features in conjunction with Google Maps geo-location function users can find the exact spots of photo locations. Search for a spot with built in tag fields  or create custom tags.",
    				ga: "Third project for General Assembly in week 9.  A group project developed in nine days with a team of 4 other developers.",
    				tech: "HTML5, CSS3, JavaScript, Node.js, ExpressJS, MongoDB, jQuery, Google API, Flickr API, GeoNames API, Heroku, MongoLab",
    				gif: "./images/pixelspotGIF.gif",
    				githubLink: "https://github.com/sauchak/pixel_spot",
    				siteLink: "https://pixelspot.herokuapp.com/",
    				lineClass: "work-line",
    				lineID: "line3"
    			},
    			{
    				title: "Playtime Picks",
    				description: "Playtime Picks is an app for anyone who needs to find an activity to do with their kid! Sign-up to add activities to the list or leave comments on an activity.",
    				ga: "Final project for General Assembly in week 12.  A solo project developed in one week.",
    				tech: "HTML5, CSS3, JavaScript, AngularJS, Node.js, ExpressJS, MongoDB, JSON Web Token (JWT), jQuery, Heroku, MongoLab",
    				gif: "./images/pixelspotGIF.gif",
    				githubLink: "https://github.com/matthewybutt/playtime_picks",
    				siteLink: "https://playtime-picks.herokuapp.com",
    				lineClass: "",
    				lineID: ""
    			}
    		];
        };

})();
