import React, { Fragment } from 'react';
import InputExample from './input.example';
import InputExample2 from './input.example2';
import InputExample3 from './input.example3';
import InputExample4 from './input.example4';
import Demo from '../../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
// const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const InputDemo: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Demo
        path={require('!!raw-loader!./input.example.tsx').default}
        title="默认"
      >
        <InputExample />
      </Demo>
      <Demo
        path={require('!!raw-loader!./input.example4.tsx').default}
        title="密码框"
      >
        <InputExample4 />
      </Demo>
      <Demo
        path={require('!!raw-loader!./input.example2.tsx').default}
        title="文本框"
      >
        <InputExample2 />
      </Demo>
      <Demo
        path={require('!!raw-loader!./input.example3.tsx').default}
        title="禁用状态"
      >
        <InputExample3 />
      </Demo>
    </Fragment>

  );
};

export default InputDemo;
