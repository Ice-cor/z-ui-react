import React, { useState } from 'react';

interface Props {
  path: string;
}

const Demo: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="code-block">
      {props.children}
      <div className="code-toolbar">
        <button onClick={() => {setOpen(!open)}}>查看代码</button>
      </div>
      {open ? <pre style={{width: 100 + '%'}}>{props.path}</pre> : null}
    </div>
  );
};

export default Demo;
