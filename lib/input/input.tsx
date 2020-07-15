import * as React from "react";
import {Fragment} from "react";
import {scopedClassMaker} from "../_util/classes";

import "./input.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string;
 
}

const sc = scopedClassMaker('zui-input');

const Input: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <Fragment>
            <input
                className={sc('', {extra: className})}
                {...restProps}
            />
        </Fragment>
    );
};

export default Input;
export {default as Textarea} from './textarea';