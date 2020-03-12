import React from 'react';
import classnames from '../helpers/classnames';
import './importIcons';
import './icon.scss';

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