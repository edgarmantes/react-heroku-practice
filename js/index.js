require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;


var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Home = require('./components/home')


var routes = (
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
		</Router>
)


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
		routes, 
    	document.getElementById('app'));
});