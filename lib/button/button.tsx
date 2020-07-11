import React from 'react';
import {scopedClassMaker} from '../_util/classes';
import './style/button.scss'
interface Props {
    type?: string;
    onClick?: React.MouseEventHandler;
}

const sc = scopedClassMaker('zui-btn');

const Button: React.FC<Props> = (props) => {
    // const {className, ...restProps} = props;
    return (
        // className={`zui-btn ${sc(props.type ? props.type : 'default')}`}
        <button className={`zui-btn ${sc(props.type ? props.type : 'default')}`}>
            {props.children}
        </button>
    )
}

export default Button;