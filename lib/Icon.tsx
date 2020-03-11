import React from 'react';
import classnames from './helpers/classnames';
import './importIcons';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
    className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
    const { className, ...otherProps } = props;
    return (
        <svg className={classnames('zui-icon', className)}
             {...otherProps}
        >
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    );
};

export default Icon;