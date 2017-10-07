function User() {
  var username, password;

  function doLogin(user, pwd) {
    var msg = "" + user + "'s password went "+ password + " => ";
    username = user;
    password = pwd;

    msg += password;
    console.log(msg);
  }

  var publicAPI = {
    login: doLogin
  };

  return publicAPI;
}

// create a 'User' module instance
//
var fred = User();
fred.login( "fred", "mysecretcode" );

var bob = User();
bob.login( "bob", "likes state" );

fred.login( "fred", "likes state too" );


