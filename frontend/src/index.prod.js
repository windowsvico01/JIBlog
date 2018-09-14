/*eslint-disable*/
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