import React from 'react';
import {scopedClassMaker} from '../_util/classes';
import './style/button.scss'
interface Props {
    type?: string;
    onClick?: React.MouseEventHandler;
}

const scopedClass = scopedClassMaker('zui-btn');
const sc = scopedClass;

const Button: React.FC<Props> = (props) => {
    return (
        <button className={`zui-btn ${sc(props.type ? props.type : 'default')}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;