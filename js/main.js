'use strict';

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$rootScope', '$interval', '$timeout', 'task', function($scope, $rootScope, $interval, $timeout, task){
  $rootScope.splashLoaderWidth = 0;
  task.startSplash();
}]);


app.service('task', function($rootScope, $interval, $timeout){
  this.startSplash = () => {
    //cacha the splash dom element
    const $splash = $('#splash');
    //wait for UI to load
    $timeout(() => {
      //fade in the splash screen
      $splash.css('opacity', 1);
      //animate the loader
      $rootScope.splashLoaderWidth = 100;
    }, 250).then(() => {
      $timeout(() => {
        //change the body background-color to white
        $('body').css('backgroundColor', '#fff');
        //fadeout the splash screen
        $splash.css('opacity', 0);
        //display the home page
        $('#container').removeClass('none');
        $timeout(() => {
          //remove the splash screen
          $splash.hide();
        }, 500);
      }, 1500);
    })
  }
});
