// src/CodeEditor.js
import React, { useState } from 'react';
import { Highlight } from 'prism-react-renderer';
import './CodeEditor.css';

const theme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(99, 119, 119)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'rgb(99, 119, 119)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(219, 92, 44)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(40, 206, 250)',
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: 'rgb(170, 9, 130)',
      },
    },
  ],
};

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
      <div className="code-output">
        <Highlight {...{}} code={code} language="javascript" theme={theme}>
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
      </div>
    </div>
  );
};

export default CodeEditor;
