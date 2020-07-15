import * as React from "react";
import Form from "../form";
import {useState} from "react";
import Button from "../../button/button";


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
            style={{width: 400 + 'px'}}
            value={formData}
            fields={fields}
            buttons={[
                    <Button type="primary">提交</Button>,
                    <Button>返回</Button>
            ]}
        />
    );
};

export default FormExample;