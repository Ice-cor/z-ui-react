import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from "./lib/form/form.example";

import {Header, Content, Layout, Sider} from './lib/layout/layout';

import './example.scss';


ReactDom.render((
        <Router>
            <Layout className="page">
                <Sider className="sider">
                    <h2>组件</h2>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/icon">Icon <span className="title-zh">图标</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/button">button <span className="title-zh">按钮</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dialog">Dialog <span className="title-zh">对话框</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/layout">Layout <span className="title-zh">布局</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/form">Form <span className="title-zh">表单</span></Link>
                        </li>
                    </ul>
                </Sider>

                <Layout>
                    <Header>
                        <header>zui</header>
                    </Header>
                    <Content className="body">
                        <Route path="/icon" component={IconExample}/>
                        <Route path="/dialog" component={DialogExample}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/layout" component={LayoutExample}/>
                        <Route path="/form" component={FormExample}/>
                    </Content>
                    {/*<Footer>footer</Footer>*/}
                </Layout>

            </Layout>
        </Router>
    )
    , document.getElementById('root'));