import React from 'react';
import {confirm} from './dialog';
import Button from '../button/button'

const IconExample: React.FC = () => {
    // const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button onClick={() => {
                confirm({
                  content: '我是内容...',
                  yes: () => {
                    console.log('可以');
                  },
                  no: () => {
                    console.log('取消');
                  }
                });
            }}>
                打开confirm
            </Button>
        </div>
    );
};

export default IconExample;