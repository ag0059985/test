app.controller('fbCtrl', ['$scope', 'facebook',function ($scope, facebook) {
    console.log('asdf');
    $scope.foo = "ajay";
    $scope.FBLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    /*setting the user object*/

                    console.log(response);
                    /*get the access token*/
                    var FBAccessToken = FB.getAuthResponse().accessToken;
                    console.log('access token', FBAccessToken);

                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'user_posts'});
    }

    $scope.testMe = function () {

        //call our service function.
        facebook.myFeed(function (data) {
            $scope.myFeeds = data.data;
            $scope.$apply();
        });
    };

}]);

