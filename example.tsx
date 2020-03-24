import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';

import './lib/index.scss';

ReactDom.render((
        <Router>
            <div>
                <header>zui</header>
                <div>
                    <aside>
                        <h2>组件</h2>
                        <ul>
                            <li>
                                <Link to="/icon">Icon</Link>
                            </li>
                            <li>Button</li>
                            <li>
                                <Link to="/dialog">Dialog</Link>
                            </li>
                        </ul>
                    </aside>
                    <main className="body">
                        <Route path="/icon" component={IconExample}/>
                        <Route path="/dialog" component={DialogExample}/>
                    </main>
                </div>
            </div>
        </Router>
    )
    , document.getElementById('root'));