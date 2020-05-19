import * as React from "react";
import Form from "./form";
import {useState, Fragment} from "react";
import Button from "../button/button";


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
                    <Button type="primary">提交</Button>
                    <Button>返回</Button>
                </Fragment>
            }
        />
    );
};

export default FormExample;