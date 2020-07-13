import React from 'react';
import Button from './button';

const style = {
    marginRight: 20 + 'px'
}
const ButtonExample: React.FC = () => {
    return (
        <div>
            <Button onClick={()=>{console.log('点击了')}} style={style}>
                Default
            </Button>
        </div>
    )
}

export default ButtonExample;