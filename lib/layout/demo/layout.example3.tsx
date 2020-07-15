import React from 'react';
import {Layout, Header, Sider, Footer, Content} from "../layout";

const LayoutExample: React.FC = () => {
    return (
        <div className="example-layout">
            <Layout style={{width: 500}} className="hehe">
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutExample;