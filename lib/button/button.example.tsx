import React from 'react';
import Button from './button';


const ButtonExample: React.FC = () => {
    return (
        <div>
            <Button onClick={()=>{console.log('点击了')}}>点击</Button>
        </div>
    )
}

export default ButtonExample;