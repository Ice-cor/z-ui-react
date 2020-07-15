import * as React from "react";
import {Fragment} from "react";
import {scopedClassMaker} from "../_util/classes";

import "./input.scss";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?: string;
 
}

const sc = scopedClassMaker('zui-input');

const Textarea: React.FC<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <Fragment>
            <textarea
                className={`zui-input-textarea ${sc('', {extra: className})}`}
                {...restProps}

            />
        </Fragment>
    );
};

export default Textarea;