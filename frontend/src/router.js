import React,{ Component } from 'react';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';// Redirect
import App from './App';
import history from './history';

class RouterDom extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Router history={ history }>
                        <Switch>
                            <Route path="/" component={App}/>
                        </Switch>
                    </Router>

                </div>
            </BrowserRouter>
        );
    }
}
export default RouterDom;