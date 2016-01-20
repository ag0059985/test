/* global angular */
var app = angular.module('app', []);


window.fbAsyncInit = function() {
    FB.init({
      appId      : '1466483290348005',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   app.factory('facebook', ['$window', function($window) {

    return {
        // a me function
        myFeed: function(callback) {
            FB.api('/me/feed', callback);
        }

        //TODO: Add any other functions you need here, login() for example.
    }
}]);