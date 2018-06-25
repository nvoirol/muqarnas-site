import React from "react";

import { Route, Router, browserHistory } from "react-router";

import Application from "./components/Application"

import Home from "./components/Home";
import Egypt_Syria_muqarnas from "./components/Egypt_Syria_muqarnas";
import India_muqarnas from "./components/India_muqarnas";
import Iran_muqarnas from "./components/Iran_muqarnas";
import Morocco_muqarnas from "./components/Morocco_muqarnas";
import Spain_muqarnas from "./components/Spain_muqarnas";
import Turkey_muqarnas from "./components/Turkey_muqarnas";
import Egypt_Syria_mihrab from "./components/Egypt_Syria_mihrab";
import India_mihrab from "./components/India_mihrab";
import Iran_mihrab from "./components/Iran_mihrab";
import Morocco_mihrab from "./components/Morocco_mihrab";
import Spain_mihrab from "./components/Spain_mihrab";
import Turkey_mihrab from "./components/Turkey_mihrab";
import Egypt_Syria_minbar from "./components/Egypt_Syria_minbar";
import India_minbar from "./components/India_minbar";
import Iran_minbar from "./components/Iran_minbar";
import Morocco_minbar from "./components/Morocco_minbar";
import Spain_minbar from "./components/Spain_minbar";
import Turkey_minbar from "./components/Turkey_minbar";
import about from "./components/about";

export default (
	<Router history={browserHistory}>
	  	<Route component={Application}>
	    	<Route path="/" component={Home} />
	    	<Route path="/Egypt_Syria_muqarnas" component={Egypt_Syria_muqarnas} />
	    	<Route path="/India_muqarnas" component={India_muqarnas} />
	    	<Route path="/Iran_muqarnas" component={Iran_muqarnas} />
	    	<Route path="/Morocco_muqarnas" component={Morocco_muqarnas} />
	    	<Route path="/Spain_muqarnas" component={Spain_muqarnas} />
	    	<Route path="/Turkey_muqarnas" component={Turkey_muqarnas} />
	    	<Route path="/Egypt_Syria_mihrab" component={Egypt_Syria_mihrab} />
	    	<Route path="/India_mihrab" component={India_mihrab} />
	    	<Route path="/Iran_mihrab" component={Iran_mihrab} />
	    	<Route path="/Morocco_mihrab" component={Morocco_mihrab} />
	    	<Route path="/Spain_mihrab" component={Spain_mihrab} />
	    	<Route path="/Turkey_mihrab" component={Turkey_mihrab} />
	    	<Route path="/Egypt_Syria_minbar" component={Egypt_Syria_minbar} />
	    	<Route path="/India_minbar" component={India_minbar} />
	    	<Route path="/Iran_minbar" component={Iran_minbar} />
	    	<Route path="/Morocco_minbar" component={Morocco_mihrab} />
	    	<Route path="/Spain_minbar" component={Spain_minbar} />
	    	<Route path="/Turkey_minbar" component={Turkey_minbar} />
			<Route path="/about" component={about} />
	    </Route>
	</Router>
);