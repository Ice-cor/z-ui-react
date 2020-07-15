import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

import Icon from './lib/icon/icon';
import { IconButton } from './lib/button/button';

interface Props {
  path: string;
  title: string;
}

const Demo: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="code-block-wrap">
      <h3 className="title">{props.title}</h3>
      <div className="code-block">
        <div className="code-view">{props.children}</div>

        <div className="code-toolbar">
          <IconButton
            className="code-toolbar-iconButton"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <Icon name="zhankai" />
          </IconButton>
        </div>
        {visible ? makeHighlight(props.path) : null}
      </div>
    </div>
  );
};

export const makeHighlight = (code: string) => (
  <Highlight {...defaultProps} code={code} language="jsx" theme={theme}>
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
);
export default Demo;
