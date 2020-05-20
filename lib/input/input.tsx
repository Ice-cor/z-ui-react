import * as React from "react";
import {Fragment} from "react";
import {scopedClassMaker} from "../_util/classes";

import "./input.scss";

interface Props {
    className?: string;
    placeholder?: string;
    type?: string;
}

const scopedClass = scopedClassMaker('zui-input');
const sc = scopedClass;

const Input: React.FC<Props> = (props) => {
    const {className, placeholder, type} = props;
    return (
        <Fragment>
            <input
                className={sc('', {extra: className})}
                placeholder={placeholder}
                type={type}
            />
        </Fragment>
    );
};

export default Input;