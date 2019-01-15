/*eslint-disable*/
/***生产环境的入口文件--不需要热更新 */
import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './App';

const renderDom = Comment => {
    render(
        <Component/>,
        document.getElementById('app')
    );
};
renderDom(App);