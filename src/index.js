import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstView from './App';
import * as serviceWorker from './serviceWorker';
import Bienvenido from './components/bienvenido'
import Home from './components/home'
import Login from './components/login'
import authandler from './authandler'
import Denied from './components/denied'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={FirstView} />
            <Route path="/bienvenido/" exact component={Bienvenido} />
            <PrivateRoute exact path="/home/">
                <Denied />
            </PrivateRoute>
            <Route path="/login/" exact component={Login} />
            <Route path="/denied/" exact component={Denied} />
        </Switch>
    </Router>
);
function PrivateRoute({ children, ...rest }) {
    let auth = authandler.verify()
    console.log(auth)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.auth === "yes" ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/denied",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
