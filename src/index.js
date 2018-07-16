import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'


import registerServiceWorker from './registerServiceWorker';
import rootRoutes from './router/rootRoutes';
import store from './store/index.js';

import './main.scss'

var routelist = []

rootRoutes.map((item, index) => (
  routelist.push(<Route path={item.path} component={item.component} key={index}/>)
))

function render() {
  ReactDOM.render(
    <Router>
      <Switch>
        {routelist}
      </Switch>
    </Router>  
    
  , root);
}
render()

store.subscribe(render)

registerServiceWorker();
