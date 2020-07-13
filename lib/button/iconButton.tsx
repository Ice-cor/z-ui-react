import React from 'react';
import { scopedClassMaker } from '../_util/classes';
import './style/button.scss';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: any;
}

const sc = scopedClassMaker('zui-btn');

const IconButton: React.FC<Props> = (props) => {
  const {className, ...restProps} = props;
  return (
    // className={`zui-btn ${sc(props.type ? props.type : 'default')}`}
    <button className={`zui-btn zui-btn-icon ${sc(props.type ? props.type : 'default', {extra: className})}`} {...restProps}>
      {props.children}
    </button>
  );
};

export default IconButton;
