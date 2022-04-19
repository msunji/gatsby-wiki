import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';

const CodeBlock = ({ children }) => {
  const language = /language-(\w+)/.exec(children.props.className || '');
  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={language[1]}
      theme={shadesOfPurple}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          <span className="relative -top-3 uppercase bg-red-500 text-white font-semibold tracking-widest px-4 py-1">
            {language[1]}
          </span>
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
};

export default CodeBlock;
