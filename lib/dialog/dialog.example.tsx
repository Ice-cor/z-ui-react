import React, {useState} from 'react';
import Dialog from './dialog';

const IconExample: React.FC = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <h2>例子1：</h2>
            <button onClick={() => {setVisible(!visible);}}>打开dialog</button>
            <Dialog
                visible={visible}
                onOk={() => {setVisible(false);}}
                onCancel={() => {setVisible(false);}}
            >
                <h3>看到我了吗？</h3>
                <h4>呵呵</h4>
            </Dialog>
        </div>
    );
};

export default IconExample;