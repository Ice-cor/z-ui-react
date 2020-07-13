import React from 'react';
import ButtonExample from './button.example'
import Demo from '../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const ButtonDemo: React.FC<Props> = (props) => {
  return (
       <Demo path={code.default}>
           <ButtonExample />
       </Demo>
    );
};

export default ButtonDemo;