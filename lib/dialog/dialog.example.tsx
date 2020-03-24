import React, {useState} from 'react';
import Dialog from './dialog';

const IconExample: React.FC = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {setVisible(!visible);}}>打开dialog</button>
            <Dialog visible={visible} >nihaoa</Dialog>
        </div>
    );
};

export default IconExample;