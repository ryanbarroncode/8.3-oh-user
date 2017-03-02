var $ = require('jquery');
var Backbone = require('backbone');


require('./router.js');


function setupAjax(loggedInUser){
  $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
        if(loggedInUser){
          xhr.setRequestHeader("X-Parse-Session-Token", loggedInUser.sessionToken);
        }
      }
  });
}

setupAjax();

var apiUrl = 'https://tiny-parse-server.herokuapp.com';


 $('#login').on('submit', function(e){
  e.preventDefault();

  var username= $('#email-login').val();
  var password = $('#password-login').val();
  var user = {
    username: username,
    password: password
  };

  $.post(apiUrl + '/users', user).then(function(data){
    console.log(data)
  });

});


$('#signup').on('submit', function(e){
 e.preventDefault();

 // var username= $('#email-signup').val();
 // var password = $('#password-signup').val();
 // var user = {
 //   username: username,
 //   password: password
 // };

 $.post(apiUrl + '/users', user).then(function(data){
   console.log(data)
 });

});




$(function(){
  Backbone.history.start();
});
