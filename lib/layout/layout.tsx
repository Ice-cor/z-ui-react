import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../_util/classes';

import './layout.scss';
import Sider from './sider';

const sc = scopedClassMaker('zui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}


const Layout: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = children.length &&
        children.some(node => node.type === Sider);

    return (
        <section
            className={sc('', {extra: [className, hasAside ? 'hasAside' : ''].join(' ')})}
            {...restProps}>
            {props.children}
        </section>
    );
};

export {
    // Header,
    // Content,
    // Footer,
    // Sider,
};

export default Layout;