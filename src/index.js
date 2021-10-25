import ReactDOM from "react-dom";
import { MDXProvider } from '@mdx-js/react'
import { App } from "./App";
import { CodeBlock } from "./components/CodeBlock";

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />
}

const app = document.getElementById("app");
ReactDOM.render(<MDXProvider components={components}><App /></MDXProvider>, app);
