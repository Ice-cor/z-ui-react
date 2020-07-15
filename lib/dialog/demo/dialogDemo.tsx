import React, { Fragment } from 'react';
import DialogExample from './dialog.example';
import DialogExample2 from './dialog.example2';
import DialogExample3 from './dialog.example3';
import Demo from '../../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
// const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const DialogDemo: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Demo
        path={require('!!raw-loader!./dialog.example.tsx').default}
        title="默认"
      >
        <DialogExample />
      </Demo>
      <Demo
        path={require('!!raw-loader!./dialog.example2.tsx').default}
        title="confirm"
      >
        <DialogExample2 />
      </Demo>
      <Demo
        path={require('!!raw-loader!./dialog.example3.tsx').default}
        title="modal"
      >
        <DialogExample3 />
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;
