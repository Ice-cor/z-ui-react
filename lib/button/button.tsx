import React from 'react';
import {scopedClassMaker} from '../_util/classes';
import './style/button.scss'
interface Props {

}

const scopedClass = scopedClassMaker('zui-button');
const sc = scopedClass;

const Button: React.FC<Props> = (props) => {
    return (
        <button className={sc()}>
            {props.children}
        </button>
    )
}

export default Button;