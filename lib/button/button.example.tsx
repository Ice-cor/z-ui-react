import React from 'react';
import Button from './button';

const style = {
    marginRight: 20 + 'px'
}
const ButtonExample: React.FC = () => {
    return (
        <div>
            <Button onClick={()=>{console.log('点击了')}} style={style}>Default</Button>
            <Button type="primary" onClick={()=>{console.log('点击了')}} style={style}>Primary</Button>
            <Button type="success" onClick={()=>{console.log('点击了')}} style={style}>Success</Button>
            <Button type="warning" onClick={()=>{console.log('点击了')}} style={style}>Warning</Button>
            <Button type="danger" onClick={()=>{console.log('点击了')}} style={style}>Danger</Button>
        </div>
    )
}

export default ButtonExample;