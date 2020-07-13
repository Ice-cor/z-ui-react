import React, { Fragment } from 'react';
import ButtonExample from './button.example'
import Demo from '../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const ButtonDemo: React.FC<Props> = (props) => {
  return (
      <Fragment>
       <Demo path={code.default} title="基本">
           <ButtonExample />
       </Demo>
       <Demo path={code.default} title="不同状态">
           <ButtonExample />
       </Demo>
       </Fragment>
    );
};

export default ButtonDemo;