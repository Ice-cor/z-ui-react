import * as React from "react";
import {Fragment} from "react";
import {scopedClassMaker} from "../_util/classes";

import "./input.scss";
import Icon from '../icon/icon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

const sc = scopedClassMaker('zui-input');

const Input: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    const [visible, setVisible] = React.useState(false)
    return (
        <Fragment>
            {props.type === 'text' && <input
                className={sc('', {extra: className})}
                {...restProps}
            />}
            {props.type === 'password' && 
                <span className={sc('password')}>
                    <input
                    className={sc('', {extra: className})}
                    {...restProps}
                    type={visible ? 'text' : props.type}
                    />
                    <span className={sc('suffix')} onClick={()=>{setVisible(!visible)}} >
                    {
                        visible ? <Icon name="view_off" /> :
                        <Icon name="view" /> 
                    }
                    </span>
                </span>
            }
        </Fragment>
    );
};

export default Input;
export {default as Textarea} from './textarea';