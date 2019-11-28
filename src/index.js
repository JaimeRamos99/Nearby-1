import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstView from './App';
import * as serviceWorker from './serviceWorker';
import Bienvenido from './components/bienvenido'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={FirstView} />
            <Route path="/bienvenido/" exact component={Bienvenido} />
        </Switch>
    </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
