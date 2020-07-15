import React, { Fragment } from 'react';
import FormExample from './form.example';
import Demo from '../../../demo';
// require支持自定义加载方式 !!为自定义加载方式的标志
// const code = require('!!raw-loader!./button.example.tsx');

interface Props {}

const FormDemo: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Demo
        path={require('!!raw-loader!./form.example.tsx').default}
        title="默认"
      >
        <FormExample />
      </Demo>
    </Fragment>
  );
};

export default FormDemo;
