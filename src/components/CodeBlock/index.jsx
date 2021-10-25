import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';

export const CodeBlock = ({ children, className }) => {
  const language = className?.replace(/language-/, '') || '';

  return (
    <section className="lg:w-[120%] lg:ml-[-10%]">
      <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
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
    </section>
  );
};
