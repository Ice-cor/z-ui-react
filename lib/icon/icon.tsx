import React from 'react';
import './importIcons';
import './icon.scss';
import classnames from '../_util/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({className, name, ...otherProps}) => {
    return (
        <svg className={classnames('zui-icon', className)}
             {...otherProps}
        >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    );
};

export default Icon;