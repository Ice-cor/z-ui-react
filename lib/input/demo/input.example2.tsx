import * as React from "react";
import {Textarea} from "../input"

const InputExample: React.FC = (props) => {
    return (
        <div>
            <Textarea style={{width: 300 + 'px'}} placeholder="Basic Textarea" />
        </div>
    );
};

export default InputExample;