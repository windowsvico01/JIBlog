import React,{ Component } from 'react';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';// Redirect
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import Header from './components/Header';
import './theme-file.less';
import { helloSaga } from './sagas/hello';

/****引入全局样式 */
import './global-style';
const store = createStore(rootReducer, applyMiddleware(createSagaMiddleware(helloSaga)));
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Router history={ history }>
                            <Switch>
                                <Route path="/" component={Header}/>
                            </Switch>
                        </Router>

                    </div>
                </BrowserRouter>
            </Provider>   
        );
    }
}