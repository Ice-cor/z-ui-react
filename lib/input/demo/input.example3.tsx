import * as React from "react";
import Input, { Textarea } from "../input";

const InputExample: React.FC = (props) => {
    return (
        <div>
            <Input placeholder="Basic input" type="text" style={{width: 300 + 'px'}} disabled/>
            
            <Textarea placeholder="Basic input" style={{width: 300 + 'px', marginTop: 24 + 'px'}} disabled/>
        </div>
    );
};

export default InputExample;