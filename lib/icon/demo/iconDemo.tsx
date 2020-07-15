import React from 'react';
import IconExample from './icon.example';
import Demo from '../../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
// const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const IconDemo: React.FC<Props> = (props) => {
  return (
    <Demo
      path={require('!!raw-loader!./icon.example.tsx').default}
      title="默认"
    >
      <IconExample />
    </Demo>
  );
};

export default IconDemo;
