import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import IconExample from './lib/icon/icon.example';


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
                        </ul>
                    </aside>
                    <main className="body">
                        <Route path="/icon" component={IconExample}/>
                    </main>
                </div>
            </div>
        </Router>
    )
    , document.getElementById('root'));