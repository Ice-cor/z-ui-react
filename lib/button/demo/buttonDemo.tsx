import React, { Fragment } from 'react';
import ButtonExample from './button.example'
import ButtonExample2 from './button.example2'
import ButtonExample3 from './button.example3'
import Demo from '../../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
// const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const ButtonDemo: React.FC<Props> = (props) => {
  return (
      <Fragment>
       <Demo path={require('!!raw-loader!./button.example.tsx').default} title="默认">
           <ButtonExample />
       </Demo>
       <Demo path={require('!!raw-loader!./button.example2.tsx').default} title="不同状态">
           <ButtonExample2 />
       </Demo>
       <Demo path={require('!!raw-loader!./button.example3.tsx').default} title="icon按钮">
           <ButtonExample3 />
       </Demo>
       </Fragment>
    );
};

export default ButtonDemo;