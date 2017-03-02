var Backbone = require('backbone');
var React = require('react');
var $ = require('jquery');
var User = require('../models/login_models').User;

var apiUrl = 'https://tiny-parse-server.herokuapp.com';
var BaseLayout = require('./layout/base.jsx').BaseLayout;

var ChatContainer = React.createClass({
  render: function(){
    return(
      <BaseLayout>
        <LoginForm />
        <SignupForm />
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>Chatter box</h1>
              <form className="form-group">
                <label htmlFor="Chatter">Chattering in Progress</label>
                <input className="form-control" type="text" name="chatter" placeholder="Chitter Chatter" />
                <input className="form-control btn btn-danger" type="submit" value="Chatter" />
              </form>
            </div>
          </div>
      </BaseLayout>
    )
    }

  });

var LoginForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: ''
    }
  },

  handleLoginSubmit: function(e){
    e.preventDefault();
    console.log(this.state);

    $.get(url).then(function(data){
      console.log(data);
      var user = JSON.stringify(data);
      localStorage.setItem('user', user);
    });


},
handleEmailChange: function(e){
  this.setState({username: e.target.value})
},
handlePasswordChange: function(e){
  this.setState({password: e.target.value})
},

  render: function(){
    return(
      <div className="col-xs-6">
        <h1>Log In</h1>

        <form onSubmit={this.handleLoginSubmit} id="login">
          <div className="form-group">
            <input onChange={this.handleEmailChange} className="form-control" name="username" id="email-login" type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} className="form-control" name="password" id="password-login" type="password" placeholder="Password" />
          </div>

          <input className="btn btn-primary" type="submit" value="Login" />
        </form>

      </div>
    )
  }
});

var SignupForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      password: ''
    }
  },
    handleSignupSubmit: function(e){
      e.preventDefault();
  console.log(this.state);
  var newUser = new User(this.state);
  newUser.save();
  },

  handleEmailChange: function(e){
    this.setState({username: e.target.value})
  },

  handlePasswordChange: function(e){
    this.setState({password: e.target.value})
  },

  render: function(){
    return(
      <div className="col-xs-6">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSignupSubmit} id="signup">
          <div className="form-group">
            <input onChange={this.handleEmailChange} className="form-control" name="email" id="email-signup" type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} className="form-control" name="password" id="password-signup" type="password" placeholder="Password" />
          </div>

          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        </div>
    )
  }
});

module.exports = {
  ChatContainer
};
