import React from 'react';
import {scopedClassMaker} from '../_util/classes';

const scopedClass = scopedClassMaker('zui-layout');
const sc = scopedClass;

interface Props {

}


const Layout: React.FC<Props> = (props) => {
    return (
        <div className={sc('')}>
            {props.children}
        </div>
    )
};

export {
    // Header,
    // Content,
    // Footer,
    // Sider,
}

export default Layout;