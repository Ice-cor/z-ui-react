import React from 'react';
import Icon from './icon';

const style = {
    marginRight: 12 + 'px',
    fontSize: 1.5 + 'em'
}
const IconExample: React.FC = () => {
    return (
        <div>
            <Icon name="info" style={style} />
            <Icon name="setting" style={style} />
            <Icon name="zhankai" style={style} />
            <Icon name="close" style={style} />
        </div>
    )
};

export default IconExample;