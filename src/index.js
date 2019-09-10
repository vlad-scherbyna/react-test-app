import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from "./store/configStore";
import Posts from './components/Posts/Posts'

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Posts />,
    </Provider>,
    document.getElementById('root'));
