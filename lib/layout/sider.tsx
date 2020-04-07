import React from 'react';
import {scopedClassMaker} from '../_util/classes';

const sc = scopedClassMaker('zui-layout');

const Sider: React.FC = (props) => {
    return (
        <aside className={sc('sider')}>
            {props.children}
        </aside>
    );
};

export default Sider;