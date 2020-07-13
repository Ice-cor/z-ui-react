import React from 'react';
import {IconButton} from './button';
import Icon from '../icon/icon';

const style = {
    marginRight: 20 + 'px'
}
const ButtonExample: React.FC = () => {
    return (
        <div>
            <IconButton onClick={()=>{console.log('点击了')}} style={style}>
                <Icon name="close" />
            </IconButton>
            <IconButton type="primary" onClick={()=>{console.log('点击了')}} style={style}>
                <Icon name="info" />
            </IconButton>
            <IconButton type="success" onClick={()=>{console.log('点击了')}} style={style}>
                <Icon name="setting" />
            </IconButton>
            <IconButton type="warning" onClick={()=>{console.log('点击了')}} style={style}>
                <Icon name="zhankai" />
            </IconButton>
        </div>
    )
}

export default ButtonExample;