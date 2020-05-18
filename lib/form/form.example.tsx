import * as React from "react";
import Form from "./form";
import {useState, Fragment} from "react";


const FormExample: React.FC = () => {
    const [formData] = useState({
        userName: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'userName', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ]);
    return (
        <Form
            value={formData}
            fields={fields}
            buttons={
                <Fragment>
                    <button type="submit">提交</button>
                    <button>返回</button>
                </Fragment>
            }
        />
    );
};

export default FormExample;