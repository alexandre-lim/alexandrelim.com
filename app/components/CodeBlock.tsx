import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import clsx from 'clsx';

type StyleObj = {
  [key: string]: string | number | null;
};

interface PreProps {
  className: string;
  style: StyleObj;
}

const Pre: React.FC<PreProps> = ({ children, className, style }) => {
  return (
    <pre className={clsx(className, 'relative rounded-lg text-left my-4 py-8 overflow-auto')} style={style}>
      {children}
    </pre>
  );
};

const Line: React.FC = ({ children }) => {
  return <div className="table-row">{children}</div>;
};

const LineNo: React.FC = ({ children }) => {
  return <span className="table-cell text-right px-4 select-none opacity-50">{children}</span>;
};

const LineContent: React.FC = ({ children }) => {
  return <span className="table-cell">{children}</span>;
};

interface LanguageTagProps {
  language: Language;
}

const LanguageTag: React.VFC<LanguageTagProps> = ({ language }) => {
  return <div className="absolute top-2 right-4 text-sm text-gray-400">{language}</div>;
};

interface CodeBlock {
  code: string;
  language: Language;
}

const CodeBlock: React.VFC<CodeBlock> = ({ code, language }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <LanguageTag language={language} />
          {tokens.map((line, i) => (
            <Line {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export { CodeBlock };
