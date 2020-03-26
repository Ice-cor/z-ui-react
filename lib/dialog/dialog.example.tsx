import React, {useState} from 'react';
import Dialog, {confirm} from './dialog';

const IconExample: React.FC = () => {
        const [visible, setVisible] = useState(false);
        const [visible2, setVisible2] = useState(false);
        return (
            <div>
                <div>
                    <h2>例子1：</h2>
                    <button onClick={() => {setVisible(!visible);}}>打开dialog</button>
                    <button onClick={() => {setVisible2(true);}}>打开自定义footer</button>
                    <Dialog
                        visible={visible}
                        onOk={() => {setVisible(false);}}
                        onCancel={() => {setVisible(false);}}
                        okText="nima"
                    >
                        <h3>看到我了吗？</h3>
                        <h4>呵呵</h4>
                    </Dialog>
                    <Dialog
                        visible={visible2}
                        onOk={() => {setVisible2(false);}}
                        onCancel={() => {setVisible2(false);}}
                        okText="hehe"
                        footer={[<button onClick={()=> {setVisible2(false)}}>hehe</button>, <button>你好呀</button>]}
                    >
                        <h3>看到我了吗？</h3>
                        <h4>呵呵</h4>
                    </Dialog>
                </div>
                <div>
                    <h2>例子2：</h2>
                    <button onClick={() => {confirm('123');}}>confirm</button>
                </div>
            </div>
        );
    }
;

export default IconExample;