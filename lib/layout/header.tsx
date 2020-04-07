import React from 'react';
import {scopedClassMaker} from '../_util/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{}

const sc = scopedClassMaker('zui-layout');

const Header: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <header className={sc('header', {extra: className})} {...restProps}>
            {props.children}
        </header>
    );
};

export default Header;