import React from 'react';
import Input from '../input/input'
import {scopedClassMaker} from "../_util/classes";

import './form.scss'

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
    value: { [K: string]: any };
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: Array<React.ReactElement>
    // onSubmit: React.FormEventHandler;
}

const sc = scopedClassMaker('zui-form');

const Form: React.FC<Props> = (props) => {
    const {className, ...restProps} = props
    return (
        <form 
            className={sc('', {extra: className})}
            {...restProps}
        >
            {props.fields.map(f => {
                return (
                    <div key={f.name} className={sc('row')}>
                        <label className={sc('label')}>
                            <div className={sc('label-name')}>{f.label}</div>
                            <Input type={f.input.type} />
                        </label> 
                    </div>
                );
            })}
            {props.buttons.length > 0 ?
                <div className={sc('footer')}>
                    {props.buttons}
                </div> : null
            }
        </form>
    );
};

export default Form;