var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://usecase.firebaseio.com/items/';

var App = React.createClass({

  mixins: [ ReactFire ],

  componetWillMount: function() {
  	this.bindAsObject(new Firebase(rootUrl), 'items');
  },

  render: function() {
  	console.log(this.state);
    console.log(rootUrl);
  	
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List 123
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));

