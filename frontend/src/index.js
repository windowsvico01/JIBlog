/* eslint-disable */
/** 开发环境的入口文件，有热更新 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './App';

const renderDom = Component => {
    render(
        <AppContainer>
          <Component />
        </AppContainer>,
        document.getElementById('app')
    );
}

renderDom(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        console.log(App);
        renderDom(App);
    })
}