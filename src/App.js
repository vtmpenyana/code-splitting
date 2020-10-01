import React, { Component, Suspense } from 'react';
import './App.css';

import Page1 from "./components/Page1";
const Page2 = React.lazy(() => import('./components/Page2'));
const Page3 = React.lazy(() => import('./components/Page3'));


class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    if(this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>
    }
    else if(this.state.route === 'page2') {
      return (<Suspense fallback={<div>{`Hold on tight.... still loading....`}</div>}><Page2 onRouteChange={this.onRouteChange}/></Suspense>)
    }
    else if(this.state.route === 'page3') {
      return (<Suspense fallback={<div>{`Hold on tight.... still loading....`}</div>}><Page3 onRouteChange={this.onRouteChange}/></Suspense>)
    }
  }
}

export default App;
