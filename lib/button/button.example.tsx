import React from 'react';
import Button from './button';


const ButtonExample: React.FC = () => {
    return (
        <div className="button-page">
            <Button onClick={()=>{console.log('点击了')}}>Default</Button>
            <Button type="primary" onClick={()=>{console.log('点击了')}}>Primary</Button>
            <Button type="success" onClick={()=>{console.log('点击了')}}>Success</Button>
            <Button type="warning" onClick={()=>{console.log('点击了')}}>Warning</Button>
            <Button type="danger" onClick={()=>{console.log('点击了')}}>Danger</Button>
        </div>
    )
}

export default ButtonExample;