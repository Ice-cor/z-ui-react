import React, {ReactFragment} from 'react';

// import ReactDOM from 'react-dom';

interface Props {
    value: { [K: string]: any };
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    // onSubmit: React.FormEventHandler;
}

const Form: React.FC<Props> = (props) => {
    return (
        <form>
            {props.fields.map(f => {
                return (
                    <div key={f.name}>
                        {f.label}
                        <input type={f.input.type}/>
                    </div>
                );
            })}
            <div>
                {props.buttons}
            </div>
        </form>
    );
};

export default Form;