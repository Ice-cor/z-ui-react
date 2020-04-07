import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';

const LayoutExample: React.FC = () => {
    return (
        <div>
            <div>
                <h2>例子1</h2>
                <Layout className="nihao" style={{width: 500}}>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h2>例子2</h2>
                <Layout style={{width: 500}}>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h2>例子3</h2>
                <Layout style={{width: 500}}>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h2>例子4</h2>
                <Layout style={{width: 500}} className="hehe">
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample;