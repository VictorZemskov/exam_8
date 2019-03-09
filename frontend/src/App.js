import React, {Component} from 'react';
import './App.css';
import Main from './containers/Main/Main';
import Detail from './containers/Detail/Detail';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {


    render() {
        return (
            <div className="App">
               <BrowserRouter>
                  <Switch>
                    <Route path="/detail/:id" exact component={Detail}/>
                    <Route path="/" exact component={Main}/>

                  </Switch>
               </BrowserRouter>
            </div>
        );
    }
}

export default App;
