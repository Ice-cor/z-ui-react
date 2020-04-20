import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../_util/classes';

import Sider from './sider';
import './layout.scss';


const sc = scopedClassMaker('zui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}


const Layout: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.some(node => node.type === Sider);

    return (
        <section
            className={sc({'': true, hasAside}, {extra: className})}
            {...restProps}>
            {props.children}
        </section>
    );
};

export {default as Footer} from './footer';
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Sider} from './sider';
export {Layout};
export default Layout;