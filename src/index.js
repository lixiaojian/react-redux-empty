/**
 * Created by xiaojianli on 2017/1/11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import counter from './counter/reducers';
import Connect1 from './counter/containers/Connect1';



const store = createStore(counter, applyMiddleware(thunk));

const rootEl = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <div>
        <h2>使用react-redux连接</h2>
        <ul>
            <li>
                connect()的前两个参数分别为函数和对象：
                <Connect1 />
            </li>
        </ul>
    </div>
</Provider>,rootEl);
