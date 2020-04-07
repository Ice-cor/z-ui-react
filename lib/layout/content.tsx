import React from 'react';
import {scopedClassMaker} from '../_util/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{}

const sc = scopedClassMaker('zui-layout');

const Content: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <main className={sc('content', {extra: className})} {...restProps}>
            {props.children}
        </main>
    );
};

export default Content;