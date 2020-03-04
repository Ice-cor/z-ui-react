import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

const App: React.FC = () => {
    return (
        <div id="app">
            <Icon name="setting" />
            <Icon name="arrow_right"></Icon>
        </div>
    )
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);