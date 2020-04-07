import React from 'react';
import {scopedClassMaker} from '../_util/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{}

const sc = scopedClassMaker('zui-layout');

const Footer: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <footer className={sc('footer',{extra: className})} {...restProps}>
            {props.children}
        </footer>
    );
};

export default Footer;