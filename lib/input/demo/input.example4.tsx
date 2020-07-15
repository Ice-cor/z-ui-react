import * as React from "react";
import Input from "../input";

const InputExample: React.FC = (props) => {
    return (
        <div>
            <Input placeholder="Basic password input" type="password" style={{width: 300 + 'px'}}/>
        </div>
    );
};

export default InputExample;