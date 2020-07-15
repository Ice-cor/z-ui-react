import React from 'react';
import {Layout, Header, Footer, Content} from "../layout";

const LayoutExample: React.FC = () => {
    return (
        <div className="example-layout">
            <Layout style={{width: 500}}>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
            </Layout>
        </div>
    );
};

export default LayoutExample;