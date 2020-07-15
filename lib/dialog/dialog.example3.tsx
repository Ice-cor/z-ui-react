import React from 'react';
import {modal} from './dialog';
import Button from '../button/button'

const IconExample: React.FC = () => {
    // const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button onClick={() => {
                const modalFn = modal({
                    content: (
                        <div>
                            <h3>modalFn执行返回关闭当前modal的方法</h3>
                            <Button onClick={() => {modalFn();}}>关闭</Button>
                        </div>
                    )
                })}}>
                打开modal
            </Button>
        </div>
    );
};

export default IconExample;