import React, {useState} from 'react';
import Dialog from './dialog';
import Button from '../button/button'

const IconExample: React.FC = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button onClick={() => {setVisible(!visible);}}>打开dialog</Button>
            <Dialog
                visible={visible}
                title="我是标题"
                onOk={() => {setVisible(false);}}
                onCancel={() => {setVisible(false);}}
                footer={[
                    <Button type="primary" onClick={() => {setVisible(false);}}>OK</Button>, 
                    <Button type="danger" onClick={() => {setVisible(false);}}>关闭</Button>
                ]}
            >
                <h3>内容...</h3>
                <h4>段落...</h4>
            </Dialog>
        </div>
    );
};

export default IconExample;