import * as React from "react";
import {scopedClassMaker} from "../_util/classes";

import "./input.scss"

interface Props {
    className?: string;
    placeholder?: string;
}

const scopedClass = scopedClassMaker('zui-input');
const sc = scopedClass;

const Input: React.FC<Props> = (props) => {
    const {className, placeholder} = props;
    return (
        <input
            className={sc('', {extra: className})}
            placeholder={placeholder}
        />
    );
};

export default Input;