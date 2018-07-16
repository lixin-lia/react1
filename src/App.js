import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import appRoutes from '@/router/appRoutes.js'
import MainFooter from '@/components/MainFooter'
MainFooter
class App extends Component {
  render() {
    return (
      <div className="container">
      李鑫  8点26  8点36
        <Switch>
          {
            appRoutes.map((item, index) => {
              return (<Route path={item.path} component={item.component} key={index}/>)
            })
          }
          <Redirect to={{pathname: '/home'}}/>
        </Switch>
         <MainFooter/>
      </div>
    );
  }
}

export default App;
