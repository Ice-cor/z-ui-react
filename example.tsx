import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import IconDemo from './lib/icon/demo/iconDemo';
import DialogDemo from './lib/dialog/demo/dialogDemo';
import ButtonDemo from './lib/button/demo/buttonDemo';
import LayoutDemo from './lib/layout/demo/layoutDemo';
import FormDemo from "./lib/form/demo/formDemo";
import InputDemo from "./lib/input/demo/inputDemo";

import {Content, Layout, Sider} from './lib/layout/layout';


import './example.scss';
// import logo from './logo.png'

const logo = require('./logo.png')

ReactDom.render((
        <Router>
            <Layout className="page">
                <Sider className="page-sider">
                    <div className="page-logo"><img src={logo.default} /></div>
                    <h2>组件</h2>
                    <ul className="nav-list">
                        <li className="nav-item" style={{display: 'none'}}>
                            <Link to="/main">Icon <span className="title-zh">图标</span></Link>
                        </li>
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
                            <Link to="/input">Input <span className="title-zh">输入框</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/form">Form <span className="title-zh">表单</span></Link>
                        </li>
                    </ul>
                </Sider>

                <Layout className="page-right">
                    {/* <Header>
                        <header>zui</header>
                    </Header> */}
                    <Content className="page-context">
                        <Switch>
                            <Route path="/" exact render={()=>{
                                return (<Redirect to="/icon" />)
                            }}>

                            </Route>
                        </Switch>
                        {/* <Route path="/main" component={HelloPage} /> */}
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        <Route path="/button" component={ButtonDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/input" component={InputDemo}/>
                        <Route path="/form" component={FormDemo}/>
                    </Content>
                    {/*<Footer>footer</Footer>*/}
                </Layout>

            </Layout>
        </Router>
    )
    , document.getElementById('root'));