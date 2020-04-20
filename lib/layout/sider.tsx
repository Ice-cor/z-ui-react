import React from 'react';
import {scopedClassMaker} from '../_util/classes';

interface Props extends React.HTMLAttributes<HTMLElement> {

}
const sc = scopedClassMaker('zui-layout');

const Sider: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <aside className={sc('sider', {extra: className})} {...restProps}>
            {props.children}
        </aside>
    );
};

export default Sider;