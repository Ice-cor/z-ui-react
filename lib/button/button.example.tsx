import React from 'react';
import Button from './button';


const ButtonExample: React.FC = () => {
    return (
        <div>
            <Button onClick={()=>{console.log('点击了')}}>点击</Button>
            <Button type="primary" onClick={()=>{console.log('点击了')}}>点击</Button>
            <Button type="success" onClick={()=>{console.log('点击了')}}>点击</Button>
            <Button type="warning" onClick={()=>{console.log('点击了')}}>点击</Button>
            <Button type="danger" onClick={()=>{console.log('点击了')}}>点击</Button>
        </div>
    )
}

export default ButtonExample;