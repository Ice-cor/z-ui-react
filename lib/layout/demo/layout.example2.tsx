import React from 'react';
import {Layout, Header, Sider, Footer, Content} from "../layout";

const LayoutExample: React.FC = () => {
    return (
        <div className="example-layout">
            <Layout style={{width: 500 + 'px'}}>
            <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
};

export default LayoutExample;