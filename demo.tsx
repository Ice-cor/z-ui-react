import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl'

interface Props {
  path: string;
}

const Demo: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="code-block">
      {props.children}
      <div className="code-toolbar">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          查看代码
        </button>
      </div>
      {open ? (
        <Highlight {...defaultProps} code={props.path} language="jsx" theme={theme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) : null}
    </div>
  );
};

export default Demo;
