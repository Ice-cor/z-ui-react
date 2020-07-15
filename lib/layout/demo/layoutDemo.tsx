import React, { Fragment } from 'react';
import LayoutExample from './layout.example';
import LayoutExample2 from './layout.example2';
import LayoutExample3 from './layout.example3';
import Demo from '../../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
// const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const LayoutDemo: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Demo
        path={require('!!raw-loader!./layout.example.tsx').default}
        title="默认"
      >
        <LayoutExample />
      </Demo>
      <Demo
        path={require('!!raw-loader!./layout.example2.tsx').default}
        title="侧边栏"
      >
        <LayoutExample2 />
      </Demo>
      <Demo
        path={require('!!raw-loader!./layout.example3.tsx').default}
        title="外侧边栏"
      >
        <LayoutExample3 />
      </Demo>
    </Fragment>
  );
};

export default LayoutDemo;
